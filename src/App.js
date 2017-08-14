import React, {Component} from 'react';
import MainHeader from './header';
import Grid from './grid'
// import Gallery from './gallery'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainHeader />
                <Grid />
            </div>
        );
    }
}


export default App;
