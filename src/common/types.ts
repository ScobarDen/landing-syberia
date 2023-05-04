export interface ContainerProps {
	border?: boolean;
	children: React.ReactNode;
}

export interface ButtonProps {
	color?: string;
	fixedWidth?: boolean;
	name?: string;
	children: React.ReactNode;
	onClick?: () => void;
}

export type gradeIndexForPriceBlockType = 0 | 1 | 2;

export interface RadioProps {
	name: string;
	value: gradeIndexForPriceBlockType;
	checked: boolean;
	onChange: (value: gradeIndexForPriceBlockType) => void;
}

export interface SvgIconProps {
	src: string;
	width: string;
	height: string;
}

export interface InputProps {
	name: string;
	placeholder: string;
	t: any;
	type?: string;
	value?: string;
	onChange: (
		event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
}

export interface validateProps {
	name: string;
	message: string;
	email: string;
}
