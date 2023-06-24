import StreamerImage from "./StreamerImage";

export default function StreamerContainer (props){
    const streamer = `${props.streamerName}`;
    const image = `https://api.dicebear.com/6.x/avataaars/svg?seed=${streamer}`
    const videogame =`${props.gamename}`;
    const followers = `${props.amount}`;
    
    return (
      <>
      <div id="streamersContainer">
        <div className="row ">
          <a className="w-25 p-3 col" href="">
            <img className="rounded-circle"  src={image} />
          </a>

          <p className="col ">
            {streamer}
            <h5 >
              {videogame}
            </h5>
          </p>

          <article className="col 2">
          {props.isActive && <p>{followers}</p>}
          {!props.isActive && <p>Offline</p>}
          
          </article>

        </div>
      </div>
      </>
    );

}