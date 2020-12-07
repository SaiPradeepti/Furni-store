import furnitureList from './furnitureList'
import Furniture from './Furniture'

function App() {  
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
