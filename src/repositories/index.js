import services from '../services';

const URL_CATEGORYS = `${services.BASE_URL}/categorys`;

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

export default {
	getAllWithVideos,
};