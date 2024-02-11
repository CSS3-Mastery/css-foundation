# Specificity in CSS

## Introduction to Specificity

Specificity is a set of rules that browsers use to determine which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors. 

The following list of selector types is by increasing specificity:

1. Universal selectors (e.g., `*`) 
2. Type selectors (e.g., `h1`) and pseudo-elements (e.g., `::before`)
3. Class selectors (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`)
4. ID selectors (e.g., `#example`)
5. Inline style (e.g., `style="font-weight:bold"`)

The universal selector `*` has no specificity value (0,0,0,0). It does not affect specificity at all.

The following list of selector types is by increasing specificity:

1. Inline styles (e.g., `style="font-weight:bold"`) - 1000 points 
2. ID selectors (e.g., `#example`) - 100 points
3. Class selectors (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`) - 10 points
4. Type selectors (e.g., `h1`) and pseudo-elements (e.g., `::before`) - 1 point
5. Universal selectors (e.g., `*`) - 0 points
6. Combinators (e.g., `p > a`) - 0 points
7. Not (e.g., `:not(.example)`) - 0 points
8. Inherited values - 0 points
9. `!important` - 0 points
10. `calc()` - 0 points
11. `var()` - 0 points

The `!important` rule overrides the previous rules and makes the CSS property value the most specific. It is considered a bad practice to use `!important` because it makes the code difficult to maintain and understand.

## Specificity Calculation 

The specificity is calculated by counting the number of each type of selector, and the result is written in the form of (a,b,c,d), where each letter is a number from 0 to 9.

- a: the number of ID selectors 
- b: the number of class selectors, attributes selectors, and pseudo-classes
- c: the number of type selectors and pseudo-elements
- d: the number of universal selectors and combinators
- e: the number of `!important` rules
- f: the number of `calc()` and `var()` functions


## Specificity Examples 

### Example 1

```css
h1 {
  color: red;
}

h1 {
  color: blue;
}
```

The second rule will override the first rule because both rules have the same specificity, and the second rule is the last one.

### Example 2

```css
h1 {
  color: red;
}

h1.special {
  color: blue;
}
```

The second rule will override the first rule because the second rule has a higher specificity than the first rule.

### Example 3

```css
h1 {
  color: red;
}

h1#special {
  color: blue;
}
```

The second rule will override the first rule because the second rule has a higher specificity than the first rule.

## Summary 

- The `!important` rule overrides the previous rules and makes the CSS property value the most specific. It is considered a bad practice to use `!important` because it makes the code difficult to maintain and understand.

- The specificity is calculated by counting the number of each type of selector, and the result is written in the form of (a,b,c,d), where each letter is a number from 0 to 9.

- The universal selector `*` has no specificity value (0,0,0,0). It does not affect specificity at all.

- The following list of selector types is by increasing specificity: Universal selectors (e.g., `*`), Type selectors (e.g., `h1`) and pseudo-elements (e.g., `::before`), Class selectors (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`), ID selectors (e.g., `#example`), Inline style (e.g., `style="font-weight:bold"`).


## Resources 

- [Specificity - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Specificity Calculator](https://specificity.keegan.st/)
- [CSS Specificity: Things You Should Know - Smashing Magazine](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)
- [CSS Specificity: What You Should Know - CSS Tricks](https://css-tricks.com/specifics-on-css-specificity/)
- [CSS Specificity - CSS Tricks](https://css-tricks.com/specifics-on-css-specificity/)
- [CSS Specificity - W3Schools](https://www.w3schools.com/css/css_specificity.asp)
- [CSS Specificity - Codecademy](https://www.codecademy.com/articles/css-specificity)
- [CSS Specificity - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [CSS Specificity - Smashing Magazine](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)