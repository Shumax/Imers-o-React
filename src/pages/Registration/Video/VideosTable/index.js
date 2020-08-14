import React from 'react';
import {useHistory} from 'react-router-dom';
import videosRepositories from '../../../../repositories/Videos';

const VideosTable = (props) => {
	const history = useHistory();

	return (
		<table>
			<thead>
				<tr>
					<th>Categoria</th>
					<th>Vídeo</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
			{props.videos.map((video) => (
				<tr key={video.id}>
					<td>{video.categoryId}</td>
					<td>{video.titulo}</td>
					<td>
						<button>Alterar</button>
						<button
							onClick={() => videosRepositories.deleteVideo(video.id).then(()=>{
								history.push('/');	
							})}
						>Deletar</button>
					</td>
				</tr>
			))}
			</tbody>
		</table>
	);
}

export default VideosTable;