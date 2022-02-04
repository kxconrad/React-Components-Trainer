import React from "react";

class Company extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customVerificator: "aaa"
        }
    }

    handleOnClick = () => {

        console.log("handle on click and update state");
        this.setState({ customVerificator: 5 });
        this.setState({ customVerificator: { 'abracadabra': 'dasdada' } });
    }

    render() {
        return (
            <div>
                {console.log("rendered component")}
                Hellow in company!
                {console.log("before handleClick: ", this.state)};
                <div className="btn btn-primary" onClick={this.handleOnClick}> click me to test</div>
                {console.log("after handleClick: ", this.state)};
            </div>
        );
    }
}

export default Company;