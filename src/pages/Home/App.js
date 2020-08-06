import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDedfault from '../../components/PageDefault';
import Loading from '../../components/Loading';
//import dadosIniciais from '../../data/dados_iniciais.json';
import categorysRepositories from '../../repositories';

import './App.css';

function App() {
	const [dataInit, setDataInit] = useState([]);

	useEffect(()=> {
		categorysRepositories.getAllWithVideos()
			.then((categorysWithVideos)=>{
				setDataInit(categorysWithVideos);
				console.log(categorysWithVideos)
			})
			.catch((error)=>{
				console.error(error);
			})
	},[]);

  return (
    <div className="App">
			<PageDedfault>
				{
					!dataInit.length ? (
						<Loading/>
					):(
						<>
						{dataInit.map((category, index) => {
							if (index === 0) {
								return (
									<div key={category.id}>
										<BannerMain
											videoTitle={dataInit[0].videos[0].titulo}
											url={dataInit[0].videos[0].url}
											videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
										/>
										<Carousel
											ignoreFirstVideo
											category={dataInit[0]}
										/>
									</div>
								);		
							}
							return (
								<Carousel 
									key={category.id}
									category={category}
								/>
							);
						})}
						</>
					)
				}
			</PageDedfault>
      {/*<Menu/>
			<BannerMain
        videoTitle={dataInit[0].videos[0].titulo}
        url={dataInit[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dataInit[0]}
      />

      <Carousel
        category={dataInit[1]}
      />

      <Carousel
        category={dataInit[2]}
      />      

      <Carousel
        category={dataInit[3]}
      />      

      <Carousel
        category={dataInit[4]}
      />      

      <Carousel
        category={dataInit[5]}
      />      
			<Footer/>		*/}	
    </div>
  );
}

export default App;