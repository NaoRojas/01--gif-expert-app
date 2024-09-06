import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <div style={{ display: 'flex' }}>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && (
        <div className="column-container">
          <h3>{category}</h3>
          <div style={{ display: 'flex' }}>
            {gifs.length &&
              gifs.map((gif) => {
                return (
                  <div key={gif.id} className="gif-container">
                    <span className="gif-title">{gif.title}</span>
                    <img className="gif-image" src={gif.url}></img>
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}
