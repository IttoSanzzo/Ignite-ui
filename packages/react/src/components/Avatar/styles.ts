import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "@/styles";

export const AvatarContainer = styled(Avatar.Root, {
	borderRadius: "$full",
	display: "inline-block",
	width: "$16",
	height: "$16",
	overflow: "hidden",
});

AvatarContainer.displayName = "AvatarContainer";

export const AvatarImage = styled(Avatar.Image, {
	width: "100%",
	height: "100%",
	objectFit: "cover",
	border: "inherit",
});

AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = styled(Avatar.Fallback, {
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "$gray600",
	color: "$gray800",

	svg: {
		width: "$6",
		height: "$6",
	},
});

AvatarFallback.displayName = "AvatarFallback";
