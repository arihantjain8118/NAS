import React from 'react';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';

const HomeNavbar = ({RightLink, LinkSecondary}) =>{

	return(
		<div>
			<Link
				color="inherit"
				variant="h6"
				underline="none"
				className={RightLink}
				href="/coverWorld/sign-in/"
			>
				{'Sign In'}
			</Link>
			<Link
				variant="h6"
				underline="none"
				className={clsx(RightLink, LinkSecondary)}
				href="/coverWorld/sign-up/"
			>
				{'Sign Up'}
			</Link>
		</div>
	);
}

export default HomeNavbar;