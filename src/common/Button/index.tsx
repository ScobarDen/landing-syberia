import { ButtonProps } from '../types';
import { StyledButton } from './styles';

export const Button = ({ color, fixedWidth, children, onClick }: ButtonProps) => (
	<StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick}>
		{children}
	</StyledButton>
);
