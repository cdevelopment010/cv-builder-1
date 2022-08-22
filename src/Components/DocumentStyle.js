import {React, Component} from "react";

class DocumentStyle extends Component {

    constructor() {
        super();
        this.updatePrimCol = this.updatePrimCol.bind(this);
        this.updateHeaderCol = this.updateHeaderCol.bind(this);
        this.updateTextCol = this.updateTextCol.bind(this);
    }


    updatePrimCol( e ) {
        let r = document.querySelector(':root');
        r.style.setProperty('--primary-color', e.target.value);
    }
    updateHeaderCol( e ) {
        let r = document.querySelector(':root');
        r.style.setProperty('--header-color', e.target.value);
    }
    updateTextCol( e ) {
        let r = document.querySelector(':root');
        r.style.setProperty('--text-color', e.target.value);
    }

    render() {
        return (
            <div className="inputSection">
                <h3>Document Style</h3>
                <div className="grid-2-col">
                    <div className="d-input">
                        <label htmlFor="PrimColor">Primary Color</label>
                        <input type="color" onChange={this.updatePrimCol}/>
                    </div>
                    <div className="d-input">
                        <label htmlFor="headerCol">Header Text Color</label>
                        <input type="color" onChange={this.updateHeaderCol}/>
                    </div>
                    <div className="d-input">
                        <label htmlFor="TextColor">Paragraph Color</label>
                        <input type="color" onChange={this.updateTextCol}/>
                    </div>
                    <div className="d-input">
                        <label htmlFor="PFontSize">Paragraph Font Size</label>
                        <input type="number" id="PFontSize"/>
                    </div>
                    <div className="d-input">
                        <label htmlFor="PFontStyle">Paragraph Font Style</label>
                        <select id="PFontStyle" name="PFontStyle">
                            <option value="bold">Bold</option>
                            <option value="italic">Italic</option>
                            <option value="underline">Underline</option>
                        </select>
                    </div>
                    <div className="d-input">
                        <label htmlFor="HFontSize">Section Font Size</label>
                        <input type="number" id="HFontSize"/>
                    </div>
                    <div className="d-input">
                        <label htmlFor="HFontStyle">Section Font Style</label>
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