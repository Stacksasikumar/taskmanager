import PropTypes from "prop-types";
import { Button } from "./Button";
import { useLocation } from 'react-router-dom'

export const Header = ({title,onAdd,ShowAddTask}) => {
  const location = useLocation()
  return (
    <header className='header'>
    <h1 style={{color: '#723249'}}> {title}</h1>
    {location.pathname === '/' && 
   <Button 
   btncolor={ShowAddTask ? 'red' : 'green' }
   btnname={ShowAddTask ? 'Close' : 'Add' } 
   OnAdd={onAdd} />}
    </header>
  )
}

Headers.defaultProps={
    title:'Task Tracker',
}
Header.prototypes={

    title:PropTypes.string.isRequired,
}

export default Header