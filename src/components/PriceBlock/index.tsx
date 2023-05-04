import { useState } from 'react';
import { Radio } from '../../common/Radio';
import { gradeIndexForPriceBlockType } from '../../common/types';
import {
	Grade,
	GradeBox,
	GradeWrapper,
	Line,
	Price,
	PriceBlockCard,
	PriceBlockSection,
	PriceBlockWrapper,
	RadioInputWrapper,
} from './styles';
import { PriceBlockProps } from './types';

const PriceBlock = ({ id, title, subtitle, info }: PriceBlockProps) => {
	const [gradeIndex, setGradeIndex] = useState<gradeIndexForPriceBlockType>(0);
	const handleRadioChange = (value: gradeIndexForPriceBlockType) => {
		setGradeIndex(value);
	};
	return (
		<PriceBlockSection id={id}>
			<PriceBlockCard>
				<PriceBlockWrapper>
					<h4>
						{title} <br /> <span>{subtitle}</span>
					</h4>
					<Price>от {info[gradeIndex].price} 000 ₽/мес</Price>
					<Grade>
						<Line />
						<RadioInputWrapper>
							<Radio
								name='radio-group-grade'
								value={0}
								checked={gradeIndex === 0}
								onChange={handleRadioChange}
							/>
							<Radio
								name='radio-group-grade'
								value={1}
								checked={gradeIndex === 1}
								onChange={handleRadioChange}
							/>
							<Radio
								name='radio-group-grade'
								value={2}
								checked={gradeIndex === 2}
								onChange={handleRadioChange}
							/>
						</RadioInputWrapper>
						<GradeWrapper>
							{info.map((item, index) => (
								<GradeBox key={item.price}>
									{item.grade} <br /> <span>{item.experience.slice(0, 3)}</span> <br />{' '}
									<span>{item.experience.slice(3)}</span>
								</GradeBox>
							))}
						</GradeWrapper>
					</Grade>
				</PriceBlockWrapper>
			</PriceBlockCard>
		</PriceBlockSection>
	);
};

export default PriceBlock;
