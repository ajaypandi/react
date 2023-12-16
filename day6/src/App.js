import KeyList from "./componenets/KeyList.js"
import List1 from "./componenets/List1.js"
import ObjectList from "./componenets/ObjectList.js"
import Display from "./componenets/PropsList.js"
import BasicButtons from "./componenets/Ui.js"

 function App() 
 {
   return (
    <div>
     <List1></List1>
     <KeyList/>
     <Display/>
     <ObjectList/>
     <BasicButtons></BasicButtons>
    </div>
  )
}
 
export default App;