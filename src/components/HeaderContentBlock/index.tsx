import { Col, Row } from 'antd';
import { Button } from '../../common/Button';
import Container from '../../common/Container';
import { HeaderContentBlockSection, LeftWrapper } from './styles';
import { HeaderContentBlockProps } from './types';

const HeaderContentBlock = ({ id, title, subtitle, text, buttonText }: HeaderContentBlockProps) => {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id) as HTMLDivElement;
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<HeaderContentBlockSection>
			<Container>
				<Row justify='space-between' align='middle' id={id}>
					<Col lg={11} md={11} sm={12} xs={24}>
						<LeftWrapper>
							<p>{text}</p>
							<h1>
								<span>{title}</span> {subtitle}
							</h1>
							<Button onClick={() => scrollTo('contact')}>{buttonText}</Button>
						</LeftWrapper>
					</Col>
					<Col lg={11} md={11} sm={11} xs={24}></Col>
				</Row>
			</Container>
		</HeaderContentBlockSection>
	);
};

export default HeaderContentBlock;
