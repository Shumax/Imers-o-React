import services from '../../services';

const URL_VIDEOS = `${services.BASE_URL}/videos`;

function getAll(){
	return fetch(URL_VIDEOS)
		.then(async (response) => {
			if (response.ok) {
				return await response.json();	
			}else{
				throw new Error('Servidor Offline!!!');
			}
		})
}

function createVideo(videos) {
	return fetch(`${URL_VIDEOS}?_embed=videos`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(videos)
	})
	.then(async (response) => {
		if (response.ok) {
			return await response.json();	
		}else{
			throw new Error('Servidor Offline!!!');
		}
	})
}

function deleteVideo(id) {
	return fetch(`${URL_VIDEOS}/${id}`, {
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

export default {
	createVideo,
	getAll,
	deleteVideo,
};