import { Col, Drawer, Row } from 'antd';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import {
	Burger,
	CustomNavLinkSmall,
	HeaderSection,
	Label,
	LogoContainer,
	Menu,
	NotHidden,
	Outline,
	Span,
} from './styles';

const Header = ({ t }: any) => {
	const [visible, setVisibility] = useState(false);

	const showDrawer = () => {
		setVisibility(!visible);
	};

	const onClose = () => {
		setVisibility(!visible);
	};

	const MenuItem = () => {
		const scrollTo = (id: string) => {
			const element = document.getElementById(id) as HTMLDivElement;
			element.scrollIntoView({
				behavior: 'smooth',
			});
			setVisibility(false);
		};
		return (
			<>
				<CustomNavLinkSmall onClick={() => scrollTo('priceBlock')}>
					<Span>{t('possimus')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo('similique')}>
					<Span>{t('similique')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo('rerum')}>
					<Span>{t('rerum')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo('tenetur')}>
					<Span>{t('tenetur')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo('delectus')}>
					<Span>{t('delectus')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall
					style={{ width: '93px', marginLeft: '15px', marginRight: '0' }}
					onClick={() => scrollTo('contact')}
				>
					<Span>
						<Button>{t('Связаться')}</Button>
					</Span>
				</CustomNavLinkSmall>
			</>
		);
	};

	return (
		<HeaderSection>
			<Container>
				<Row justify='space-between'>
					<LogoContainer to='/' aria-label='homepage'>
						<SvgIcon src='logo.svg' width='115px' height='38px' />
					</LogoContainer>
					<NotHidden>
						<MenuItem />
					</NotHidden>
					<Burger onClick={showDrawer}>
						<Outline />
					</Burger>
				</Row>
				<Drawer closable={false} open={visible} onClose={onClose}>
					<Col style={{ marginBottom: '2.5rem' }}>
						<Label onClick={onClose}>
							<Col span={12}>
								<Menu>Menu</Menu>
							</Col>
							<Col span={12}>
								<Outline />
							</Col>
						</Label>
					</Col>
					<MenuItem />
				</Drawer>
			</Container>
		</HeaderSection>
	);
};

export default withTranslation()(Header);
