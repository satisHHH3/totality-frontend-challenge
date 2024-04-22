import { useState } from 'react';

import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Home from "./components/Home"
import RoomDetails from "./components/RoomDetails"

import BookingContext from './context/BookingContext'


import './App.css';

function App() {
  const [bookList,setBookList] = useState([])
  return (
    <BookingContext.Provider value={{bookList}}>
    <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/room-details" component={RoomDetails} />
    </Switch>
    </BrowserRouter>
    </BookingContext.Provider>
  );
}

export default App;
