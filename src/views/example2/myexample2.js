import React from 'react';

class myexample2 extends React.Component {
    render() {
        return (
            <>
                <div>
                    My name is 2 : {this.props.firstName} {this.props.lastName}
                </div>
                <div>
                    {this.props.arrName.map((person, index) => {
                        return (
                            <div key={person.id}>
                                {person.last_name} - {person.first_name}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default myexample2;
