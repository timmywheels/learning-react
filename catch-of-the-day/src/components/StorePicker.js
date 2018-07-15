import React from "react";
import { getFunName } from './../helpers';

class StorePicker extends React.Component {
    // Create input ref
    myInput = React.createRef();

    goToStore = (e) => {
        // Stop form from submitting
        e.preventDefault();
        // Get the text from store input
        const storeName = this.myInput.value.value;
        // Change page to store/USER_INPUT
        this.props.history.push(`/store/${storeName}`)


    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;