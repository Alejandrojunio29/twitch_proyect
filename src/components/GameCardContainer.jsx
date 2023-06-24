
export default function GameCard (props){
    const gameImage =`${props.imageLink}`
    const videogame = `${props.gameName}`;
    const twitchViewers = `${props.viewers}`;

    return (
        
        <div className="card text-bg-dark  ">
            <div>
                
             {/*TRATE DE APLICAR OTRA LOGICA DIFERENTE AQUI: SI ISNEW DAME LA IMAGEN Y LOS EMOJIS PERO NO SUME COMO SUMARLOS 
              {props.isNew && <img className="card-img-top" src={gameImage}/> + <i className="">🆕👑</i>}   
             {!props.isNew && <img className="card-img-top" src={gameImage}/> && <i></i>}    */}

             {props.isNew && <i className="">🆕👑</i>}   
             {!props.isNew && <i></i>}   
             <img className="card-img-top" src={gameImage}/>
            </div>
            <div className="card-body">
             <h5 className="card-title">
             {videogame}
             </h5> 
             <p className="card-text">
                {twitchViewers}
                </p>   
            </div>
            

        </div>
    )

}