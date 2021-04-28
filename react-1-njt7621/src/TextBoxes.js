// //Holds the text boxes and the more/less button
import React from 'react';

class TextBoxes extends React.Component {
    constructor() {
        super();
        this.state = {
          textAreaValue: "Once upon a midnight dreary, while I pondered, weak and weary,\nOver many a quaint and curious volume of forgotten lore — \nWhile I nodded, nearly napping, suddenly there came a tapping, \nAs of someone gently rapping, rapping at my chamber door.\nTis some visitor, I muttered, tapping at my chamber door \n — Only this and nothing more.",
          textAreaValue2: "Ah, distinctly I remember it was in the bleak December; \nAnd each separate dying ember wrought its ghost upon the floor.\nEagerly I wished the morrow;\n—vainly I had sought to borrow From my books surcease of sorrow\n—sorrow for the lost Lenore \n For the rare and radiant maiden whom the angels name Lenore \n   —Nameless here forevermore."
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
      }

    toggleButton() {
        let hiddenBox = document.getElementById('hiddenBox')
        let btn = document.getElementById('button')

        if (btn.innerText === "More..."){
            hiddenBox.style.display = "block";
            btn.innerText = "Less...";
        }else{
            btn.innerText = "More...";
            hiddenBox.style.display = "none";
        }
    }

    render() {
        return (
          <div>"
                <textarea name="textarea" id="shownBox" value={this.state.textAreaValue}> 
                </textarea>
    
                <button onClick= {this.toggleButton} id="button">More...</button>

                <textarea name="textarea2" id="hiddenBox" value={this.state.textAreaValue2}> 
                </textarea>
          </div>
        );
    }
}
export default TextBoxes;
