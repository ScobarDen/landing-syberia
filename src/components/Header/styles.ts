import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { primary, textColorBlack, textColorLightGrey, textColorWhite } from '../../styles/colors';

export const HeaderSection = styled('header')`
	padding: 23px 0 0 0;
	height: 40px;
	position: relative;
	z-index: 10;

	.ant-row-space-between {
		align-items: center;
		text-align: center;
	}

	button {
		font-size: 12px;
		padding: 7px 15px;
	}
`;

export const LogoContainer = styled(Link)`
	display: flex;
`;

export const NavLink = styled('div')`
	display: inline-block;
	text-align: center;
`;

export const CustomNavLink = styled('div')`
	width: 203px;
	display: inline-block;

	@media only screen and (max-width: 411px) {
		width: 150px;
	}

	@media only screen and (max-width: 320px) {
		width: 118px;
	}
`;

export const ContactWrapper = styled('div')<any>`
	cursor: pointer;
	width: ${p => (p.width ? '100%' : '110px')};
	font-weight: 700;
	text-align: center;
	border-radius: 1.25rem;
	display: inline-block;
`;

export const Burger = styled('div')`
	@media only screen and (max-width: 890px) {
		display: block;
	}

	display: none;

	svg {
		fill: ${textColorWhite};
	}
`;

export const NotHidden = styled('div')`
	@media only screen and (max-width: 890px) {
		display: none;
	}
`;

export const Menu = styled('h5')`
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
	font-size: 15px;
	font-weight: 500;
	color: ${textColorLightGrey};
	transition: color 0.2s ease-in;
	margin: auto 20px;

	@media only screen and (max-width: 768px) {
		margin: 1.25rem 2rem;
		color: ${textColorLightGrey};
	}
`;

export const Label = styled('span')`
	font-weight: 500;
	color: ${textColorBlack};
	text-align: right;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
	font-size: 22px;
`;

export const Span = styled('span')`
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover,
	&:active,
	&:focus {
		color: ${primary};
	}
`;
