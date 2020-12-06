import furnitureList from './furnitureList'
import Furniture from './Furniture'

function App() {  
  return (
    <div className="App bg-blue-500 grid grid-cols-3 gap-4">
      {
        furnitureList.map(item => {
          return <Furniture key={item.id} {...item} />
        })
      }
    </div>
  );
}

export default App;
