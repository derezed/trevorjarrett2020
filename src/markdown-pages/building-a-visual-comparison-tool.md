---
slug: "/blog/building-a-visual-regression-tool-with-nodejs"
date: "2020-10-07"
title: "Building a Visual Regression Tool"
---

Recently, a co-worker and I were tasked with making an update to a large set of "profile pages" for a client. The meat and potates of the task was to move from a custom service to a service like Algolia. Each profile page had components and sections paired to similar named data points in each service.

Once we grabbed the new data and hooked our profile page template to use that new source, we had to adjust a few logic areas. Now the difficult part...testing.

The total number of profiles to check were in the realm of over a thousand! We could manually check these, but the amount of time comparing a staging site to a prod site line by line would be time consuming. Then we thought about automation.

Before we began we sat down and planned 4 different goals of this tool.

1. Compare a visual difference of Page A and Page B
2. Export a CSV of "failed" differences between the pages
3. Export screenshots of Page A, Page B, and the visual difference
4. Make this resuable

#### The Solution

Introducing [Visual Differ](https://github.com/trendyminds/visual-differ)!

My co-worker and I ended up sitting down and sort of pair programming this out. What was funny is before meeting up we each had finished the part the other was struggling with. After merging the two code bases together, Visual Differ started taking a shape.

We settled on using the following libraries to the heavy lifting, and developing this in NodeJS because we both feel we are strong Javascript developers.

* Puppeteer - For autmating navigaton to each profile, and taking screenshots
* Pixelmatch - For comparing the screenshots and minding pixel differences
* PNGJS - For creating an image of the visual difference between each page
* fs - For general filesystem shenanigans

A few other libraries were included to make the output beautiful, but they didn't really contribute to the meat and potatoes of what we were needing to accomplish.

#### Navigating and Taking Screenshots

Skipping over some of the configuration things, we ended up having a "config" file with an array of objects representing the pages to check. We settled on three properties for these objects.

* URL A, noted as "a"
* URL B, noted as "b"
* CSS, a place to pass some css to override styles on the page to screenshot hidden elements

Step one was navigating to the page in question. Puppeteer makes that _simple_.

```
await page.goto(url.a);
```

Cool. We are on URL A. Next up, we need to load in any custom CSS that we have defined. Puppeteer also makes this easy.

```
await page.evaluate((url) => {
  let style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = url.css;
  document.getElementsByTagName("head")[0].appendChild(style);
}, url);
```

The above should make sense to most Javascript minded people. Create a style tag dynamically, define it's type, and set it's innerHTML to the defined CSS from our URL's property. Last and most important step...write it to the page!

Next, we take the screenshot. Yet another thing that Puppeteer makes easy!

```
await page.screenshot({
  path: `screenshots/${date}/${i + 1}/a.png`,
});
```

We are doing a few thinsg here; when the tool beings to run we create a screenshots folder based on the date and time at the start of the run. We then write all of our screenshots there, but they are prefixed with the iteration of our overall loop plus 1, because we don't want a folder titled "0", being executed.

Once the screenshot is saved, we do the exact steps for URL B: navigate to the page, apply any CSS, and take the screenshot.

#### Determing the Visual Differece

Here's where the fun begins! As we loop over each of our URLs we need to load read their data and pass them to PNGjs to do a few different tests.

```
const img1 = PNG.sync.read(
  fs.readFileSync(`screenshots/${date}/${i + 1}/a.png`)
);

const img2 = PNG.sync.read(
  fs.readFileSync(`screenshots/${date}/${i + 1}/b.png`)
);
```

Now that we have read our screenshots into memory we need to determine to use their width and height to help create our visual difference image.

```
const { width, height } = img1;
const diff = new PNG({ width, height });
```

In comes Pixelmatch. Pixelmatch makes comparing two images a trivial task.

```
const diffAmount = pixelmatch(
  img1.data,
  img2.data,
  diff.data,
  width,
  height,
  {
    threshold: config.diffThreshold,
  }
);
```

That's it. For real; that's all you need to pass to Pixelmatch to find the difference.

* img1.data and img2.data - The data of the images we need to find differences between
* diff.data - The image we created to write ouf visual difference to
* width and height - All three images need to have the same width and height in order for this to calculate and do it's job correctly.

So, we've created our difference of the images. the next step is to determine if there is nonacceptable difference amount. It's worth noting here that we we are checking the difference of the pixels between images. That's what Pixelmatch is returning to us in diffAmount.

```
if (diffAmount >= config.nonacceptableDiff) {
  log(
    chalk.red(
      `\t- WARNING! It appears there's a non-trivial difference from this test!`
    )
  );
  log(chalk.red(`\t- File: screenshots/${date}/${i + 1}/diff.png`));
}
```

The If statement simply checks if diffAmount is greater than or equal to an arbitrary number of different pixels. It can be 1, 2, 10, 42, or any other number really. By default, we are using 10 pixels difference is nonacceptable.

And that's really it. Once we have that information we append the data to a CSV file and move onto the next one.

```
fs.appendFileSync(
    `screenshots/${date}/audit.csv`,
    `${url.a},${url.b},${i + 1}/diff.png,${diffAmount},${
      diffAmount <= config.nonacceptableDiff ? "Pass" : "Fail"
    },""\n`
  );

  fs.writeFileSync(
    `screenshots/${date}/${i + 1}/diff.png`,
    PNG.sync.write(diff)
  );
}
```

We felt the CSV would be most useful if we listed URL A, URL B, Path to diff image, # of pixels difference, Status (if it failed or passed the diff test), and Notes.

#### Closing Thoughts

This ended up helping save us and our client quite a bit of time. It was easy to open the failed diff images and quickly determine the cause. After awhile we noticed repeating failed diffs were due to additional values listed in our new service than what was in the old service.

You can view the full code on the Github repo [here](https://github.com/trendyminds/visual-differ).
