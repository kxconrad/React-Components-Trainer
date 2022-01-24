import React from 'react';
import getShoppingOpenData from '../../../../api/shoppingListApi';
import Button from '../../../general/element/Button';

class CenterSide extends React.Component {

    componentDetails = {
        statusRendering: 'Rendering...',
        statusInitial: 'Your data is not requested yet. Click buttom below',
        statusRendered: 'Data rendered correctly',
        statusError: 'Something went wrong, sorry try later'
    };

    state = {
        requestingStatus: this.componentDetails.statusInitial
    }

    onClickGetData = async () => {
        console.log("button clicked!");

        const responseDataListReady = this.props.responseDataListReady;

        this.setState({ requestingStatus: this.componentDetails.statusRendering });

        const response = await getShoppingOpenData();

        console.log("response: ", response);
        if (response.data && response.data.tasks) {

            this.setState({ requestingStatus: this.componentDetails.statusRendered });
            responseDataListReady(response.data.tasks);
        }
        else {
            this.setState({ requestingStatus: this.componentDetails.statusError });
        }

    }

    render() {

        return (
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">Get your content from server</h5>
                    <p className="card-text">{this.state.requestingStatus}</p>
                    <Button text="render" actionHandler={this.onClickGetData} />
                </div>
            </div>
        );
    }
};


export default CenterSide;