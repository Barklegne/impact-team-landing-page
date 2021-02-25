import styled from 'styled-components';
import logo from './assets/images/logo.svg';

function App() {
	return (
		<Wrapper>
			<p>Landing page!</p>
			{/* <h2 className='heading bg'>Impact team landing page..</h2> */}
			{/* <img src={logo} alt='logo' /> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.heading {
		font-size: var(--default-font-size);
		color: var(--color-primary);
		margin-top: 2rem;
	}
`;
export default App;
