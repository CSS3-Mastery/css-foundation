# Home Page Layout

In this section, we will learn how to create a simple home page layout using HTML and CSS. We will cover the following topics:

- Header
- Navigation
- Hero section
- Features section
- Testimonials section
- Footer

## Header

The header is the top section of a web page that typically contains the site logo, navigation menu, and other important information. It is usually fixed at the top of the page and remains visible as the user scrolls.

Here's an example of a simple header:

```html
<header>
  <div class="logo">
    <img src="logo.png" alt="Logo" />
  </div>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

In this example, we have a header with a logo and a navigation menu.

## Navigation

The navigation menu is a list of links that allows users to navigate to different sections of a website. It is usually placed in the header or at the top of the page for easy access.

Here's an example of a simple navigation menu:

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

In this example, we have a navigation menu with links to different sections of the website.

## Hero Section

The hero section is the first section of a web page that contains a large image or video, a headline, and a call-to-action button. It is designed to grab the user's attention and encourage them to take action.

Here's an example of a simple hero section:

```html
<section class="hero">
  <h1>Welcome to our website</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <a href="#learn-more" class="cta">Learn More</a>
</section>
```

In this example, we have a hero section with a headline, a paragraph, and a call-to-action button.

## Features Section

The features section is a list of key features or services offered by a website. It is designed to showcase the benefits of using the website and encourage users to explore further.

Here's an example of a simple features section:

```html
<section class="features">
  <div class="feature">
    <h2>Feature 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="feature">
    <h2>Feature 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="feature">
    <h2>Feature 3</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</section>
```

In this example, we have a features section with three features.

## Testimonials Section

The testimonials section is a collection of quotes or reviews from satisfied customers or users. It is designed to build trust and credibility by showcasing positive feedback.

Here's an example of a simple testimonials section:

```html
<section class="testimonials">
  <div class="testimonial">
    <blockquote>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    </blockquote>
    <cite>John Doe</cite>
  </div>
  <div class="testimonial">
    <blockquote>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    </blockquote>
    <cite>Jane Doe</cite>
  </div>
</section>
```

In this example, we have a testimonials section with two testimonials.

## Footer

The footer is the bottom section of a web page that typically contains contact information, social media links, and other important details. It is usually fixed at the bottom of the page and remains visible as the user scrolls.

Here's an example of a simple footer:

```html
<footer>
  <div class="contact">
    <h3>Contact Us</h3>
    <p>
      Email:
      <a href="mailto:dhangarajay13@gmail.com">dhangarajay13@gmail.com </a>
    </p>
    <p>
      Phone:
      <a href="tel:+911234567809">+91 12345 67809</a>
    </p>
  </div>

  <div class="social">
    <h3>Follow Us</h3>
    <a href="https://facebook.com" target="_blank">Facebook</a>
    <a href="https://twitter.com" target="_blank">Twitter</a>
    <a href="https://instagram.com" target="_blank">Instagram</a>
  </div>

  <div class="legal">
    <p>&copy; 2023 CSS Foundation. All rights reserved.</p>
    <p>Privacy Policy | Terms of Service</p>
  </div>
</footer>
```

In this example, we have a footer with contact information, social media links, and legal details.

## Now Used CSS for Responsive Layout

```css
/* Reset default margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Header styles */
header {
  background-color: #576afe;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 80px;
  height: auto;  
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}

/* Hero section styles */
.hero {
  background-color: #f4f4f4;
  padding: 50px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.hero .cta {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

/* Features section styles */
.features {
  padding: 50px;
  display: flex;
  justify-content: space-around;
}

.feature {
  text-align: center;
}

.feature h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.feature p {
  font-size: 1.1em;
}

/* Testimonials section styles */
.testimonials {
  background-color: #f4f4f4;
  color: #333;
  padding: 50px;
  text-align: center;
}

.testimonial {
  margin-bottom: 30px;
}

.testimonial blockquote {
  font-style: italic;
  font-size: 1.2em;
}

.testimonial cite {
  font-weight: bold;
}

/* Footer styles */
footer {
  background-color: #333;
  color: #fff;
  padding: 50px;
  display: flex;
  justify-content: space-around;
}

.contact,
.social,
.legal {
  flex: 1;
  text-align: center;
}

.contact h3,
.social h3,
.legal h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.contact p,
.social a,
.legal p {
  margin-bottom: 10px;
}

.social a {
  display: block;
  color: #fff;
  text-decoration: none;
}

.legal p {
  font-size: 0.8em;
}

a {
  color: #daff06;
}
```


## Summary

In this section, we learned how to create a simple home page layout using HTML and CSS. We covered the header, navigation, hero section, features section, testimonials section, and footer. We also used CSS to style the layout and make it responsive.

## Exercises

- [ ] Create a new HTML file and add the header, navigation, hero section, features section, testimonials section, and footer.
- [ ] Use the provided CSS to style the layout and make it responsive.
- [ ] Add your own content and images to the layout to create a unique home page for your website.
- [ ] Experiment with different colors, fonts, and styles to customize the layout to your liking.
- [ ] Share your home page layout with others and get feedback on your design.
- [ ] Try creating different variations of the home page layout to practice your HTML and CSS skills.
- [ ] Check out other websites for inspiration and ideas for your home page layout.
- [ ] Share your home page layout on social media and tag me @dhangarajay13. I would love to see what you create!
- [ ] Give me a star ⭐️ for this repository for the effort I have put in.

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools](https://www.w3schools.com/html/)
- [W3Schools](https://www.w3schools.com/css/)
- [HTML Reference](https://htmlreference.io/)
- [CSS Reference](https://cssreference.io/)

