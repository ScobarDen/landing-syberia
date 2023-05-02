import styled from 'styled-components';
import { buttonBackground, textColorWhite } from '../../styles/colors';

export const StyledButton = styled('button')<any>`
	background: ${buttonBackground};
	color: ${textColorWhite};
	font-size: 0.8rem;
	font-weight: 600;
	border-radius: 4px;
	padding: 7px 15px;
	cursor: pointer;
	box-shadow: none;
	transition: all 0.3s ease-in-out;
	outline: none;
	border: none;

	&:hover,
	&:active,
	&:focus {
		color: ${textColorWhite};
		border: 1px solid ${buttonBackground};
		background-color: ${buttonBackground};
	}
`;
