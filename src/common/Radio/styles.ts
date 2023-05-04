import styled from 'styled-components';
import { primary, textColorBlack, textColorWhite } from '../../styles/colors';

type RadioContainerProps = {
	isSelected: boolean;
};

export const RadioIndicator = styled.span`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: 1px solid ${textColorBlack};
	background-color: ${textColorWhite};
	transition: all 0.1s linear;
`;

export const RadioContainer = styled.div<RadioContainerProps>`
	background-color: ${textColorWhite};
	display: inline-flex;
	align-items: center;
	cursor: pointer;
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
	position: absolute;
	opacity: 0;
	cursor: pointer;

	&:checked ~ ${RadioIndicator} {
		outline: 9px solid ${primary};
		border: none;
		transform: scale(1.333);
	}
`;
