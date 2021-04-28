// //Holds the pull-down menu and the radio buttons
import React from 'react';

class Controls extends React.Component {

  fontChange() {
    let hiddenBox = document.getElementById('hiddenBox')
    let shownBox = document.getElementById('shownBox')

    let fontFam = document.getElementById('font') 

    let font = fontFam.options[fontFam.selectedIndex].value;
    if (font === "Gothic"){
        font = "Century Gothic, CenturyGothic, AppleGothic, sans-serif"
    }
    hiddenBox.style.fontFamily = font;
    shownBox.style.fontFamily = font;
  }

  colorChange(x) {
    let hiddenBox = document.getElementById('hiddenBox')
    let shownBox = document.getElementById('shownBox')

    let color = x.target.value;
    hiddenBox.style.color = color;
    shownBox.style.color = color;
  }

  render() {
    return (
      <div>
        <div id="fonts">
          <label for="font" >Fonts</label>

          <select onChange= {this.fontChange} name= "font" id= "font"> 
          <option value= "Verdana">Verdana</option>
          <option value= "Arial">Arial</option>
          <option value= "Times">Times</option>
          <option value= "Gothic">Gothic</option>
          <option value= "Impact">Impact</option>
          </select>
        </div>

        <div id="colors" onChange={this.colorChange}>
          <label class="colorTag" for="color">Colors</label>

          <input type="radio" id="Black" name="color" value="Black"/>
          <label for="Black">Black</label><br/>
          <input type="radio" id="Red" name="color" value="Red"/>
          <label for="Red">Red</label><br/>
          <input type="radio" id="Green" name="color" value="Green"/>
          <label for="Green">Green</label><br/>
          <input type="radio" id="Blue" name="color" value="Blue"/>
          <label for="Blue">Blue</label>
        </div>
      </div>
      );
    }
  }

export default Controls;


    