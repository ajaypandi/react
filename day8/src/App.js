
import './App.css';
import ErrorBoundary from './component/ErrorBoundary';
import Hero from './component/Hero';
import TryCatch from './component/TryCatch';
import ComponentLifeCycle from './component/ComponentLifeCycle';
import LifecycleFunctional from './component/LifecycleFunctional';

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
    <Hero heroName='Joker'></Hero>
    </ErrorBoundary>
  <TryCatch fruit='Onion'></TryCatch>
    <ComponentLifeCycle></ComponentLifeCycle>
    <LifecycleFunctional></LifecycleFunctional>
    </div>
  );
}

export default App;