import React from 'react';
import {useHistory} from 'react-router-dom';
import videosRepositories from '../../../../repositories/Videos';

import Button from '../../../../components/Button';
import './videosTable.scss';

const VideosTable = (props) => {
	const history = useHistory();

	return (
		<div className="videosTable">
			<table >
				<thead className="videosTable__header">
					<tr>
						<th>Categoria</th>
						<th>Vídeo</th>
						<th></th>
					</tr>
				</thead>
				<tbody className="videosTable__body">
				{props.videos.map((video) => (
					<tr key={video.id}>
						<td>{video.categoryId}</td>
						<td>{video.titulo}</td>
						<td>
							<Button>Alterar</Button>
						</td>
						<td>
						<Button
								onClick={() => videosRepositories.deleteVideo(video.id).then(()=>{
									history.push('/');	
								})}
							>Deletar</Button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
}

export default VideosTable;