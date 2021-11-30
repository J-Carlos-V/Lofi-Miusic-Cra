import React from 'react';
import showcaseImg from '../assets/img/showcase2.jpg';
import { MusicGrid } from '../components/MusicGrid';

const styles = {
    container: {
        backgroundImage: `url(${showcaseImg})`,
        backgroundPosition: 'center/cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }
};


const Home = ({setCategories, Categories}) => {


    //const [Categories, setCategories] = useState(['initialState','ssas']);
    //const handleAdd = () => {
      //  setcategories(['hunter', ...categories]);
    //}

    return (
        <>
            
            <hr/> 
            <header className='showcase' style = {styles.container}>
                
                <h2>Lo más reciente</h2>
                <p>Lo-fi hip hop o chillhop es una forma de downtempo que combina elementos de hip hop y música chill-out. Se popularizó en la década de 2010 en YouTube.</p>
            </header>
            
                {
                    Categories.map(category => {
                        return <MusicGrid 
                            key={category}
                            category={category}
                        />
                    })
                }
            
        </>
    );
}

export default Home;
