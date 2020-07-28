import React from 'react';

export default function ButtonLink(props) {


	return (
		<a className="ButtonLink" href={props.className} >
			{props.children}
		</a>
	);
}