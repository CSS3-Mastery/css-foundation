# Fonts Typography in CSS 

Fonts and typography are an important part of web design. They help to make the content more readable and visually appealing. In this section, we will learn how to use fonts and typography in CSS. 

## Fonts 

Fonts are used to style the text on a web page. There are different types of fonts that you can use in CSS. 

**for example: **

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
```

In the example above, we are using the `font-family` property to specify the font that we want to use for the text. We are also using the `font-size`, `font-weight`, and `color` properties to style the text.

### Web Safe Fonts

Web safe fonts are fonts that are available on most devices. These fonts are commonly used in web design because they are easy to read and look good on all devices. Some examples of web safe fonts are Arial, Helvetica, Times New Roman, and Georgia.

**for example: **

```css
p {
  font-family: Arial, sans-serif;
}
```

### Google Fonts

Google Fonts is a free service that allows you to use a wide variety of fonts on your website. You can choose from hundreds of different fonts and easily add them to your website using a simple line of code.

**for example: **

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
```

```css
p {
  font-family: 'Open Sans', sans-serif;
}
```

### Custom Fonts

You can also use custom fonts in your web design. Custom fonts are fonts that are not available on most devices. You can use custom fonts by importing them into your CSS file using the @font-face rule. 

**for example: **

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('mycustomfont.woff2') format('woff2'),
       url('mycustomfont.woff') format('woff');
}

p {
  font-family: 'MyCustomFont', sans-serif;
}
```

In the example above, we are using the @font-face rule to import a custom font called MyCustomFont. We are then using the font-family property to specify that we want to use this font for the text.

## Typography

Typography is the art of arranging type to make written language readable and appealing. In web design, typography is used to style the text on a web page.

**for example: **

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
}
```


### Font Size

The font-size property is used to specify the size of the text. You can use different units to specify the size of the text, such as pixels, ems, or percentages.

**for example: **

```css
p {
  font-size: 16px;
}
```

### Font Weight

The font-weight property is used to specify the weight of the text. You can use different values to specify the weight of the text, such as normal, bold, or bolder.

**for example: **

```css
p {
  font-weight: bold;
}
```

### Line Height 

The line-height property is used to specify the height of the line. You can use different units to specify the height of the line, such as pixels, ems, or percentages.

**for example: **

```css
p {
  line-height: 1.5;
}
```

### Letter Spacing

The letter-spacing property is used to specify the space between the letters. You can use different units to specify the space between the letters, such as pixels, ems, or percentages.

**for example: **

```css
p {
  letter-spacing: 1px;
}
```

### Text Align

The text-align property is used to specify the alignment of the text. You can use different values to specify the alignment of the text, such as left, center, or right.

**for example: **

```css
p {
  text-align: center;
}
```

## Summary 

In this section, we learned how to use fonts and typography in CSS. We learned how to use different types of fonts, such as web safe fonts, Google fonts, and custom fonts. We also learned how to use typography to style the text on a web page. 

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
}
```

In the example above, we are using the font-family property to specify the font that we want to use for the text. We are also using the font-size, font-weight, color, line-height, letter-spacing, and text-align properties to style the text.


## Resources 

- [Google Fonts](https://fonts.google.com/)
- [Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp)
- [Custom Fonts](https://www.w3schools.com/css/css3_fonts.asp)
- [Typography](https://www.w3schools.com/css/css_typography.asp)