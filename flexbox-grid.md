# Flex Box and Grid in CSS 

Flex Box and Grid are two layout methods in CSS. They are used to create responsive layouts.


## Flex Box 

Flex Box is a one-dimensional layout method. It is used to create a row or a column layout.

### Flex Container

To create a flex container, you need to set the `display` property to `flex` or `inline-flex`. 

```css
.container {
  display: flex;
}
```

### Flex Items

To create flex items, you need to set the `display` property to `flex` or `inline-flex`. 

```css
.item {
  display: flex;
}
```

### Flex Direction

The `flex-direction` property is used to set the direction of the main axis. The main axis is the primary axis of the flex container. The main axis can be horizontal or vertical.

```css
.container {
  flex-direction: row;
}
```

### Justify Content

The `justify-content` property is used to align the flex items along the main axis. It is used to set the spacing between the flex items.

```css
.container {
  justify-content: space-between;
}
```

### Align Items

The `align-items` property is used to align the flex items along the cross axis. The cross axis is the secondary axis of the flex container. The cross axis can be horizontal or vertical.

```css
.container {
  align-items: center;
}
```

### Align Content

The `align-content` property is used to align the flex lines along the cross axis. It is used to set the spacing between the flex lines.

```css
.container {
  align-content: space-between;
}
```

### Flex Wrap

The `flex-wrap` property is used to set the wrapping behavior of the flex items. It is used to create a multi-line layout.

```css
.container {
  flex-wrap: wrap;
}
```

### Flex Grow

The `flex-grow` property is used to set the growth factor of the flex items. It is used to distribute the remaining space among the flex items.

```css
.item {
  flex-grow: 1;
}
```

### Flex Shrink

The `flex-shrink` property is used to set the shrink factor of the flex items. It is used to shrink the flex items when there is not enough space.

```css
.item {
  flex-shrink: 1;
}
```

### Flex Basis

The `flex-basis` property is used to set the initial size of the flex items. It is used to set the size of the flex items before distributing the remaining space.

```css
.item {
  flex-basis: 100px;
}
```

### Flex

The `flex` property is a shorthand for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.

```css
.item {
  flex: 1 1 100px;
}
```

### Order 

The `order` property is used to set the order of the flex items. It is used to change the visual order of the flex items.

```css
.item {
  order: 1;
}
```

## Grid

Grid is a two-dimensional layout method. It is used to create a grid layout.

### Grid Container

To create a grid container, you need to set the `display` property to `grid`.

```css
.container {
  display: grid;
}
```

### Grid Items

To create grid items, you need to set the `display` property to `grid`.

```css
.item {
  display: grid;
}
```

### Grid Template Columns

The `grid-template-columns` property is used to set the size of the columns in the grid layout.

```css
.container {
  grid-template-columns: 100px 100px 100px;
}
```

### Grid Template Rows

The `grid-template-rows` property is used to set the size of the rows in the grid layout.

```css
.container {
  grid-template-rows: 100px 100px 100px;
}
```

### Grid Gap

The `grid-gap` property is used to set the spacing between the grid items.

```css
.container {
  grid-gap: 10px;
}
```

### Justify Items

The `justify-items` property is used to align the grid items along the inline axis.

```css
.container {
  justify-items: center;
}
```

### Align Items

The `align-items` property is used to align the grid items along the block axis.

```css
.container {
  align-items: center;
}
```

### Justify Content

The `justify-content` property is used to align the grid items along the inline axis.

```css
.container {
  justify-content: space-between;
}
```

### Align Content   

The `align-content` property is used to align the grid items along the block axis.

```css
.container {
  align-content: space-between;
}
```

### Grid Auto Columns

The `grid-auto-columns` property is used to set the size of the auto-generated columns.

```css
.container {
  grid-auto-columns: 100px;
}
```

### Grid Auto Rows

The `grid-auto-rows` property is used to set the size of the auto-generated rows.

```css
.container {
  grid-auto-rows: 100px;
}
```

### Grid Auto Flow

The `grid-auto-flow` property is used to set the flow of the auto-generated grid items.

```css
.container {
  grid-auto-flow: row;
}
```

### Grid Column

The `grid-column` property is a shorthand for the `grid-column-start`, `grid-column-end`, `grid-row-start`, and `grid-row-end` properties.

```css
.item {
  grid-column: 1 / 3;
}
```

### Grid Row

The `grid-row` property is a shorthand for the `grid-row-start`, `grid-row-end`, `grid-column-start`, and `grid-column-end` properties.

```css
.item {
  grid-row: 1 / 3;
}
```

### Grid Area

The `grid-area` property is a shorthand for the `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end` properties.

```css
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

### Grid Column Start

The `grid-column-start` property is used to set the start position of the grid items along the inline axis.

```css
.item {
  grid-column-start: 1;
}
```

### Grid Column End

The `grid-column-end` property is used to set the end position of the grid items along the inline axis.

```css
.item {
  grid-column-end: 3;
}
```

### Grid Row Start

The `grid-row-start` property is used to set the start position of the grid items along the block axis.

```css
.item {
  grid-row-start: 1;
}
```

### Grid Row End

The `grid-row-end` property is used to set the end position of the grid items along the block axis.

```css
.item {
  grid-row-end: 3;
}
```

### Grid Column Gap

The `grid-column-gap` property is used to set the spacing between the grid columns.

```css
.container {
  grid-column-gap: 10px;
}
```

### Grid Row Gap

The `grid-row-gap` property is used to set the spacing between the grid rows.

```css
.container {
  grid-row-gap: 10px;
}
```

### Grid Template

The `grid-template` property is a shorthand for the `grid-template-rows` and `grid-template-columns` properties.

```css
.container {
  grid-template: 100px 100px 100px / 100px 100px 100px;
}
```

### Grid

The `grid` property is a shorthand for the `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow` properties.

```css
.container {
  grid: 100px 100px 100px / 100px 100px 100px;
}
```

### Grid Template Areas

The `grid-template-areas` property is used to set the layout of the grid items.

```css
.container {
  grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer";
}
```

### Grid Area

The `grid-area` property is used to set the layout of the grid items.

```css
.item {
  grid-area: header;
}
```

### Grid Column Start

The `grid-column-start` property is used to set the start position of the grid items along the inline axis.

```css
.item {
  grid-column-start: 1;
}
```

### Grid Column End

The `grid-column-end` property is used to set the end position of the grid items along the inline axis.

```css
.item {
  grid-column-end: 3;
}
```

### Grid Row Start

The `grid-row-start` property is used to set the start position of the grid items along the block axis.

```css
.item {
  grid-row-start: 1;
}
```

### Grid Row End

The `grid-row-end` property is used to set the end position of the grid items along the block axis.

```css
.item {
  grid-row-end: 3;
}
```

### Grid Column Gap

The `grid-column-gap` property is used to set the spacing between the grid columns.

```css
.container {
  grid-column-gap: 10px;
}
```


## Conclusion

Flex Box and Grid are two layout methods in CSS. They are used to create responsive layouts. Flex Box is a one-dimensional layout method, while Grid is a two-dimensional layout method. Flex Box is used to create a row or a column layout, while Grid is used to create a grid layout. Flex Box and Grid have different properties and values, but they are both used to create responsive layouts.

## References

- [Flex Box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flex Box vs Grid](https://www.smashingmagazine.com/2018/09/the-ultimate-guide-to-flexbox/)