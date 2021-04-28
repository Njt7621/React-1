import logo from './ritchie_logo.png';
import React from 'react';

class Logo extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            showPopup: false 
        };
    }
   
    togglePopup() {
        this.setState((currentState) => ({
          showPopup: !this.state.showPopup
        }));
      }

    render(){
        return(
            <header className="popup">
                <img src={logo} className="popup_logo" alt="logo"
                style={{width: 85, height: 85}} onClick={() => alert('Roar!')}>
                </img>
                {this.state.showPopup }
            </header>
        );
    }
}
  
  export default Logo;
