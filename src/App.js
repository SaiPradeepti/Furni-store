import furnitureList from './furnitureList'
import Furniture from './Furniture'
import {useState} from 'react'

function App() {
  const [loading,setLoading] = useState(true);

  const loadingTime = () => {
    setTimeout(() => {
            setLoading(false);
          },3000);
  }

  if(loading){
    return (
      <div className="mainLoading">
        <div className="loading">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>    
        {
          loadingTime()
        }
      </div>
    );
  }

  return (
    <div className="main">
      <header>
        <div className="title">Furni Store</div>
      </header>
      <div className="container">
      {
        furnitureList.map(item => {
          return <Furniture key={item.id} {...item} />
        })
      }
    </div>
    </div>
  );
}

export default App;
