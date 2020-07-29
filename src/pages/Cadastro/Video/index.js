import React from 'react';
import { Link } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';

export default function CadastroVideo() {
	return (
		<div>
			<PageDefault>
				<h1>Cadastro do Vídeo</h1>
			  
				<Link to="/cadastro/categoria">
					Cadastrar Categoria
				</Link>

			</PageDefault>
			
		</div>
	);
}