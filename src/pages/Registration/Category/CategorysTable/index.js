import React from 'react';
import {useHistory} from 'react-router-dom';
import categoryRepositories from '../../../../repositories/Categorys';

const CategorysTable = (props) => {
	const history = useHistory();

	return (
		<table>
			<tbody>
			{props.categorys.map((category) => (
				<tr key={category.id}>
					<th>{category.titulo}</th>
					<th>
						<button>Alterar</button>
						<button
							onClick={() => categoryRepositories.deleteCategory(category.id).then(()=>{
								history.push('/');	
							})}
						>Deletar</button>
					</th>
				</tr>
			))}
			</tbody>
		</table>
	);
}

export default CategorysTable;