# Combinators in CSS

Combinators are used to select elements based on their relationship with other elements. There are four types of combinators in CSS: descendant, child, adjacent sibling, and general sibling.

## Descendant Combinator

The descendant combinator is used to select an element that is a descendant of another element. It is represented by a space between two selectors.

```css
/* Select all <p> elements that are descendants of a <div> element */
div p {
  color: red;
}
```

## Child Combinator

The child combinator is used to select an element that is a direct child of another element. It is represented by a greater-than sign (`>`).

```css
/* Select all <p> elements that are direct children of a <div> element */
div > p {
  color: red;
}
```

## Adjacent Sibling Combinator

The adjacent sibling combinator is used to select an element that is immediately preceded by another element. It is represented by a plus sign (`+`).

```css
/* Select all <p> elements that are immediately preceded by a <div> element */
div + p {
  color: red;
}
```

## General Sibling Combinator

The general sibling combinator is used to select an element that is preceded by another element. It is represented by a tilde (`~`).

```css
/* Select all <p> elements that are preceded by a <div> element */
div ~ p {
  color: red;
}
```

Combinators are a powerful tool for selecting elements in CSS. They allow you to create complex selectors that target specific elements based on their relationship with other elements. By using combinators, you can create more targeted and efficient CSS rules.

## Exercises

1. Select all `<li>` elements that are descendants of a `<ul>` element and give them a background color of `lightgray`.
2. Select all `<span>` elements that are direct children of a `<div>` element and give them a font size of `20px`.
3. Select all `<h2>` elements that are immediately preceded by a `<h1>` element and give them a color of `red`.
4. Select all `<p>` elements that are preceded by a `<h1>` element and give them a font weight of `bold`.
5. Create a complex selector that targets all `<a>` elements that are descendants of a `<div>` element and are preceded by a `<p>` element. Give them a text decoration of `underline`.
6. Create a complex selector that targets all `<img>` elements that are direct children of a `<div>` element and are preceded by a `<h1>` element. Give them a border of `1px solid black`.

## Quiz

1. What is the purpose of combinators in CSS?
   - [ ] To combine multiple CSS files into a single file
   - [ ] To combine multiple CSS rules into a single rule
   - [x] To select elements based on their relationship with other elements
   - [ ] To combine multiple CSS properties into a single property
  
2. Which combinator is used to select an element that is a direct child of another element?
   - [ ] Descendant combinator
   - [ ] Adjacent sibling combinator
   - [x] Child combinator
   - [ ] General sibling combinator

3. Which combinator is used to select an element that is immediately preceded by another element?
    - [ ] Descendant combinator
    - [x] Adjacent sibling combinator
    - [ ] Child combinator
    - [ ] General sibling combinator

4. Which combinator is used to select an element that is preceded by another element?
    - [ ] Descendant combinator
    - [ ] Adjacent sibling combinator
    - [ ] Child combinator
    - [x] General sibling combinator

5. What is the result of the following CSS rule?
    ```css
    div > p {
      color: red;
    }
    ```
    - [ ] Selects all `<p>` elements that are descendants of a `<div>` element
    - [x] Selects all `<p>` elements that are direct children of a `<div>` element
    - [ ] Selects all `<p>` elements that are immediately preceded by a `<div>` element
    - [ ] Selects all `<p>` elements that are preceded by a `<div>` element

## Summary 

Combinators are used to select elements based on their relationship with other elements. There are four types of combinators in CSS: descendant, child, adjacent sibling, and general sibling. By using combinators, you can create complex selectors that target specific elements based on their relationship with other elements. Combinators are a powerful tool for creating more targeted and efficient CSS rules.

## References

- [CSS Combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#combinators)
- [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [CSS Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)
- [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)
- [CSS Units](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [CSS Values](https://developer.mozilla.org/en-US/docs/Web/CSS/value)
- [CSS Data Types](https://developer.mozilla.org/en-US/docs/Web/CSS/data_types)
- [CSS Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/syntax)


<p style="text-align: center;"><a href="./flexbox-grid.md" alt="Previous: Flexbox and Grid">< Previous </a> |____| <a href="./block-element-modifier-bem.md">Next ></a></p>