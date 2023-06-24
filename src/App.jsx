import StreamerContainer from "./components/StreamerContainer";
import GameCardContainer from "./components/GameCardContainer";
export default function App(){

    return(
        <>
        <div className=" container-fluid d-flex text-center ">
         <div id="box1" className=" col-2 d-flex p-2 text-white ">

        <section id="streamerList" className=" col ">
        <p>Recommended Channels</p>

            <article className="streamer border border-danger-subtle  ">
            <StreamerContainer streamerName ="Fextralife " gamename="Diablo IV" isActive={true} amount="🔴 22K"/>
            </article>
            
            <article className="streamer ">
            <StreamerContainer streamerName ="Toniki " gamename="Overwatch" isActive amount="🔴 15.1k"/>
            </article>
            <article className="streamer ">
            <StreamerContainer streamerName ="Ironmouse" gamename="Just Chatting" amount="🔴 24.5K"/>
            </article>
            <article className="streamer ">
            <StreamerContainer streamerName ="Jay3" gamename="Overwatch 2"  isActive amount="🔴 16K"/>
            </article>
            <article className="streamer ">
            <StreamerContainer streamerName ="SmiteGame" gamename="SMITE" amount="🔴 11K"/>
            </article>

        </section>
        </div>


            <div id="box2" className="col-10 p-2 d-flex">
        <section id="gameCardList" className="d-flex flex-wrap gap-3 ">
            

            <article className="gameCard col-2  border border-info  ">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"  gameName="Just Chatting" isNew={true} viewers="433k viewers"/>
            </article>
            
            <article className="gameCard col-2 ">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-285x380.jpg"  gameName="Only Up!" isNew viewers="56.9k viewers"/>
            </article>
            
            <article className="gameCard col-2">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg" gameName="League of legends"isNew={false} viewers="313k viewers"/>
            </article>
            
            <article className="gameCard col-2 ">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"  gameName="VALORANT" viewers="125k viewers"/>
            </article>
            
            <article className="gameCard col-2">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"  gameName="Fortnite" isNew viewers="55.6k viewers"/>
            </article>
            
            <article className="gameCard col-2 ">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"  gameName="Minecraft" viewers="62.5k viewers"/>
            </article>
            
            <article className="gameCard col-2 ">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg"  gameName="Diablo IV" isNew viewers="117k viewers"/>
            </article>

            <article className="gameCard col-2 ">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg"  gameName="Overwatch 2" viewers="81.3k viewers"/>
            </article>

            <article className="gameCard col-2">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg"  gameName="Rust" isNew viewers="23.8k viewers"/>
            </article>

            <article className="gameCard col-2 ">
                <GameCardContainer imageLink="https://static-cdn.jtvnw.net/ttv-boxart/518203-285x380.jpg"  gameName="Sports" viewers="16.2k viewers"/>
            </article>


        </section>
        </div>
       
       
        </div>
        
        </>


    )
}
