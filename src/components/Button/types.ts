export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps {
	disabled?: boolean;
	size?: ButtonSize;
	color?: ButtonColor;
	onClick?: (event: MouseEvent) => void;
}
