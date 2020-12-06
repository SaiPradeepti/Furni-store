import furnitureList from './furnitureList'
import Furniture from './Furniture'

function App() {  
  return (
    <div className="App">
      {
        furnitureList.map(item => {
          return <Furniture key={item.id} {...item} />
        })
      }
    </div>
  );
}

export default App;
