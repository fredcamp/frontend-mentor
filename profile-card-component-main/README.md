# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

- Build out the project to the designs provided

## Screenshot

Mobile and Web Responsiveness

![Mobile and Web Responsiveness GIF](images/result_responsive.gif)

## Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow

## What I learned

Use `transform: translate()` when aligning the backgroud patterns when using absolute positioning, so that images inside the body won't get messed up.

```scss
@mixin mediaQuery($width) {
  @media screen and (min-width: $width) {
    @content;
  }
}
```

```scss
&__1 {
  @include mediaQuery(1100px) {
    transform: translate(-45%, -55%);
  }
}

&__2 {
  @include mediaQuery(1100px) {
    transform: translate(45%, 55%);
  }
}
```

## Author

- Fred Campo
