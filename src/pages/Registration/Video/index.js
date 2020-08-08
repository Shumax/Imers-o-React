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
	
	const {handleChange, values, clearForm} = useForm(initValues);
	
	useEffect(()=>{
		categorysRepositories.getAll()
			.then((response) => {
				setCategorys(response);
			});
			
	}, []);

	return (
		<div>
			<PageDefault>
				<h1>Cadastro do Vídeo</h1>

				<form onSubmit={function handleSubmit(event) {
					event.preventDefault();
					
					const selectedCategory = categorys.find((categoryFound) => {
						return categoryFound.titulo === values.category;
					});

					console.log(selectedCategory)
					console.log(categorys)
					
					videosRepositories.createVideo({
						titulo: values.titulo,
						url: values.url,
						categoryId: selectedCategory.id,
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
						value={values.url}
						onChange={handleChange}			
					/>

					<FormField
						label="Categoria"
						type="category"
						name="category"
						value={values.category}
						onChange={handleChange}
						suggestions={categorys.map(({titulo})=> titulo)}
					/>

					<button type="submit" >
						Cadastrar
					</button>
				</form>
				
				<br></br>
				<Link to="/registration/category">
					Cadastrar Categoria
				</Link>

			</PageDefault>
			
		</div>
	);
}