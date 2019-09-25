import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        {/*<Route path="/dialogs" component={Dialogs}/>*/}
                        <Route path="/dialogs" render={()=> <DialogsContainer />}/>
                        {/*<Route path="/profile" component={Profile}/>*/}
                        <Route path="/profile/:userId?" render={()=> <ProfileContainer />}/>
                        <Route path="/users" render={()=> <UsersContainer/>}/>
                        <Route path="/login" render={()=><LoginPage/>}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
