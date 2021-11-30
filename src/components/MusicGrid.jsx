import React, {useState,useEffect} from 'react'
import { MusicGridItem } from './MusicGridItem';

export const MusicGrid = ({category}) => {

    const [MusicInfo, setMusicInfo] = useState([]);

    useEffect(() =>{
        getMusic();
    }, [category])

    const getMusic = async() =>{
        const resp = await fetch(`https://genius.p.rapidapi.com/search?q=${encodeURI(category)}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "genius.p.rapidapi.com",
                    "x-rapidapi-key": "634f32e93fmsh084184834fbb8f5p1f6761jsn774df2b2397d"
                }
            });
            const {response}  = await resp.json();
            
            const music = response.hits.map( data => {
                return {
                    id: data.result.id,
                    title: data.result.title,
                    artist: data.result.primary_artist.name,
                    details: data.result.url,
                    url: data.result.header_image_url
                }
            })
            setMusicInfo(music);
        }
       
    return (
        <>
        <h4>{category}</h4>
        <div className="news-cards animate__fadeInLeft">
            
                {
                    MusicInfo.map( data => (
                        <MusicGridItem 
                            key={data.id}
                            {...data}
                        />
                    ))
                }
            
        </div>
        </>
    )
}
