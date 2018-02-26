export default [
	[
		{
			transform: 'scale(1) translateY(0)', opacity: 1, willChange: 'transform, opacity'
		},
		{
			transform: 'scale(0) translateY(-10%)', opacity: 0, willChange: 'auto'
		}
	],
	{
		duration: 300,
		iterations: 1,
		easing: 'ease-in',
		fill: 'forwards',
	},
]
