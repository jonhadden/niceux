# NiceUX.com Refactoring & Redesign

## The Problem

The current NiceUX.com website (2012-2018) has had a good run, but it is built with the frontend closely integrated with WordPress PHP which makes maintenance and updating inefficient. It also suffers from a lack of IA discipline as I grew it into maturity of supporting more connected content and case-study orientated portfolio pieces. 

## The Solution

I wanted to separate the frontend (HTML, CSS, and JS) from the backend. Rely on the WordPress RESTful API endpoints to make a more seamless interaction design and delivery of content utilizing the performance enhacing Angular 5 framework. I also wanted to cleanup the CSS to utilize CSS Grid, Flexbox and start by building and supporting small screens first, and progressively enhacing the experience as screens get bigger.

This will allow a more instrinsic experience wherever the site is delivered, while giving me the ability to easily control the structure of the content.

### Structured Content

[The content model of the redesign](design/sitemap-wireframes.png) is relatively flat and simple. Using the power of custom post types in WordPress and categories for posts, creating related and relevent content will allow users to explore many avenues throughout the wealth of content to be published on the new site.

[The sitemap and wireframes](design/sitemap-wireframes.png) are simple, but they support the content model in a way to allow an efficient and natural flow through content. 

### Design System

writeup goes here

### Codebase

#### CSS Grid, Flexbox and Building Small First

#### Git Versioning and Grunt Compiling Assets