import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {

    return (
        <div>
            <NumberOfStudents1 />
            <NumberOfStudents2 />
        </div>
    )
}

class NumberOfStudents1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 87,
            addStudents: 0,
        };
    }

    Increment() {
        this.setState({ enrolledStudents: this.state.enrolledStudents + 1 });
    };

    Addition() {
        this.setState({ enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addStudents) });
    };

    render() {
        return (
            <div>
                <h1> Enrolled Students: {this.state.enrolledStudents} </h1>
                <button onClick={this.Increment.bind(this)}>
                    Add 1 Enrolled Student
                </button>
                <h3> Add Multiple Enrolled Students </h3>
                <input type="number" onChange={event => this.setState({ addStudents: event.target.value })} value={this.state.addStudents} />
                <button onClick={this.Addition.bind(this)}>
                    Increase Students
                </button>
            </div>
        );
    }
};

class NumberOfStudents2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            waitListedStudents: 8,
            addStudents: 0,
        };
    }

    Increment() {
        this.setState({ waitListedStudents: this.state.waitListedStudents + 1 });
    };

    Addition() {
        this.setState({ waitListedStudents: this.state.waitListedStudents + parseInt(this.state.addStudents) });
    };

    render() {
        return (
            <div>
                <h1> WaitListed Students: {this.state.waitListedStudents} </h1>
                <button onClick={this.Increment.bind(this)}>
                    Add 1 WaitListtudent
                </button>
                <h3> Add Multiple WaitListed Students </h3>
                <input type="number" onChange={event => this.setState({ addStudents: event.target.value })} value={this.state.addStudents} />
                <button onClick={this.Addition.bind(this)}>
                    Increase Students
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
