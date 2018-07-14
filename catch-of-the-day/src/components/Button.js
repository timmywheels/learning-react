import React from "react";

var styles = {
    orange: '#f90',
    white: "#fff"
};

        class Button extends React.Component {
            render() {
                return (
                    <button style={{backgroundColor: styles.orange, color: styles.white}}>Get Started</button>
                )
            }

}

export default Button;