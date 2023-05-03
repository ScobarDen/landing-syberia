import styled from 'styled-components';
import img from '../../img/backgroundImageHeader.png';
import leftImg from '../../img/backgroundImageHeaderLeft.png';
import rightImg from '../../img/backgroundImageHeaderRight.png';
import girl from '../../img/boy.png';
import boy from '../../img/girl.png';
import { textColorLightGrey, textColorWhite } from '../../styles/colors';
//todo: разобраться с этими картинками на фоне
export const HeaderContentBlockSection = styled('div')`
	height: 670px;
	position: relative;
	top: -40px;
	background-image: url('${boy}'), url('${girl}'), url('${leftImg}'), url('${rightImg}'),
		url('${img}');
	background-repeat: no-repeat;
	background-size: 435px 532px, 403px 532px, 70% 740px, 70% 740px, auto 740px;
	background-position: calc(50% + 120px) calc(100% - 0px), calc(50% + 330px) calc(100% - 0px),
		-70% 0, 220% 0, 50% 0;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	span {
		color: ${textColorWhite};
	}
	p {
		line-height: 19px;
		font-size: 16px;
		opacity: 0.7;
		color: ${textColorLightGrey};
		max-width: 205px;
	}
	h1 {
		font-size: 64px;
		line-height: 58px;
		margin-bottom: 55px;
	}

	button {
		font-size: 14px;
		line-height: 20px;
		padding: 10px 25px;
		font-weight: 600;
	}
`;

export const LeftWrapper = styled('div')`
	max-width: 17rem;
`;
