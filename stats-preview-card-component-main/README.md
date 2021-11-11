# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

## Screenshot

Responsive Web Design
![Mobile and Web Responsiveness](images/result_responsive.gif)

## Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow

## What I learned

You can't add an `::after` pseudo element selector to an image inside an `<img>` tag. You can use an alternative way by using another tags like `<div>` or `<span>` and declare the `background attributes and styles` in the CSS.

```html
<main>
  <section class="card">
    <div class="card__img"></div>
  </section>
</main>
```

```scss
.card {
  &__img {
    background: $primary-color url(../images/image-header-mobile.jpg) no-repeat
      center center/cover;
    background-blend-mode: overlay;
  }
}
```

## Author

- Fred Campo
