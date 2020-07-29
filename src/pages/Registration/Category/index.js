import React from 'react';
import { Link } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';

export default function RegistrationCategory() {
	return (
		<div>
			<PageDefault>
				<h1>Cadastro de Categoria</h1>
			  
				<Link to="/">
					Voltar para Home
				</Link>

			</PageDefault>
			
		</div>
	);
}