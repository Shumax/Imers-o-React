import React from 'react';
import { Link, useHistory } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Loading from '../../../components/Loading';
import useForm from '../../../customHooks';

export default function RegistrationVideo() {
	const history = useHistory();
	const initValues = {
		titulo: '',
		URL: '',
		category: ''
	}
	
	const {handleChange, values, clearForm} = useForm(initValues);
	//const [videos, setVideos] = useState([]);
	return (
		<div>
			<PageDefault>
				<h1>Cadastro do Vídeo</h1>
				<form onSubmit={function handleSubmit(event) {
					event.preventDefault();
					
					history.push('/');
				}}>
					<FormField
						label="Título do Vídeo"
						type="text"
						name="titulo"
						value={values.titulo}
						onChange={handleChange}
					/>
					<FormField
						label="URL"
						type="text"
						name="URL"
						value={values.URL}
						onChange={handleChange}			
					/>

					<FormField
						label="Categoria"
						type="category"
						name="category"
						value={values.category}
						onChange={handleChange}
					/>

					<button>
						Cadastrar
					</button>
				</form>
				
				
				<Link to="/registration/category">
					Cadastrar Categoria
				</Link>

			</PageDefault>
			
		</div>
	);
}