import React, { useState } from 'react';
import { Link } from "react-router-dom";

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

export default function RegistrationCategory() {
	const initValuesCategory = {
		name: '',
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
	

	return (
		<div>
			<PageDefault>

				<h1>Cadastro de Categoria: { valuesCategory.name }</h1>

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
						name="name"
						value={valuesCategory.name}
						onChange={handleChange}
					/>

					<label>
						Descrição:
						<input 
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
					
					<button>
						Cadastrar
					</button>
					
				</form>

				<ul>
					{categorys.map((category, index) => {
						return (
							<li key={`${category}${index}`}>
								{category.name}
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