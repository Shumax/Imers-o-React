import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import useForm from '../../../customHooks';
import categorysRepositories from '../../../repositories/Categorys';

function RegistrationCategory() {

	const initValues = {
		titulo: '',
		description: '',
		color: ''
	}
	
	const {handleChange, values, clearForm, hasErrors, validate} = useForm(initValues);
	const [categorys, setCategorys] = useState([]);


	
	useEffect(() => {
		const BASE_URL = window.location.hostname.includes('localhost')
			? 'http://localhost:8080/categorys'
			: 'https://devsflix-by-shumax.herokuapp.com/categorys';

		fetch(BASE_URL)
			.then(async (response) => {
				const responseFetched = await response.json();
				setCategorys([
					...responseFetched,
				]);
		});
		
	},[]);

	return (
		<div>
			<PageDefault>
				<h1>Cadastro de Categoria: { values.titulo }</h1>

				<form onSubmit={function handleSubmit(event) {
					event.preventDefault();
					
					if (!values.titulo) {
						validate(values);
					}else {
						setCategorys([
							...categorys,	
							values
						]);

						categorysRepositories.createCategory({
							titulo: values.titulo,
							cor: values.color
						});

						clearForm(initValues);
					}
				}}>
					<FormField
						label="Nome da Categoria"
						type="text"
						name="titulo"
						value={values.titulo}
						onChange={handleChange}
					/>
					{hasErrors.titulo && <h4>{hasErrors.titulo}</h4>}

					<FormField
						label="Descrição"
						type="textarea"
						name="description"
						value={values.description}
						onChange={handleChange}
					/>

					<FormField
						label="Cor"
						type="color"
						name="color"
						value={values.color}
						onChange={handleChange}
					/>
					
					<Button>
						Cadastrar
					</Button>
					
				</form>

				{
					!categorys.length 
						? <Loading/> 
						: <ul>
								{categorys.map((category, index) => {
									return (
										<li key={`${category}${index}`}>
											{category.titulo}
										</li>
									);
								})}
							</ul>
				}

				<Link to="/">
					Voltar para Home
				</Link>
			</PageDefault>
		</div>
	);
}

export default RegistrationCategory;