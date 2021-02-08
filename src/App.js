import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from './global/content';
import AppHeader from './components/appHeader/appHeader';
import AppFooter from './components/appFooter/appFooter';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const {children} = this.props;
        return (
            <div className="App mt-5">
                <div className="header-section">
                    <div className='container '>
                        <div className={"ml-5"}>
                            <AppHeader/>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <Content body={children}/>
                </div>
                <div className="footer-section">
                    <div className='container '>
                        <div className={"ml-5"}>
                            <AppFooter/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
