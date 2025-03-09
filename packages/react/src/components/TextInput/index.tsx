import { ComponentProps } from "@stitches/react";
import { TextInputContainer, Prefix, Input } from "./styles";
import { forwardRef, ComponentRef } from "react";

export interface TextInputProps extends ComponentProps<typeof Input> {
	prefix?: string;
	disabled?: true | false;
	placeholder: string;
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
	({ prefix, ...props }: TextInputProps, ref) => {
		return (
			<TextInputContainer>
				{!!prefix && <Prefix>{prefix}</Prefix>}
				<Input
					ref={ref}
					{...props}
				/>
			</TextInputContainer>
		);
	}
);

TextInput.displayName = "TextInput";
