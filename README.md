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

- Add ```javascript Magic.js``` and `magic` directory to your scripts directory
- Use ```javascript const animationName = new Magic( element, 'animationName' )```

## Create a new animation

- Create a new ```javascript animationName.js``` to `magic` directory
- Import it in the ```javascript magic/index.js```
- Use ```javascript const animationName = new Magic( element, 'animationName' )```

The `Magic` object is actually the `Animation` object. 
This makes you able to use functions like ```javascript let animationsPromise = animationName.finished```.

For more information about the Web Animations API go to:
[Web Animations API | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

The Web Animation API is not very well supported as of today (13-02-2018), this demo does work in Firefox Nightly.
For a polyfill add this to your HTML:

```html <script async src="web-animations.min.js"></script>```

Mees Rutten, 2018
