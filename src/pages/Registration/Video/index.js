import React from 'react';
import { Link } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';

export default function RegistrationVideo() {
	return (
		<div>
			<PageDefault>
				<h1>Cadastro do Vídeo</h1>
			  
				<Link to="/registration/category">
					Cadastrar Categoria
				</Link>

			</PageDefault>
			
		</div>
	);
}