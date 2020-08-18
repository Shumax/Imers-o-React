import services from '../../services';

const URL_CATEGORYS = `${services.BASE_URL}/categorys`;

function getAll(){
	return fetch(URL_CATEGORYS)
		.then(async (response) => {
			if (response.ok) {
				return await response.json();	
			}else{
				throw new Error('Servidor Offline!!!');
			}
		})
}

function getAllWithVideos(){
	return fetch(`${URL_CATEGORYS}?_embed=videos`)
		.then(async (response) => {
			if (response.ok) {
				return await response.json();	
			}else{
				throw new Error('Servidor Offline!!!');
			}
		})
}

function createCategory(categorys) {
	return fetch(`${URL_CATEGORYS}?_embed=category`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(categorys)
	})
	.then(async (response) => {
		if (response.ok) {
			return await response.json();	
		}else{
			throw new Error('Servidor Offline!!!');
		}
	})
}

function deleteCategory(id) {
	return fetch(`${URL_CATEGORYS}/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
		}
	}).then(async (response) => {
		if(response.ok) {
			return await response.json();
		}else {
			throw new Error('Servidor Offline!');
		}
	})
}

function getById(id){
	return fetch(`${URL_CATEGORYS}/${id}`,{
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		}
	})
		.then(async (response) => {
			if (response.ok) {
				return await response.json();	
			}else{
				throw new Error('Servidor Offline!!!');
			}
		})
}

export default {
	getAllWithVideos,
	getAll,
	createCategory,
	deleteCategory,
	getById,
};