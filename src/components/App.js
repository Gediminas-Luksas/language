import React from 'react';
import UserCreate from './UserCreate';
import { LanguageState } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';


class App extends React.Component {

  render(){
    return (
      <div className="ui container">
      <LanguageState>
          <LanguageSelector />
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
        </LanguageState>
      </div>
    );
  }
}

export default App;
