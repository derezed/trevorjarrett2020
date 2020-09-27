---
slug: "/blog/another-redesign"
date: "2020-09-26"
title: "Another Redesign"
---

### I swear, I redesign my site as often as I change clothes.

That's being overdramatic.

Earlier this year I decided to do something with the server I was paying for. As usual though, that didn't last too long. I go through this cycle of remembering I pay for hosting, redesign my site, set blogging goals...and I've given up on them.

But recently, I've felt pretty inspired to bring my site back from the edges of death and _do something_ with it. A week before posting this I decided to set some simple goals and execute them.

1. Move my website from iPage to Digital Ocean
2. Move my email hosting to something cheap
3. Redesign the site
4. Redevelop the site using something "new"
5. Blog about it

#### Move my website from iPage to Digital Ocean

Step one was set up a Digital Ocean droplet and move my site over. This didn't seem to hard. At a previous job we used droplets for everything; they were easy to spin up, and well priced. After deciding to switch I was able to drop my yearly price.

- Complete iPage hosting plan: $261.35 a year
- Digital Ocean hosting (basic droplet): $5.00 a month

When I purchased my iPage hosting some 5 years ago I purchased my domain there as well. For now, I plan to keep it there.

Why the switch though? Nothing wrong with iPage at all. I just wanted to save the money and have no need for unlimited storage and all of those other perks.

### Move my email hosting to something cheap

Step two...email. I was running a general webmail inbox on iPage so I had a personalized email address. I still use it for some stuff, but if I cancel hosting, I'd lose access to that inbox. I settled on moving that account to Namecheap's private email. It's something like $9 a year for a 5GB inbox. This should give me enough time to route emails I care about from there to my personal Gmail account.

So far the total cost of switching is around $5.75 a month ($5.00 for DO, ~$0.75 a month for email hosting).

### Redesign the site

I'm going to be honest. I can't design. I wanted something simple.

### Redevelop the site using something "new"

There's been a lot of amongst us devs at work about TailWindCSS. I like the traditional way of CSS, but after seeing some of TailWind in action I figured I'd give it ago.

I didn't think I'd like TailWind. I really didn't. But I'm starting to see the light. It's a great tool to sping something up quick with it.

Along with TailWind I decided to give Gatsby another shot. I'm still not sold on it but it makes some quick static pages and I like that. I also worked in a system to write posts in markdown instead of rich text.

### Blog about it

So here we are, blogging about it. All of the above was a bit fun. Something things I learned along the way:

- Digital Ocean updated how you make droplets, it confused me a bit but makes sense now.
- I understand how to point DNS, but I'm still weirdly scared of it at times. It took me a moment to understand that Digital Ocean wanted _just_ the name servers changed. Originally I was pointing my DNS to the IP of the droplet, but after reading documentation, seeing Digital Ocean recommened changing the name servers and then pointing their DNS to the droplet was the way to go. And let me tell you what...that was magic.
- Setting up Namecheaps private email to use my "@trevorjarrett.com" domain was also very easy. Just point the MX records to Namecheaps email server and ba-da-bing, ba-da-boom you are set.

### Closing

Still some work to do. Need to make the site look better and keep at it. I've got some fun projects I want to do and with COVID still sweeping the world I'll likely have the time.
