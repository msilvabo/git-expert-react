import GifItem from './GifItem';
import useFetchGifts from '../hooks/useFetchGifts';


const GifGrid = ({category}) => {

    const { images, isLoading} = useFetchGifts(category);

  return (
    <>
        <h2>{category}</h2>
        {
            isLoading && (<h2>... Loading</h2>)
        }
        
        <div className='card-grid'>
            {
                images.map(( image ) => ( 
                    <GifItem 
                        key={image.id}
                        {...image}
                        />
                ))
            }
        </div>
    </>
  )
}

export default GifGrid
