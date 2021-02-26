import React from 'react';
import styled from 'styled-components';

const SocialMedia = () => {
	return (
		<SocialMediaWrapper>
			<div className='social-media'>Social icons</div>
		</SocialMediaWrapper>
	);
};

const SocialMediaWrapper = styled.div`
	flex: 0 0 5%;

	.social-media {
		background-color: orangered;
		align-items: flex-end;

		/* flex: 0 0 15%; */
	}
`;
export default SocialMedia;
