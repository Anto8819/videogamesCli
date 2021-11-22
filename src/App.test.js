import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'
import React from 'react';
import {BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import NavBar from './components/NavBar/NavBar';

// import { Provider } from "react-redux";
// import store from "./store/index";
const path='/videogames'


test('renders Create VideoGame link', () => {
  render(<BrowserRouter>
           <App/>
          </BrowserRouter>      
    );
  const linkElement = screen.getByText(/start now/i);
  expect(linkElement).toBeInTheDocument();

});

test('renders welcom', () => {
  render(<BrowserRouter>
           <App/>
          </BrowserRouter>
    );
  const linkElement = screen.getByText(/welcome to/i);
  expect(linkElement).toBeInTheDocument();

});


test("Nav - successfully direct to create new game", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
   <Router history={history}>
    <NavBar/>
   </Router>
  );
  
  fireEvent.click(getByText(/Create New Game/i));
 
  expect(history.location.pathname).toBe("/videogames/add-videogame");
 });

 test("Nav - successfully direct to homePage", () => {
  const history = createMemoryHistory();
  // const { getByText } = 
  render(
   <Router history={history}>
    <NavBar/>
   </Router>
  );
  
  fireEvent.click(screen.getByText(/videogames finder app/i));
 
  expect(history.location.pathname).toBe("/videogames");
 });
