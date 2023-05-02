import styled from 'styled-components';
import img from '../../img/bacgroundImageHeader.png';
import { textColorLightGrey, textColorWhite } from '../../styles/colors';

export const HeaderContentBlockSection = styled('div')`
	height: 100vh;
	width: 100vw;
	position: relative;
	top: -2rem;
	// padding-top: 5rem;
	// z-index: -1;
	background-image: url('${img}');
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		color: ${textColorWhite};
	}
	p {
		color: ${textColorLightGrey};
	}
`;

export const LeftWrapper = styled('div')`
	max-width: 13rem;
`;
