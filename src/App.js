import styled from 'styled-components';
// import { FaTelegram, FaFacebook } from 'react-icons/fa';
// import { RiInstagramFill } from 'react-icons/ri';

import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import AnimatedCursor from 'react-animated-cursor';
import Particle from './components/Particles';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [loading]);

	if (loading) return <Loading />;
	else
		return (
			<>
				<Particle />
				<AnimatedCursor color='64, 185, 234 ' />
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100vh'
					}}>
					<AppWrapper>
						<Header />
						<Main />
					</AppWrapper>
				</div>
			</>
		);
}
const AppWrapper = styled.div`
	//*  the app takes a maximum of 1400px **/
	max-width: 140rem;
	padding: 0 6rem;
	font-size: var(--default-font-size);

	display: flex;
	margin: 0 auto;
	flex-direction: column;

	/* //TODO: lines below temporary codes, needs to be removed */
	min-height: 100vh;
	/* background-color: whitesmoke; */
	/* box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.08); */
`;
export default App;
