import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component{
  static contextType = LanguageContext;

    render(){
        const language = this.context.language === 'english' ? 'Select a language:' : 'Pasirinkti kalba:';
        return(
        <div>
          {language} <br />
          <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
          <i className="flag lt" onClick={() => this.context.onLanguageChange('lithuanian')} />
        </div>
        );
    }
}

export default LanguageSelector;