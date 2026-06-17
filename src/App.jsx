import './App.css'

function App() {
  const name = 'Nazar'

  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mercedes-Benz_W206_IMG_6380.jpg/3840px-Mercedes-Benz_W206_IMG_6380.jpg'
  const altImage = 'car top'
  const favoriteWeb = {google: "Google", url: "https://www.google.com/"}

  const num1 = 5
  const num2 = 10
  const sum = num1 + num2
  const color = ["Червоний", "Синій", "Зелений"]

  return (
    <>
    <h1>{name}</h1>
    <p>Ласкаво просимо до нашого сайту!</p>
    <img className='img' src={imageUrl} alt={altImage} />
    <a href={favoriteWeb.url} target='_blank'>{favoriteWeb.google}</a>
    <p>{num1} + {num2} = {sum}</p>
    <ul>
        {
        color.map((e, i) => {
          return (<li key={i}><p>{e}</p></li>)
        })
        }
    </ul>
    </> 
  )
}

export default App
