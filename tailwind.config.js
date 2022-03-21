const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function ({ addUtilities }) {
    addUtilities({
        '.backface-visible': {
            'backface-visibility': 'visible',
        },
        '.backface-hidden': {
            'backface-visibility': 'hidden',
        },
    });
});

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                PoiretOne: ['PoiretOne-Regular', 'cursive'],
                OleoScript: ['OleoScript', 'sans-serif'],
                Roboto: ['Roboto-Regular'],
            },
            colors: {
                darkGray: '#403b37',
                header: '#d0d0d0',
                purple: '#fa03bb',
                cart: '#7e7e7e',
                shadowPurple: 'rgba(250, 3, 187, 0.5)',
                clothesCard: '#eee',
                //gray: '#bdbdbd',
                dark: '#252323',
                lightGray: '#b2b2b2',
                breadcrumb: '#f5f5f5',
            },
            gridTemplateColumns: {
                4: 'repeat(4, minmax(0, 1fr))',
            },
            transitionDuration: {
                600: '600ms',
                2200: '2200ms',
            },
            keyframes: {
                
            }
        },
    },
    plugins: [backfaceVisibility, require('@tailwindcss/line-clamp')],
};
