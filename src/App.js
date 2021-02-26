import styled from 'styled-components';
import { FaTelegram, FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import Header from './components/Header';
import Main from './components/Main';

function App() {
	return (
		<AppWrapper>
			<Header />

			<Main />
		</AppWrapper>
	);
}
const AppWrapper = styled.div`
	/* * the app takes 97% of the screen width */
	max-width: 97vw;
	padding: 0 6rem;
	font-size: var(--default-font-size);

	display: flex;
	margin: 0 auto;
	flex-direction: column;

	/* //TODO: lines below temporary codes, needs to be removed */
	min-height: 100vh;
	background-color: whitesmoke;
	box-shadow: 0 2rem 6rem rgba(0, 0, 0, 1);
`;
export default App;
