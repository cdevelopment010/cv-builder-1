import {React, Component} from "react";

class DocumentStyle extends Component {

    render() {
        return (
            <div className="inputSection">
                <h3>Document Style</h3>
                <div>
                    <div>
                        <label for="PrimColor">Primary  Color</label>
                        <select id="PrimColor" name="PrimColor">
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="grey">Grey</option>
                            <option value="green">Green</option>
                        </select>
                    </div>
                    <div>
                        <label for="TextColor">Text  Color</label>
                        <select id="TextColor" name="TextColor">
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="grey">Grey</option>
                        </select>
                    </div>
                    <div>
                        <label for="PFontSize">Paragraph Font Size</label>
                        <input type="number" id="PFontSize"/>
                    </div>
                    <div>
                        <label for="PFontStyle">Paragraph Font Style</label>
                        <select id="PFontStyle" name="PFontStyle">
                            <option value="bold">Bold</option>
                            <option value="italic">Italic</option>
                            <option value="underline">Underline</option>
                        </select>
                    </div>
                    <div>
                        <label for="HFontSize">Heading Font Size</label>
                        <input type="number" id="HFontSize"/>
                    </div>
                    <div>
                        <label for="HFontStyle">Heading Font Style</label>
                        <select id="HFontStyle" name="HFontStyle">
                            <option value="bold">Bold</option>
                            <option value="italic">Italic</option>
                            <option value="underline">Underline</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default DocumentStyle;