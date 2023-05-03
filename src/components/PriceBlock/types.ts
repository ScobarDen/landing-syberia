export interface PriceBlockProps {
	id: string;
	title: string;
	subtitle: string;
	info: Array<PriceBlockItem>;
}

interface PriceBlockItem {
	price: string;
	grade: string;
	experience: string;
}
