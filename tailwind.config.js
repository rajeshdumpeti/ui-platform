/** @type {import('tailwindcss').Config} */
import { colors } from './src/tokens/colors'
import { typography } from './src/tokens/typography'
import { spacing } from './src/tokens/spacing'
import { borders } from './src/tokens/borders'
import { zIndex } from './src/tokens/zIndex'
import { breakpoints } from './src/tokens/breakpoints'
import { animations } from './src/tokens/animations'

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './.storybook/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            // Color system
            colors: {
                ...colors.brand,
                ...colors.semantic,
                ...colors.neutral,
            },

            // Typography scale
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize,
            fontWeight: typography.fontWeight,
            lineHeight: typography.lineHeight,
            letterSpacing: typography.letterSpacing,

            // Spacing scale
            spacing: spacing,

            // Border radius & shadows
            borderRadius: borders.radius,
            borderWidth: borders.width,
            boxShadow: borders.shadows,

            // Z-index levels
            zIndex: zIndex,

            // Breakpoints
            screens: breakpoints,

            // Animations
            animation: {
                spin: 'spin 1s linear infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                bounce: 'bounce 1s infinite',
            },
            keyframes: animations.keyframes,
            transitionDuration: animations.duration,
            transitionTimingFunction: animations.easing,
        },
    },
    plugins: [],
}