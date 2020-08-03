import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

export default function RegistrationCategory() {
	const initValuesCategory = {
		titulo: '',
		description: '',
		color: ''
	}
	
	const [valuesCategory, setvaluesCategory] = useState(initValuesCategory);
	const [categorys, setCategorys] = useState([]);

	function setValue(index, value){
		setvaluesCategory({
			...valuesCategory,
			[index]: value
		})
	}

	function handleChange(event){
		setValue(
			event.target.getAttribute('name'),
			event.target.value
		);
	}
	
	useEffect(() => {
		const baseURL = 'http://localhost:8080/categorys';

		fetch(baseURL)
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

				<h1>Cadastro de Categoria: { valuesCategory.titulo }</h1>

				<form onSubmit={function handleSubmit(event) {
					event.preventDefault();
					setCategorys([
						...categorys,
						valuesCategory
					]);
					setvaluesCategory(initValuesCategory);
				}}>
					<FormField
						label="Nome da Categoria"
						type="text"
						name="titulo"
						value={valuesCategory.titulo}
						onChange={handleChange}
					/>

					<FormField
						label="Descrição"
						type="textarea"
						name="description"
						value={valuesCategory.description}
						onChange={handleChange}
					/>

					<FormField
						label="Cor"
						type="color"
						name="color"
						value={valuesCategory.color}
						onChange={handleChange}
					/>
					
					{/*
					<label>
						Descrição:
						<textarea 
							type="text" 
							value={valuesCategory.description}
							name="description"
							onChange={handleChange}
						/>
					</label>
					<label>
						Cor:
						<input 
							type="color" 
							value={valuesCategory.color}
							name="color"
							onChange={handleChange}
						/>
					</label>
						*/}
					<button>
						Cadastrar
					</button>
					
				</form>

				<ul>
					{categorys.map((category, index) => {
						return (
							<li key={`${category}${index}`}>
								{category.titulo}
							</li>
						);
					})}
				</ul>

				
			  
				<Link to="/">
					Voltar para Home
				</Link>

			</PageDefault>
			
		</div>
	);
}