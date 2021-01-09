import React, {Component} from 'react';
import SelfPhoto from "./imgs/owned/Self.png"
import SelfPhotoBackground from "./imgs/stock/PhotoBackground.jpg"
import {Link} from 'react-router-dom'
// Import materialize
import M from "materialize-css";

class NavBar extends Component{

    componentDidMount() {
        //Initialize everything for materialize.
        M.AutoInit();
    }
    render() {
        return(
            <>
            <a href="#!" data-target="slide-out" className="btn-floating pulse sidenav-trigger pink"><i className="material-icons">apps</i></a>
            <ul id="slide-out" className="sidenav z-depth-3">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={SelfPhotoBackground} alt="Caleb Gasser"></img>
                        </div>
                        <a href="#user"><img className="circle" src={SelfPhoto} alt="Profile background"></img></a>
                        <a href="#name"><span className="white-text name">Caleb Gasser</span></a>
                        <a href="#email"><span className="white-text email">calebgasser@gmail.com</span></a>
                    </div>
                </li>
                <Link to="/about"><li><a href="#!" className="waves-effect"><i className="material-icons left">account_box</i>About Me</a></li></Link>
                <Link to="/"><li><a href="#!" className="waves-effect"><i className="material-icons left">memory</i>Technology Experince</a></li></Link>
                <Link to="/"><li><a href="#!" className="waves-effect"><i className="material-icons left">work</i>Work Experince</a></li></Link>
                <Link to="/"><li><a href="#!" className="waves-effect"><i className="material-icons left">poll</i>Data API</a></li></Link>
                <li><div className="divider"></div></li>
                <Link to="/dataprojects"><li><a href="#!" className="waves-effect"><i className="material-icons left">storage</i>Data Projects</a></li></Link>
                <Link to="/"><li><a href="#!" className="waves-effect"><i className="material-icons left">games</i>Game Development Projects</a></li></Link>
            </ul>
          </>
        )
    }
}

export default NavBar;
