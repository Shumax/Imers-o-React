import React from 'react';

import './Menu.css';
import Logo from '../../assets/img/devsflix.png';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

export default function Menu() {
	return (
		<nav className="Menu">
			<a href="/">
			  <img className="Logo" src={Logo} alt="Logo Devsflix" />
			</a>

			<Button className="ButtonLink" href="/" >
				Novo Vídeo
			</Button>
		</nav>
	);
}