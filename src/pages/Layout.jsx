import { useState } from 'react'
import { Outlet } from 'react-router'
import Dropdown from '../components/Dropdown'
import Attribution from '../components/Attribution'
import '../styles/Layout.css'

const Layout = () => {
  const [state, setState] = useState([]);

  const handleChange = (event) => {
    if (!event) {
      setState([])
    } else {
      const value = event.target.value;
      state.includes(value)
        ? setState((prevState) => prevState.filter(item => item !== value))
        : setState((prevState) => [...prevState, value]);
    }
  };

  return (
    <>
      <header className='header flex__row between'>
        <h1>Our Jobs</h1>
        <Dropdown eventHandler={ handleChange } />
      </header>
      <Outlet context={state} />
      <footer className='footer'>
        <Attribution />
      </footer>
    </>
  );
}

export default Layout;