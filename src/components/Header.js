import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

function Header() {
	return (
		<Wrapper className='animated-top-fast'>
			<div className='logo-box'>
				<img src={logo} alt='logo' className='logo' />
				<h3 className='company'>IMPACT TEAM</h3>
			</div>
			<nav className='nav-box'>
				<ul className='nav-list'>
					<li className='list-item'>HOME</li>
					<li className='list-item'>FEATURES</li>
					<li className='list-item'>CONTACT US</li>
					<li className='list-item'>SIGN IN</li>
				</ul>
			</nav>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	height: 7rem;
	display: flex;
	justify-content: space-between;

	.logo-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo {
	}

	.company {
		color: var(--color-black-dark-1);
		font-size: 2rem;
		font-weight: 500;
		margin-left: 1.5rem;
	}

	.nav-box {
		align-self: stretch;
		display: flex;

		align-items: center;
	}

	.nav-list {
		list-style: none;
		display: flex;
	}
	.list-item {
		color: var(--color-black-dark-1);
		/* font-weight: 300; */
		margin-right: 6rem;
		font-family: 'Barlow Condensed', sans-serif;
		font-weight: 600;
		align-self: stretch;
		cursor: pointer;
		padding-bottom: 10px;
		border-bottom: 1.5px solid transparent;

		:hover {
			/* font-weight: 500; */
			color: var(--color-secondary);

			border-bottom: 1.5px solid var(--color-primary);
			transition: all 0.8s;
		}
	}

	.list-item:last-child {
		margin-right: 0;
	}
`;
export default Header;
