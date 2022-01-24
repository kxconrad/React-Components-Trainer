import React from 'react';

class TaskList extends React.Component {


    render() {
        console.log("items: ", this.props.responseDataList);

        const elements = this.props.responseDataList.map(({ id, createdAt, ownerId }) => {
            console.log("single item: ", id);
            return <li className="list-group-item shadow rounded mb-4" key={id}>
                <span>id: {id}</span><br />
                <span>createdAt: {createdAt}</span><br />
                <span>ownerId: {ownerId}</span>
            </li>;
        });

        return (
            <div className="w-100 bg-light d-flex align-items-center" >
                <ul className="list-group">
                    {elements}
                </ul>
            </div>
        );
    }
};


export default TaskList;