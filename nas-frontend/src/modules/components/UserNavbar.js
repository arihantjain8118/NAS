import React from 'react';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';

const UserNavbar = ({RightLink, LinkSecondary}) =>{

	return(
		<div>
			<Link
				color="inherit"
				variant="h6"
				underline="none"
				className={RightLink}
				href="/coverWorld/profile/"
			>
				{'Profile'}
			</Link>
			<Link
				variant="h6"
				underline="none"
				className={clsx(RightLink, LinkSecondary)}
				href="/coverWorld/"
			>
				{'Sign Out'}
			</Link>
		</div>
	);
}

export default UserNavbar;