import React, { useState, useEffect } from 'react';
import { Link , useParams} from "react-router-dom";

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
//import Loading from '../../../components/Loading';
import useForm from '../../../customHooks';
import categorysRepositories from '../../../repositories/Categorys';


function EditCategory() {
	const parseid = useParams();
	const id = parseInt(parseid.id)
	

	const [categoryById, setCategoryById] = useState([]);
	const {handleChange, values, clearForm, hasErrors, validate} = useForm(categoryById);
	

	
	useEffect(() => {
		categorysRepositories.getById(id)
			.then((resp) => {
				setCategoryById(resp);
			});
	},[]);

	console.log(values)
	return (
		<div>
			<PageDefault>
				<h1>Edição da Categoria { categoryById.titulo }</h1>

				<form onSubmit={function handleSubmit(event) {
					event.preventDefault();
					
					if (!values.titulo) {
						validate(values);
					}else {
						setCategoryById([
							...categoryById,	
							values
						]);

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
				<br></br>
				

				<Link to="/">
					Voltar para Home
				</Link>
			</PageDefault>
		</div>
	);
}

export default EditCategory;