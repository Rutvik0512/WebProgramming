import React from 'react';
import FunctionComponent from './Header';
import DataBinding from './DataBinding';
import { StateManagement } from './StateManagement';
import './App.css';
import { ClassComponent } from './ClassComponent';


function App() {
  return (
    <div>
      <FunctionComponent/>
      <ClassComponent/>
      <DataBinding name='Rutvik'/>
      <StateManagement />
    
    </div>
    
  );
}

export default App;
