import { lazy } from 'react';
import HeaderBlockContent from '../../content/HeaderBlockContent.json';

const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const HeaderContentBlock = lazy(() => import('../../components/HeaderContentBlock'));

const Home = () => {
	return (
		<>
			<HeaderContentBlock id='headerContent' {...HeaderBlockContent} />
			{/* <Container>
				<ScrollToTop />
				<ContentBlock
					type='right'
					title={IntroContent.title}
					content={IntroContent.text}
					button={IntroContent.button}
					icon='developer.svg'
					id='intro'
				/>
				<MiddleBlock
					title={MiddleBlockContent.title}
					content={MiddleBlockContent.text}
					button={MiddleBlockContent.button}
				/>
				<ContentBlock
					type='left'
					title={AboutContent.title}
					content={AboutContent.text}
					section={AboutContent.section}
					icon='graphs.svg'
					id='about'
				/>
				<ContentBlock
					type='right'
					title={MissionContent.title}
					content={MissionContent.text}
					icon='product-launch.svg'
					id='mission'
				/>
				<ContentBlock
					type='left'
					title={ProductContent.title}
					content={ProductContent.text}
					icon='waving.svg'
					id='product'
				/>
				<Contact title={ContactContent.title} content={ContactContent.text} id='contact' />
			</Container> */}
		</>
	);
};

export default Home;
