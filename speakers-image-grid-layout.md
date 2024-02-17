# Speaker Image Grid Layout

This layout is used to display a grid of speaker images. 

## HTML

```html
<div class="speakers">
  <div class="speaker">
    <img src="images/speaker-1.jpg" alt="Speaker 1">
    <h3>Speaker 1</h3>
  </div>
  <div class="speaker">
    <img src="images/speaker-2.jpg" alt="Speaker 2">
    <h3>Speaker 2</h3>
  </div>
  <div class="speaker">
    <img src="images/speaker-3.jpg" alt="Speaker 3">
    <h3>Speaker 3</h3>
  </div>
  <div class="speaker">
    <img src="images/speaker-4.jpg" alt="Speaker 4">
    <h3>Speaker 4</h3>
  </div>
  <div class="speaker">
    <img src="images/speaker-5.jpg" alt="Speaker 5">
    <h3>Speaker 5</h3>
  </div>
  <div class="speaker">
    <img src="images/speaker-6.jpg" alt="Speaker 6">
    <h3>Speaker 6</h3>
  </div>
</div>
```

## CSS

```css

.speakers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.speaker {
  text-align: center;
}

.speaker img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.speaker h3 {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #333;
}

```

## Output

<!-- ![Speaker Image Grid Layout](images/speakers-image-grid-layout.png) -->

## Explanation

- The `.speakers` class is used to create a grid layout.
- The `grid-template-columns` property is used to create a responsive grid layout.
- The `.speaker` class is used to center the speaker image and name.
- The `.speaker img` class is used to style the speaker image.
- The `.speaker h3` class is used to style the speaker name.
- The `border-radius` property is used to create a circular image.
- The `box-shadow` property is used to create a shadow effect for the image.
- The `gap` property is used to create a gap between the grid items.
- The `repeat(auto-fill, minmax(200px, 1fr))` value is used to create a responsive grid layout.
- The `auto-fill` value is used to create a grid with as many columns as will fit in the container.

## Summary

In this lesson, you learned how to create a speaker image grid layout using CSS Grid. You also learned how to create a responsive grid layout using the `auto-fill` and `minmax` properties.

## Quiz

1. What property is used to create a grid layout?
   - [ ] `display: flex;`
   - [ ] `display: grid;`
   - [ ] `display: block;`
   - [ ] `display: inline;`

