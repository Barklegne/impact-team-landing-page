import React from 'react';
import styled from 'styled-components';
import mainImg from '../assets/images/study.png';

function Main() {
	return (
		<Wrapper>
			<main className='hero-box'>
				<div className='hero-text animated-left-normal'>
					<p className='slogan'> --- STUDYING SIMPLIFIED</p>
					<h2 className='title '>Temehert Educational Platform</h2>
					<p className='short-description'>
						A higher academic excellence through our new technologies
						<br />
						on your phone, on your computer
					</p>
					<div className='cta'>
						<button className='btn animated-normal'>Signup</button>
						<button className='btn animated-late margin-right-sm '>
							Watch Demo
						</button>
					</div>
				</div>
				<div className='hero-image'>
					<img src={mainImg} alt='main' className='img' />
					<p className='carousel-legend'>
						Prepare for your national exam online
					</p>
				</div>
			</main>
			<section className='features'>Features Section</section>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* background-color: green; */
	flex: 1;

	display: flex;
	flex-direction: column;
	height: calc(100vh - 7rem); // 100vh - hight of the header

	.hero-box {
		display: flex;
		flex: 0 0 70%;
		/* background-color: red; */
	}
	.features {
		background-color: bisque;
		flex: 1;
	}

	.hero-text {
		flex: 0 0 50%;
		/* background-color: gray; */
		display: flex;
		flex-direction: column;
	}

	.slogan {
		margin-top: 10rem;
	}

	.title {
		margin-top: 5rem;
		font-size: 3.5rem;
	}

	.short-description {
		margin-top: 5rem;
	}

	.cta {
		/* align-self: center; */
		margin: 4rem auto;
		/* background-color: orange; */
		/* flex: 1; */
	}

	.hero-image {
		flex: 0 0 50%;

		align-self: stretch;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
	}

	.img {
		height: 40rem;
		width: 50rem;
		margin-bottom: 2rem;
	}
`;
export default Main;
