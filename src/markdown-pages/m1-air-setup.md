I recently decided to buy an M1 Macbook Air and it finally showed up!

Out-of-the-box, it's a snappy machine. Setup went smoothly; installed the M1 version of Chrome in a breeze; setup 1Password through Rosetta 2 with no issues. Pretty smooth!

But I figured I'd document some of the things I needed to do for a dev environment.

## Installing Homebrew

I was shocked to learn that Homebrew is not yet natively compatible with the M1 chip. I learned that trying to run the install script on their homepage. I was greeted with the following.

```
Homebrew is not (yet) supported on ARM processors!
Rerun the Homebrew installer under Rosetta 2.
If you really know what you are doing and are prepared for a very broken
experience you can use another installation option for installing on ARM:
  https://docs.brew.sh/Installation
```

Since one could consider me knowing what I do debatable, I decided to go the Rosetta 2 route. After some quick Googling, a Stackoverflow sent me to the Homebrew Github issues where a dev said to simply do the following.

```
arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)
```

I went ahead and aliased `arch -x86_64` to something simple liek `ai`; I get the feeling I'm going to need it.

## Installing NVM
I like to let NVM manage my node install, so that was next.

It's worth mentioning my first attempt was `brew install nvm` but I got the error about Homebrew/Rosetta 2, so I used my alies of `ai brew install nvm` and we were off to the races.

After nvm installed successfully I installed the current stable node by doing `nvm install stable`. It felt like it took longer than it should have but I contribute that to going through Rosetta and installing/compiling.

## VS Code 
Pretty uneventful here.

VS Code does feel sugglish through Rosetta 2, its noticable when trying to modify the programs settings. Hopefully Microsoft gets the M1 version done soon.

## What now?
I guess that's it? I feel like the major installs were easy. The hardest part is going to be trying to remember to use the `arch -x86_64` command!

### Update
After some node install failures I came across this SO (https://github.com/nvm-sh/nvm/issues/2350#issuecomment-734132550)[https://github.com/nvm-sh/nvm/issues/2350#issuecomment-734132550] and after doing that, everything works perfect.

I can settle for running my terminal through Rosetta 2 for awhile.
