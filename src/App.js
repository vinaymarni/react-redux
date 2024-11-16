import './App.css';
import {Provider} from "react-redux";

import { store } from './redux/store';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import FormContainer from './biodata/FormContainer';
import BasicDataForm from './jotai/BasicDataForm';

const isState = "jotai" // "redux" or "jotai"

function App() {
  return (
    <>
      {isState === "jotai" ?
      <BasicDataForm />
      :    
      <Provider store={store} >
          <div className="App">
          {/* passing Props */}
            {/* <ItemContainer iceCream/>
            <ItemContainer cake /> */}
            {/* <UserContainer /> */}
    
            <FormContainer />
          </div>
      </Provider>
      }
    </>
  )
};

export default App;
