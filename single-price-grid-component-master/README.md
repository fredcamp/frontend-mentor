# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![Mobile and Desktop Responsiveness GIF](images/result_responsive.gif)

## Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

When working in a mobile-first approach, change the `display` of the card from `flex` to `grid` and change the column-end of the first child/content to `**-1**` to span it across the end of the column.

```html
<section class="card">
  <div class="card__content"></div>
  <div class="card__content"></div>
  <div class="card__content"></div>
</section>
```

```scss
.card {
  @include mediaQuery(600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__content:first-of-type {
      grid-column: 1 / -1;
    }
  }
}
```

## Author

- Fred Campo
