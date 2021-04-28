//Holds all the code the Title, Subtitle
import React from 'react';

class Headings extends React.Component {
    render() {
      return (
        <header> 
            <div className = "Header"> 
              <h1 className = "Title">
            SWEN 344 Web Assignment 1
              </h1>
              <h1 className= "Subtitle">
                Section 01
              </h1>
            </div>
          
        
        </header>
      );
    }
  }

  export default Headings;