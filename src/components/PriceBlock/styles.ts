import styled from 'styled-components';
import { lineColorBlack, primary, textColorGrey, textColorWhite } from '../../styles/colors';
import { textColorBlack } from './../../styles/colors';

export const PriceBlockSection = styled('div')`
	id: ${props => props.id};
`;
export const PriceBlockCard = styled('div')`
	height: 455px;
	background-color: ${textColorWhite};
	border-radius: 20px;
	margin-top: -80px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const PriceBlockWrapper = styled('div')`
	max-width: 552px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h4 {
		font-weight: 600;
		font-size: 24px;
		line-height: 29px;
		text-align: center;
		color: ${textColorBlack};
		span {
			color: ${primary};
			display: inline-block;
			border-bottom: 1px dashed ${primary};
		}
	}
`;

export const Price = styled('div')`
	font-weight: 500;
	font-size: 55px;
	line-height: 64px;
	color: ${textColorBlack};
`;

export const Grade = styled('div')`
	width: 100%;
`;

export const GradeWrapper = styled('div')`
	display: flex;
	align-items: start;
	justify-content: space-between;
`;

export const GradeBox = styled('div')`
	max-width: 100px;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	margin-top: 23px;
	color: ${textColorBlack};
	span {
		line-height: 14px;
		color: ${textColorGrey};
	}
	&:nth-child(2) {
		max-width: 150px;
	}
`;

export const Line = styled('div')`
	margin-top: 44px;
	border: 1px solid ${lineColorBlack};
	width: 475px;
`;
