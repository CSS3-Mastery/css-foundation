# Project Setup

Welcome to the project setup guide. This guide will help you set up your project and get it ready for development. Where we'll lay the foundation for building your responsive portfolio website. Proper project setup is essential for a successful web development project. It helps you organize your files, manage dependencies, and automate repetitive tasks.

Let's get started!

## 1. Setting Up Your Development Environment

Before we begin coding, let's ensure you have the necessary tools and environment set up:

- **Text Editor:** In this course, we'll use Visual Studio Code as our text editor. You can download it from [code.visualstudio.com](https://code.visualstudio.com/). However, you can use any text editor of your choice.

- **Web Browser:** We recommend using Google Chrome for web development. You can download it from [google.com/chrome](https://www.google.com/chrome/). However, you can use any web browser of your choice.
- **Version Control:** We recommend using Git for version control. You can download it from [git-scm.com](https://git-scm.com/). And you can use GitHub for hosting your project. You can sign up for a free account at [github.com](https://github.com/).

## 2. Creating Project Structure

Let's create a basic project structure for your responsive portfolio website. Here's a suggested directory structure:

```plaintext
responsive-portfolio/
│
├── index.html
├── css/
│   ├── styles.css
│   └── (additional CSS files)
│
├── images/
│   └── (image files)
│
└── js/
    └── (JavaScript files - optional)
```

- **index.html:** This is the main HTML file for your website. It will contain the structure and content of your portfolio website.

- **css/:** This directory will contain all your CSS files. You can create additional CSS files for different sections of your website, such as `header.css`, `footer.css`, etc.

- **images/:** You can organize your image files in this directory. This will help keep your project organized and make it easier to manage your assets.

- **js/:** If you need JavaScript for your website, you can create a `js/` directory to store your JavaScript files.

## 3. Setting Up Initial Files

Let's create the initial files for your project: `index.html` and `styles.css`.

### index.html

Create a new file named `index.html` in the root of your project. This file will contain the basic structure of your portfolio website. Here's a simple example to get you started:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Portfolio</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>

  <body>
    <!-- Write your HTML code here -->
  </body>
</html>
```

### styles.css

Create a new file named `styles.css` in the `css/` directory. This file will contain the styles for your portfolio website. Here's a simple example to get you started:

```css
/* Reset default margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Write your CSS code here */

```

<iframe height="400" style="width: 100%;" scrolling="no" title="Portfolio" src="https://codepen.io/ajay-dhangar/embed/ZEPqMXM?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/your_username_here/pen/ZEPqMXM'>Portfolio</a> by Your Name (<a href='https://codepen.io/ajay-dhangar'>@ajay-dhangar</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## 4. Running Your Project

Now you can install a live server extension in Visual Studio Code and run your project. This will open your website in a web browser and automatically refresh the page whenever you make changes to your files.

### To install the live server extension:

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for "Live Server" in the Extensions view.
4. Click the Install button for the "Live Server" extension.
5. Once installed, click the "Go Live" button at the bottom right of the window to start the server.
6. Your website will open in a new tab in your default web browser.

## 5. Conclusion

You've successfully set up your project and created the initial files for your responsive portfolio website. In the next section, we'll start building the landing page for your portfolio website.

## 6. Additional Resources

- [Visual Studio Code](https://code.visualstudio.com/)
- [Google Chrome](https://www.google.com/chrome/)
- [Git](https://git-scm.com/)
- [GitHub](htttps://github.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Web Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Web Standards](https://developer.mozilla.org/en-US/docs/Web/Standards)
- [Web Typography](https://developer.mozilla.org/en-US/docs/Web/Typography)
- [Web Colors](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/color)
- [Web Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
