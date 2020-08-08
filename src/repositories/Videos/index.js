import services from '../../services';
import { func } from 'prop-types';

const URL_VIDEOS = `${services.BASE_URL}/videos`;

function createVideo(videos) {
	return fetch(`${URL_VIDEOS}?_embed=videos`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		bady: JSON.stringify(videos)
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
	createVideo,
}