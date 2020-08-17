import React from 'react';
import {useHistory} from 'react-router-dom';
import categoryRepositories from '../../../../repositories/Categorys';
import useForm from '../../../../customHooks';

import Button from '../../../../components/Button';
import './categoryTable.scss';

const CategorysTable = (props) => {
	const history = useHistory();

	console.log(props)
	return (
		<div className="categoryTable">
		<table>
			<tbody className="categoryTable__body">
			{props.categorys.map((category) => (
				<tr key={category.id}>
					<th>{category.titulo}</th>
					<th>
						<Button
								
						>Alterar</Button>
					</th>
					<th>
					<Button
							onClick={() => categoryRepositories.deleteCategory(category.id).then(()=>{
								history.push('/');	
							})}
						>Deletar</Button>
					</th>
				</tr>
			))}
			</tbody>
		</table>
		</div>
	);
}

export default CategorysTable;