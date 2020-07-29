import React from 'react';
import { Link } from "react-router-dom";

import './Menu.css';
import Logo from '../../assets/img/devsflix.png';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

export default function Menu() {
	return (
		<nav className="Menu">
			<Link to="/">
			  <img className="Logo" src={Logo} alt="Logo Devsflix" />
			</Link>

			<Button as={Link} className="ButtonLink" to="/registration/video" >
				Novo Vídeo
			</Button>
		</nav>
	);
}