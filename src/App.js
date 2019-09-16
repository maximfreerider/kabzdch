import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        {/*<Route path="/dialogs" component={Dialogs}/>*/}
                        <Route path="/dialogs" render={()=> <DialogsContainer />}/>
                        {/*<Route path="/profile" component={Profile}/>*/}
                        <Route path="/profile" render={()=> <Profile />}/>
                        <Route path="/users" render={()=> <UsersContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
