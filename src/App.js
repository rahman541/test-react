import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({projects: [
            {
                title: 'Business website',
                category: 'Web design'
            },
            {
                title: 'Social App',
                category: 'Mobile Development',
            },
            {
                title: 'Ecommerce Shopping Cart',
                category: 'Web development',
            }
        ]});
    }

    render() {
        return (
            <div className="App">
                My App <br />
                <Projects projects={this.state.projects} />
            </div>
        );
    }
}

export default App;
