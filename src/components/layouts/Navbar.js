import React from 'react';
// import logo from '../../logo.svg';
import logo2 from '../../Logo-ZapNews.png';

// Après avoir installé le router, on mentionne ici l'import de Link, puis on change les href en balises Link et on mentionne les path des pages, par exemple to="/home"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light mt-5" style={{ backgroundColor: '#1D233D', zIndex :'0'}}>

  <Link className="navbar-brand text-white ml-5" to="/" style={ { fontFamily: 'Bangers, cursive', fontSize: '40px'} }>
      ZAPNEWS&nbsp;
        <img src={logo2} alt="logo" style={{ width:'45px' }}/>
  </Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span>
      <i className="fas fa-bars" style={{ color:'#fff' }} />
    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">

      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-3" to="/">Home&nbsp; <i className="fas fa-home"></i><span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ml-3" to="/news">News</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ml-3" to="/contacts">Contact-Us</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ml-3" to="/apinews">Api-News</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ml-3" to="/apimapnews">Api-Map-News</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ml-3" to="/apinewsloops">Api-News-Loops</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ml-3" to="/apitest">Api-Test</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white ml-3" to="/museum-blog">Museum-Blog</Link>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}

export default Navbar;