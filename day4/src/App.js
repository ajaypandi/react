
import './App.css';
import ArrowFun from './props/ArrowFun';
import DefaultProps from './props/DefaultProps';
import Dynammicrending from './props/Dynammicrendering';
import Notprops from './props/Notprops';
import StateHoldObject from './props/StateHoldObject';
import Class from './props/class';
import ClassReplace from './props/classReplace';
import PropsFunctional from './props/function';
import Parent from './props/parentchild';
import TwoWayBindind from './props/twowayBinding';


function App() {
  return (
    <div className="App">
      <PropsFunctional name="ajay"></PropsFunctional>
    <Class clg="skct" cls="it"></Class>
    <ArrowFun name="surendiran" fullname="b.surendiran"></ArrowFun>
    <ClassReplace></ClassReplace>
    <StateHoldObject></StateHoldObject>
    <Parent></Parent>
     <TwoWayBindind></TwoWayBindind>
     <DefaultProps></DefaultProps>
     <Dynammicrending></Dynammicrending>
     <Notprops favTeam="RCB" favsport={"Cricket"}></Notprops>
      
    </div>
  );
}

export default App;
