import { lazy } from 'react';
import Container from '../../common/Container';
import PriceBlock from '../../components/PriceBlock';
import HeaderBlockContent from '../../content/HeaderBlockContent.json';
import PriceBlockContent from '../../content/PriceBlockContent.json';

const HeaderContentBlock = lazy(() => import('../../components/HeaderContentBlock'));

const Home = () => {
	return (
		<>
			<HeaderContentBlock id='headerContent' {...HeaderBlockContent} />
			<Container>
				<PriceBlock id='priceBlock' {...PriceBlockContent} />
				{/* <ScrollToTop /> */}
			</Container>
		</>
	);
};

export default Home;
