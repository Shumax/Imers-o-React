import React, {useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import useForm from '../../../customHooks';
import videosRepositories from '../../../repositories/Videos';
import categorysRepositories from '../../../repositories/Categorys';

export default function RegistrationVideo() {
	const history = useHistory();
	const [categorys, setCategorys] = useState([]);

	const initValues = {
		titulo: '',
		url: '',
		category: ''
	}

	useEffect(()=>{
		categorysRepositories.getAll()
			.then((response) => {
				setCategorys(response);
			});
			
	}, []);
	
	const {handleChange, values, clearForm} = useForm(initValues);
	//console.log(categorys.map(({titulo})=> titulo))
	return (
		<div>
			<PageDefault>
				<h1>Cadastro do Vídeo</h1>

				<form onSubmit={function handleSubmit(event) {
					event.preventDefault();
					
					/*const selectedCategory = categorys.map((categoryFound) => {
						return categoryFound;
					});

					console.log(selectedCategory)
					console.log(categorys)
					*/
					videosRepositories.createVideo({
						titulo: values.titulo,
						url: values.url,
						categoryId: categorys.id,
					}).then(()=>{
						history.push('/');
					})
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
						name="url"
						value={values.URL}
						onChange={handleChange}			
					/>

					<FormField
						label="Categoria"
						type="list"
						name="category"
						value={values.category}
						onChange={handleChange}
						suggestions={categorys.map(({titulo})=> titulo)}
					/>

					<button >
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