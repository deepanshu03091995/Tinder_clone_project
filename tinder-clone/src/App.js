import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chats from './Chats';

import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className="app">
      
      {/**HEADER */}
      
      <Router>
        
        
        <Switch>
        <Route path="/chat/:person">
          <Header backButton='/chat'/>
          <ChatScreen/>
          </Route>  
       
       
       
        <Route path="/chats">
          <Header backButton='/'/>
          <Chats/>
          </Route>  
          
        <Route path="/">
          <Header/>
           <TinderCards/>
           <SwipeButtons/>
          </Route>  
          
          </Switch>
             
      
      
      </Router>

      {/**TINDER CARDS */}
     
      {/**SWIPE BUTTONS */}
      
    </div>
  );
}

export default App;
