# Contributing to Turo Calculator

First off, thanks for taking the time to contribute!

The following is a set of questions you'll probably ask yourself before you do it:

### Hey, how do I set this up on my machine?

This project uses Gatsby 4. It's still in beta, but technically so is this project 🤷 🤷‍♀️

1. First clone this project into a comfy directory.

2. Then, you can use npm and [Node](https://nodejs.org) to install all the modules you need:

```
npm install
```

3. Then run Gatsby with the following command:

```
gatsby develop
```

> This will open up a local development port at `localhost:8000` and you're set!

### Hey, what should I work on??

Here's a running list of features that need to be added:

1. Add options for people who've bought/own their car completely
2. Add options for people who've financed their car
3. Add more fine grained operating costs
4. Add ability to factor in one time costs (ex: car skin)

#### More generally expand the functionality of it! Just do it!

### Hey, what do all these confusing files mean???

#### `/src`

This where all the important files are.

#### `/sections`

This is where all the input sections are. There are 3 right now. More should be made!

#### `/pages`

Pages compile into links automatically depending on their file name.

#### `/pages/index.js`

Entry point JS file.

#### `pages/blog/`

Entry point for blog posts. Anyone can write for it if they want, just add a `your_post.tsx` file with a unique title and it'll compile automatically as a link `https://turocalculator.com/blog/your-post`

#### `/components`

Standalone functional components that need to be imported into `/pages`
