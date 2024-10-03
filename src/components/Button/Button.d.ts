import { DefineComponent } from 'vue';

declare const Button: DefineComponent<{
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
	color?: 'primary' | 'secondary';
}>;

export default Button;
