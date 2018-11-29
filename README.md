# Sequelized Burger

Sequelized Burger is a full-stack web-app created for my web development bootcamp. To build it, I used Sequelize and its ORM structure, Handlebars.js, Node.js and Express. It's a simple app that allows one to add new burgers, assign a customer to eat—devour, in my case—them and have the underlying database and design-template update dynamically.

This project was mostly a refactor of the code written for my previous [Burger](https://github.com/raglaks/burger) app. The main objective was to "Sequelize" the mySQL structure and add a second "customers" model to the database. 

I didn't run into any major issues when hacking together the back-end of the app. I had a little trouble with how Sequelize's `update` method would return data as an array of rows changed and not the actual instance of data changed. But it was mostly a quick-fix.

However, I did struggle when building the front-end of the app. As I was sending a single object to the Handlebars.js template, I had to be careful about how it was built. In the previous Burger app, I was only using one simple model, so I could simply select all data from the database and then sort through it with a `forEach` method and push the results to two separate arrays within the object. But for this app, I was dealing with two models and the front-end had to display results from both. So, I had to get a little creative with JavaScript promises and eventually managed to get it working. 

[Click here to view the site.](https://warm-refuge-55068.herokuapp.com/index)

_If you want to run this locally, clone the repo and run `npm i`. You'll also have to configure the settings in config.js to connect to your local database._
