import React from 'react';
import Myexample2 from '../example2/myexample2';

class myexample extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        arrName: [
            {
                id: 1,
                first_name: 'Huy',
                last_name: 'Phan'
            },
            {
                id: 2,
                first_name: 'Han',
                last_name: 'Ly'
            },
            {
                id: 3,
                first_name: 'Dat',
                last_name: 'Tran'
            }
        ]
    };

    handleTypingFisrtName = (event) => {
        this.setState({
            first_name: event.target.value
        });
    };

    handleTypingLastName = (event) => {
        this.setState({
            last_name: event.target.value
        });
    };

    render() {
        // let name = 'Phan Duc Huy';

        return (
            <>
                <form>
                    <div className="form_layout">
                        <div class="mb-3">
                            <label for="inp-fisrt_name" class="form-label">
                                First Name
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="inp-fisrt_name"
                                aria-describedby="emailHelp"
                                onChange={(event) => {
                                    this.handleTypingFisrtName(event);
                                }}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="inp-last_name" class="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="inp-last_name"
                                onChange={(event) => {
                                    this.handleTypingLastName(event);
                                }}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    My full name is: {this.state['first_name']} {this.state['last_name']};
                </div>
                <Myexample2
                    firstName={this.state['first_name']}
                    lastName={this.state['last_name']}
                    arrName={this.state['arrName']}
                ></Myexample2>
            </>
        );
    }
}

export default myexample;
