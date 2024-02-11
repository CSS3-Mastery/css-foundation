# Creating Base CSS File Variables

In this section, we'll create a base CSS file and define some variables that we can use throughout the project. This will help us keep our code organized and make it easier to update styles in the future.

## 1. Creating the Base CSS File

Let's start by creating a new file called `styles.css` in the `css/` directory of your project. This will be our main CSS file, and we'll use it to define all the styles for our website.

Here's an example of the basic structure of the `styles.css` file:

```css

/* Variables */

:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --info-color: #17a2b8;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
}

/* Global Styles */

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--dark-color);
    background-color: var(--light-color);
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: bold;
    color: var(--dark-color);
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Additional Styles */

/* Add any additional styles for your website here */

```

In this example, we've defined some variables at the top of the file using the `:root` pseudo-class. These variables will allow us to easily update the colors used throughout our website by changing the values in one place.

We've also added some global styles for the `body` and headings, as well as some additional styles for links. You can add any additional styles you need for your website in this file.

## 2. Using the Base CSS File

Now that we've created our base CSS file, we can link it to our HTML files to apply the styles to our website. To do this, add a `<link>` tag to the `<head>` section of your HTML file, like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Your Website Title</title>
</head>
<body>
    <!-- Your website content goes here -->
</body>
</html>
```

This will link the `styles.css` file to your HTML file, allowing you to use the styles defined in the CSS file throughout your website.

## 3. Conclusion

You've successfully created a base CSS file and defined some variables that you can use throughout your project. This will help you keep your code organized and make it easier to update styles in the future.

## 4. Additional Resources

- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Selectors](./selectors.md)
- [CSS Specificity](./specificity.md)
- [CSS Color](./color.md)
- [CSS Fonts](./fonts-typography.md)
- [CSS Typography](./fonts-typography.md)
- [CSS Project Setup](./project-setup.md)
- [CSS Landing Page](./landing-page-css-html.md)
- [CSS Layout Methods](./layout-methods-history.md)
- [CSS Flexbox and Grid](./flexbox-grid.md)