//navigation bar
import { Link } from 'react-router-dom'

function NavBar(){
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/booking'>Book Consultation</Link>
        <Link to='/buyMeds'>Buy medicine</Link>
      </nav>
    )
}

export default NavBar;