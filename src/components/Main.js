import React, { useEffect } from 'react';
import styled from 'styled-components';
// import mainImg from '../assets/images/study.png';
import girlStudying from '../assets/images/book_reading_girl_bright.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaBookReader } from 'react-icons/fa';

import Typical from 'react-typical';
import Card from './Card';

function Main() {
	const steps = [
		'Helping you towards your higher level achievement 🎓 ',
		3000,
		'Prepare for your exams wherever you are 🖊',
		1000,
		'Everywhere you go 👌',
		3000,
		'No more carrying books 📚',
		2000,
		'👇Downloads for Android,IOS and PC👇',
		1000
	];

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<Wrapper>
			<main className='hero-box' data-aos='fade-down'>
				<div className='hero-text '>
					<p className='slogan' data-aos='fade-down'>
						<span>
							<FaBookReader color='var(--color-primary)' />
						</span>
						STUDYING SIMPLIFIED
					</p>
					<h2 className='title'>
						Temehert <br />
						Educational Platform
					</h2>
					<p className='short-description'>
						<Typical
							wrapper='span'
							steps={steps}
							loop={1}
							// className='legend'
						/>
					</p>
					<div className='cta'>
						<button className='btn animated-late'>Signup</button>
						<button className='btn  animated-very-late margin-right-sm '>
							Watch Demo
						</button>
					</div>
				</div>
				<div className='hero-image' data-aos='fade-down'>
					<img src={girlStudying} alt='main' className='img' />
				</div>
			</main>
			<section className='features'>
				<Card />
			</section>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* background-color: #fff; */
	flex: 1;

	display: flex;
	flex-direction: column;
	height: calc(100vh - 7rem); // 100vh - hight of the header
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	color: var(--color-black);

	.hero-box {
		display: flex;
		flex: 0 0 70%;
		/* background-color: red; */
	}
	.features {
		/* background-color: bisque; */

		flex: 1;
	}

	.hero-text {
		flex: 0 0 50%;
		/* background-color: gray; */
		display: flex;
		flex-direction: column;
	}

	.slogan {
		margin-top: 7rem;
		/* color: var(--color-secondary); */
		font-family: 'Barlow Condensed', sans-serif;
		font-weight: 400;
	}

	span {
		padding-right: 1.5rem;
	}

	.title {
		margin-top: 4rem;
		font-size: 4rem;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Barlow Condensed', sans-serif;
	}

	.short-description {
		font-size: inherit;
		margin-top: 3rem;
		font-weight: 400;
	}

	.cta {
		/* align-self: center; */
		margin: 4rem auto;
		/* background-color: orange; */
		/* flex: 1; */
	}

	.hero-image {
		flex: 0 0 50%;
		/* background-color: orange; */

		/* align-self: stretch; */
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
	}

	.img {
		height: 40rem;
		width: 40rem;
		/* background-color: green; */

		margin-top: 2rem;
	}

	.legend {
		font-weight: 400;
	}
`;
export default Main;
