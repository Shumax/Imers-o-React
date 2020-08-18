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
	const [videos, setVideos] = useState([]);
	
	var selectedCategory = {};

	const initValues = {
		titulo: '',
		url: '',
		category: ''
	}
	
	const {handleChange, values, hasErrors, validate} = useForm(initValues);
	
	useEffect(()=>{
		categorysRepositories.getAll()
			.then((response) => {
				setCategorys(response);
			});

		videosRepositories.getAll()
			.then((response) => {
				setVideos(response);
			});
			
	}, []);

	

	return (
		<div>
			<PageDefault>
				<h1>Cadastro do Vídeo</h1>

				<form onSubmit={function handleSubmit(event) {
					event.preventDefault();

					if (values.category) {
						selectedCategory = categorys.find((categoryFound) => {
							return categoryFound.titulo === values.category;
							});	
	
						videosRepositories.createVideo({
							titulo: values.titulo,
							url: values.url,
							categoryId: selectedCategory.id,
						}).then(()=>{
							history.push('/');	
						});	
					} else {
						validate(values);
					}

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
					{hasErrors.category && <h4>{hasErrors.category}</h4>}

					<Button type="submit" >
						Cadastrar
					</Button>
				</form>
				<br></br>
			
				<br></br>
				<Link to="/registration/category">
					Cadastrar Categoria
				</Link>

			</PageDefault>
			
		</div>
	);
}