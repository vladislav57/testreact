import React from "react";
import ReactDom from "react-dom";

class RenderForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.name;
        return (
           <div>
             <p>Enter your name</p>
             <p>Here</p>
             <p><input value={name} onChange={this.props.onNameChange} /></p>
             <button onClick={this.props.onClick}>Change name</button>
           </div>
        );
    }
}

function RenderGreeting(props) {
    return <div><p>Hello, {props.name}</p></div>;
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {authorized: false, name: 'Stranger'};
        this.handleClick = this.handleClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    handleClick() {
        this.setState({authorized: true});
    }

    onNameChange(e) {
        this.setState({name: 'dinamic2'});
    }

    render() {
        if (this.state.authorized) {
            return <RenderGreeting name={this.state.name} />;
        } else {
            return <RenderForm onClick={this.handleClick} onNameChange={this.onNameChange} />;
        }
    }
}

ReactDom.render(
    <App />,
    document.getElementById('react')
);