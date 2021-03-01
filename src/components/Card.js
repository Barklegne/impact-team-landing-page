import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaTelegram, FaInstagram } from 'react-icons/fa';

const Card = () => {
	return (
		<Wrapper>
			<div className='sticky-icons animated-very-late'>
				<ul>
					<li>
						<div>
							<span className='icon'>
								<FaTelegram
									color='var(--color-white)'
									style={{ fontSize: '2rem' }}
								/>
							</span>
							<span className='text'>Telegram</span>
						</div>
					</li>
					<li>
						<div>
							<span className='icon'>
								<FaFacebookF
									color='var(--color-white)'
									style={{ fontSize: '2rem' }}
								/>
							</span>
							<span className='text'>instagram</span>
						</div>
					</li>
					{/* <li>
						<div>
							<span className='icon'>
								<FaInstagram
									color='var(--color-white)'
									style={{ fontSize: '2rem' }}
								/>
							</span>
							<span className='text'>instagram</span>
						</div>
					</li> */}
					<li>
						<div>
							<span className='icon'>
								<FiPhoneCall
									color='var(--color-white)'
									style={{ fontSize: '2rem' }}
								/>
							</span>
							<span className='text'>0911-121212</span>
						</div>
					</li>
				</ul>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.sticky-icons {
		/* background-color: red; */

		position: fixed;
		left: 100%;
		bottom: 5rem;
		/* transform: translateY(10%); */

		li {
			display: block;
			margin: 30px 0;
			background-color: red;

			div {
				position: relative;
				display: flex;
				justify-content: flex-start;
				align-items: stretch;
				text-decoration: none;

				box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
				background-color: rgba(255, 165, 0);
				/* color: black; */

				transition: left ease-out 0.5s;
				left: -5.2rem;

				&:hover,
				&:focus {
					left: -100%;
				}
			}

			.icon {
				width: 4rem;
				min-height: 4rem;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: var(--color-primary);
				color: white;
				padding: 5px;

				/* border: solid 2px red; */
				/* border-radius: 5px; */
			}

			.text {
				padding: 10px 15px;

				font-weight: 400;
				color: var(--color-black);
				font-size: 1rem;
				line-height: normal;
				background-color: rgba(255, 165, 0, 0.7);
				display: flex;
				justify-content: flex-start;
				align-items: center;
				white-space: nowrap;
			}
		}
	}
`;
export default Card;
