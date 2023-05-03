import { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import {
	Grade,
	GradeBox,
	GradeWrapper,
	Line,
	Price,
	PriceBlockCard,
	PriceBlockSection,
	PriceBlockWrapper,
} from './styles';
import { PriceBlockProps } from './types';

const PriceBlock = ({ id, title, subtitle, info }: PriceBlockProps) => {
	const [gradeIndex, setGradeIndex] = useState<0 | 1 | 2>(0);
	return (
		<PriceBlockSection id={id}>
			<Slide direction='left'>
				<PriceBlockCard>
					<PriceBlockWrapper>
						<h4>
							{title} <br /> <span>{subtitle}</span>
						</h4>
						<Price>от {info[gradeIndex].price} 000 ₽/мес</Price>
						<Grade>
							<Line />
							<GradeWrapper>
								{info.map((item, index) => (
									<GradeBox key={item.price}>
										{item.grade} <br /> <span>{item.experience}</span>
									</GradeBox>
								))}
							</GradeWrapper>
						</Grade>
					</PriceBlockWrapper>
				</PriceBlockCard>
			</Slide>
		</PriceBlockSection>
	);
};

export default withTranslation()(PriceBlock);
