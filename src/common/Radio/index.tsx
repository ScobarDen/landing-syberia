import { RadioProps, gradeIndexForPriceBlockType } from '../types';
import { RadioContainer, RadioIndicator, RadioInput } from './styles';

export const Radio = ({ name, value, onChange, checked }: RadioProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(Number(event.target.value) as gradeIndexForPriceBlockType);
	};

	return (
		<RadioContainer isSelected={checked}>
			<RadioInput
				type='radio'
				name={name}
				value={value}
				checked={checked}
				onChange={handleInputChange}
			/>
			<RadioIndicator />
		</RadioContainer>
	);
};
