import {
	colors,
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	radii,
	space,
} from "@itto-ignite-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	themeMap: {
		...defaultThemeMap,
		height: "space",
		width: "space",
	},
	theme: {
		colors: colors,
		fonts: fonts,
		fontSizes: fontSizes,
		fontWeights: fontWeights,
		lineHeights: lineHeights,
		radii: radii,
		space: space,
	},
});
