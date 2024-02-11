# Landing Page CSS HTML

In this section, we will create a landing page using HTML and CSS. We will use the concepts we learned in the previous sections to create a landing page. The landing page will contain a header, a hero section, and a footer.

## 1. Creating the Header

Let's start by creating the header section of the landing page. The header will contain the website logo and navigation links. Here's an example of the HTML structure for the header:

```html
<header>
  <div class="container">
    <a href="#" class="logo">Your Name</a>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

And here's an example of the CSS for the header:

```css
header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}
```

You can customize the styles and content of the header to fit your design and branding.

## 2. Creating the Hero Section

Next, let's create the hero section of the landing page. The hero section will contain a large heading, a subheading, and a call-to-action button. Here's an example of the HTML structure for the hero section:

```html
<section class="hero">
  <div class="container">
    <h1>Welcome to My Portfolio</h1>
    <p>Check out my work and get in touch!</p>
    <a href="#portfolio" class="cta-button">View Portfolio</a>
  </div>
</section>
```

And here's an example of the CSS for the hero section:

```css
.hero {
  background-image: url('path/to/hero-image.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 24px;
  margin-bottom: 40px;
}

.cta-button {
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}
```

You can replace `path/to/hero-image.jpg` with the path to your hero image. You can also customize the styles and content of the hero section to fit your design and branding.

## 3. Creating the Footer

Finally, let's create the footer section of the landing page. The footer will contain social media links and copyright information. Here's an example of the HTML structure for the footer:

```html
<footer>
  <div class="container">
    <ul class="social-links">
      <li><a href="#"><i class="fab fa-facebook"></i></a></li>
      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
    </ul>
    <p>&copy; 2024 Your Name</p>
  </div>
</footer>
```

And here's an example of the CSS for the footer:

```css
footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.social-links li {
  margin: 0 10px;
}

.social-links li a {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
}
```

You can customize the styles and content of the footer to fit your design and branding. You can also add additional sections and content to the landing page as needed. 

> **Note:** If you want to use icon then add the below link in your head tag.
> ```html
> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
> ```

## View the Complete Landing Page Code on CodePen 

You can view the complete landing page code on CodePen by clicking the link below. You can also copy the code and paste it into your local file.

<iframe height="400" style="width: 100%;" scrolling="no" title="Landing Page" src="https://codepen.io/ajay-dhangar/embed/wvOYEVy?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ajay-dhangar/pen/wvOYEVy'>Landing Page</a> by Ajay Dhangar (<a href='https://codepen.io/ajay-dhangar'>@ajay-dhangar</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Conclusion

You've successfully created a landing page using HTML and CSS. In the next section, we'll continue building the rest of the portfolio website.

## Additional Resources

- [Font Awesome Icons](https://fontawesome.com/icons?d=gallery)
- [Unsplash (Free High-Resolution Photos)](https://unsplash.com/)
- [Pexels (Free Stock Photos & Videos)](https://www.pexels.com/)
- [Pixabay (Free Images & Videos)](https://pixabay.com/)
- [CodePen](https://codepen.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Google Chrome](https://www.google.com/chrome/)
- [Live Server Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)