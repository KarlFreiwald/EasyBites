# Contribute

Here are instructions for developers.

## Stylesheet (CSS)

We are using `sass` for creating our <code>public/css/styles.css</code> from `.scss` files. 
This lets us write css code in [scss format](https://sass-lang.com/documentation/style-rules#nesting) 
which is far more comfortable.

To install the sass interpreter used for generating css files from scss files run 
```
npm install -g sass
```
Now make all your styling changes in <code>./scss</code> where you can create a file like `custom_page_styles.scss`.

Note: import the new file by adding
```
@import "./custom_page_styles.scss";
```
on top of the `styles.scss` file.

Now to compile the `style.css` files from all `.scss` files we only need
to give sass the `styles.scss` file. To do this execute following command 
```
sass --style compressed ./scss/styles.scss:./public/css/styles.css
```

## Bootstrap

This project includes all bootstrap modules. To review all elements you can
use see for example https://getbootstrap.com/docs/5.3/content/images/.


## Handlebars

Review [https://handlebarsjs.com/guide/#what-is-handlebars](https://handlebarsjs.com/guide/#what-is-handlebars).