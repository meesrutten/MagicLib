# MagicLib
A micro library to reduce clutter of the the Web Animation API and create reusable KeyframeEffect components.

### Reduces this:

```javascript
const showThis = document.querySelector('#showThis')
const keyFrameEffect = new KeyframeEffect(
	showThis,
	[
		{ transform: 'scale(0) translateY(-10%)', opacity: 0 },
		{ transform: 'scale(1) translateY(0)', opacity: 1 }
	], {
		duration: 300,
		iterations: 1,
		easing: 'ease-out',
		fill: 'forwards',
		delay: 300
	}
)
  const show = new Animation(keyFrameEffect, document.timeline);
  show.play();
```

### To this:

```javascript
const showThis = document.querySelector('#showThis');
const show = new Magic(showThis, 'show');
show.play();
```

## How to use it

- Add `Magic.js`{:.language-javascript} and `magic` directory to your scripts directory
- Use `const animationName = new Magic( element, 'animationName' )`{:.language-javascript}

## Create a new animation

- Create a new `animationName.js`{:.language-javascript} to `magic` directory
- Import it in the `magic/index.js`{:.language-javascript}
- Use `const animationName = new Magic( element, 'animationName' )`{:.language-javascript}

The `Magic`{:.language-javascript} object is actually the `Animation`{:.language-javascript} object. 
This makes you able to use functions like `let animationsPromise = animationName.finished`{:.language-javascript}.

For more information about the Web Animations API go to:
[Web Animations API | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

The Web Animation API is not very well supported as of today (13-02-2018), this demo does work in Firefox Nightly.
For a polyfill add this to your HTML:
`<script type="text/javascript" src="https://cdn.polyfill.io/v2/polyfill.min.js?features=WebAnimations"></script>`{:.language-HTML}

Mees Rutten, 2018
