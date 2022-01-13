import React from 'react';
import TopBar from './topbar/TopBar';
import TaskList from './mainContent/TaskList';

class OutsideRequester extends React.Component {

    state = {
        responseDataList: []
    }


    responseDataListReady = (responseDataList) => {
        this.setState({ responseDataList: responseDataList });
    }

    render() {
        return (
            <div>
                <TopBar responseDataListReady={this.responseDataListReady} />
                <TaskList responseDataList={this.state.responseDataList} />
            </div>
        );

    }
};


export default OutsideRequester;