import { ComponentProps } from "@stitches/react";
import { styled } from "@/styles";

export const Heading = styled("h2", {
	fontFamily: "$defalt",
	lineHeight: "$shorter",
	color: "$gray100",
	margin: 0,

	variants: {
		size: {
			sm: { fontSize: "$xl" },
			md: { fontSize: "$2xl" },
			lg: { fontSize: "$4xl" },
			"2xl": { fontSize: "$5xl" },
			"3xl": { fontSize: "$6xl" },
			"4xl": { fontSize: "$7xl" },
			"5xl": { fontSize: "$8xl" },
			"6xl": { fontSize: "$9xl" },
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface HeadingProps extends ComponentProps<typeof Heading> {}

Heading.displayName = "Heading";
