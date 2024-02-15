# CSS Header

In CSS (Cascading Style Sheets), a header is a block-level element that is used to define the top section of a webpage. It typically contains the title of the page, navigation links, and other important information. Headers are commonly styled using CSS to enhance their appearance and make them stand out on the page.

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>About Us</h2>
    <p>Welcome to our website. We provide a wide range of services to meet your needs.</p>
  </section>
</body>
</html>
```

In this example, the `<header>` element contains the title of the website (`<h1>`) and a navigation menu (`<nav>`). The header is styled using an external CSS file (`styles.css`) to set the background color, font size, and other visual properties.

## CSS Styling

Headers can be styled using CSS to change their appearance. For example, you can set the background color, font size, text color, and other properties to customize the header's look and feel. Here's an example of how you can style a header using CSS:

```css
header {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 36px;
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  display: inline;
  margin-right: 10px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
```

In this example, the `<header>` element is styled with a light gray background color, centered text, and padding. The `<h1>` element inside the header is styled with a dark gray text color and a larger font size. The navigation links (`<nav>`) are styled to remove the default list styles, display the list items inline, and set the link color and font weight.

## Summary

Headers are an important part of web design and are used to define the top section of a webpage. They can be styled using CSS to enhance their appearance and make them stand out on the page. By using CSS, you can customize the look and feel of headers to create visually appealing and user-friendly websites.