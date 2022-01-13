import React from 'react';
import logo from './user.png';

class RightSide extends React.Component {


    generalConfig = {
        profileImgStyle: { color: 'red', borderColor: 'green', maxHeight: '100px' }
    };

    state = {
        isUserLogged: false
    };


    render() {
        return (
            <div className="card border-primary"> 
                <h5 className="card-header">Your Profile</h5>
                <div className="d-flex flex-column justify-content-center align-items-center p-3">
                    <img src={logo} className="img-thumbnail m-1" style={this.generalConfig.profileImgStyle} alt="..." />
                    {this.state.isUserLogged
                        ? <p className="card-text">Hellow, Konrad!</p>
                        : <div className="mt-2"><button type="button" className="btn btn-outline-primary">Please, log in!</button></div>
                    }
                </div>
            </div>
        );
    }
};


export default RightSide;