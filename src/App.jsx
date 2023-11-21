import './App.css';

function App(props) {
  // code here
const elephantImage = props.myData();
return(
  <>
  <h1 className='name'>Kalvium Gallery</h1>
  <div className='photo'>
    {elephantImage.map((item)=> {
      return (
          <img key={item.id} src={item.img} alt="elephant" />
      )
    })}
  </div>
  </>
)
}

export default App;
