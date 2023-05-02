import styled from 'styled-components';
import img from '../../img/backgroundImageHeader.png';
import img2 from '../../img/backgroundImageHeaderLeft.png';
import img3 from '../../img/backgroundImageHeaderRight.png';
import girl from '../../img/boy.png';
import boy from '../../img/girl.png';
import { textColorLightGrey, textColorWhite } from '../../styles/colors';
//todo: разобраться с этими картинками на фоне
export const HeaderContentBlockSection = styled('div')`
	height: 650px;
	// width: 100vw;
	position: relative;
	top: -2rem;
	background-image: url('${img2}'), url('${img3}'), url('${boy}'), url('${girl}'), url('${img}');
	background-repeat: no-repeat;
	background-size: auto 750px, auto 750px, auto 530px, auto 500px, auto 650px;
	background-position: -10% 0, top right, 50% 100%, 63% 100%, top center;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	span {
		color: ${textColorWhite};
	}
	p {
		color: ${textColorLightGrey};
	}
`;

export const LeftWrapper = styled('div')`
	max-width: 17rem;
`;
