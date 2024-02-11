# Selectors in CSS

## Introduction

Selectors are patterns used to select the element(s) you want to style. They are the part of CSS rules that determine which elements the style applies to. 

## Types of Selectors

1. **Element Selector**: Selects all elements of a specified type. 
    ```css
    p {
        color: red;
    }
    ```

2. **ID Selector**: Selects an element with a specific id attribute. 
    ```css
    #unique {
        color: blue;
    }
    ```

3. **Class Selector**: Selects all elements with a specific class attribute. 
    ```css
    .primary {
        color: green;
    }
    ```

4. **Attribute Selector**: Selects elements with a specific attribute. 
    ```css
    input[type="text"] {
        color: yellow;
    }
    ```

5. **Pseudo-class Selector**: Selects elements based on a certain state. 
    ```css
    a:hover {
        color: orange;
    }
    ```

6. **Pseudo-element Selector**: Selects a specific part of an element. 
    ```css
    p::first-line {
        color: purple;
    }
    ```

7. **Descendant Selector**: Selects all elements that are descendants of a specified element. 
    ```css
    div p {
        color: pink;
    }
    ```

8. **Child Selector**: Selects all direct children of a specified element. 
    ```css
    div > p {
        color: brown;
    }
    ```

9. **Universal Selector**: Selects all elements. 
    ```css
    * {
        color: black;
    }
    ```

10. **Grouping Selector**: Selects all the elements that match a list of selectors. 
    ```css
    h1, h2, p {
        color: grey;
    }
    ```

## Different between Descendant and Child Selectors 

| No. | Descendant Selector | Child Selector |
| --- | ------------------- | -------------- |
| 1.  | Selects all elements that are descendants of a specified element. | Selects all direct children of a specified element. |
| 2.  | It is represented by a space between two selectors. | It is represented by a greater than sign between two selectors. |
| 3.  | It selects all the elements that are descendants of the specified element, no matter how deep. | It selects only the direct children of the specified element. |
| 4.  | It is less specific. | It is more specific. |


## Conclusion

Selectors are the most important part of CSS. They are used to select the elements you want to style. There are many types of selectors, and you can use them in combination to select the elements you want to style.

## References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [W3Schools](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS Tricks](https://css-tricks.com/how-css-selectors-work/)
- [CSS Diner](https://flukeout.github.io/)
- [CSS Selectors](https://www.w3.org/TR/selectors-3/)
- [CSS Selectors Level 4](https://www.w3.org/TR/selectors-4/)
- [CSS Selectors Level 3](https://www.w3.org/TR/css3-selectors/)
- [CSS Selectors Level 2](https://www.w3.org/TR/2001/CR-css3-selectors-20011113/)
- [CSS Selectors Level 1](https://www.w3.org/TR/1999/REC-CSS2-19990512/selector.html)
- [CSS Selectors Level 0](https://www.w3.org/TR/1998/REC-CSS2-19980512/selector.html)
