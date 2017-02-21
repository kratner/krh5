# HTML5-Sass-ES6-Boilerplate with IIFE Wrapping and Concatenation of JS

based on

# HTML5-Sass-ES6-Boilerplate

Thanks to [Jonathan Reed](https://github.com/jontonsoup4) for the initial boilerplate.

Template for quickly building websites using HTML5, Sass, and ES6.
The goal is to serve highly optimized, mobile-first code that skips
the boring stuff and gets straight to the fun. View template [here](https://jontonsoup4.github.io/html5-sass-es6-boilerplate/)

*I've added JavaScript file concatenation after wrapping src JavaScript files in IIFE's
using gulp-iife and gulp-concat, resulting in single uglified file all.js. - KR*

# Folder Structure

```
html5-sass-boilerplate
├──readme.md
└───src
    ├──bower_components
    ├──img
    ├──js
    |   └──first.js
    |   └──second.js
    |   └──third.js
    ├──static
    |   └──index.html
    ├──styles
    |   └──main.scss
    |   └──normalize.css
    └──svg
```

## Output
```
html5-sass-boilerplate
└───dist
    ├──bower_components
    ├──index.html
    ├──img
    ├──js
    |   └──all.js
    ├──styles
    |   └──main.css
    |   └──normalize.css
    └──svg
```

# Install Dependencies

    npm install

# Building

To build and serve files, use:

    gulp

To deploy to github, use:

    gulp deploy
