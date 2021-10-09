# Contributing to Turo Calculator

First off, thanks for taking the time to contribute!

The following is a set of questions you'll probably ask yourself before you do it:

### Hey, how do I set this up on my machine?

This project uses Gatsby 4. It's still in beta, but technically so is this project 🤷‍♀️

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

1. Add `section` for people who've bought their car completely
2. Add `section` for people who've financed their car
3. Add `section` for people to customize their make and model and get a cost per month that way
4. Add a way for people to save their calculated costs inputs (cookies would do the job)
5. Work on the index page at `/blog` so that it shows a list of all blog posts
6. Provide helpful ranges for certain inputs like cost of gas/electricity (in a tooltip maybe)

#### More generally expand the functionality of it! Just do it!

### Hey, what do all these confusing files mean???

#### `/src/`

This where all the important files are.

#### `/sections/`

This is where all the input sections are. There are 3 right now. Sections are defined as self-contained functions that take inputs and output a postive or negative number which corresponds to the number of dollars that the car owner might gain or lose per month. More should be made!

#### `/pages/`

Pages compile into links automatically depending on their file name.

#### `/pages/index.js/`

Entry point JS file.

#### `pages/blog/`

Entry point for blog posts. Anyone can write a post if they want, just add a _your-post.tsx_ file with a unique title and it'll compile automatically as a link _turocalculator.com/blog/your-post_. PR it with a `blog` tag.

#### `/components/`

Standalone functional components that need to be imported into `/pages`

#### `/components/layout.js/`

Entry point for header and footer on the app

#### `/component/layout.css/`

Global CSS styles

#### `/interfaces/`

Definitions for all customm interfaces and enums

### Other

#### Design Principles

Try to use human-centered design
