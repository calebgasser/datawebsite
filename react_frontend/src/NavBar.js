import React, {Component} from 'react';
import SelfPhoto from "./imgs/owned/Self.png"
import SelfPhotoBackground from "./imgs/stock/PhotoBackground.jpg"

// Import materialize
import M from "materialize-css";

class NavBar extends Component{

    componentDidMount() {
        //Initialize everything.
        M.AutoInit();
    }
    render() {
        return(
            <>
            <a href="#!" data-target="slide-out" class="btn-floating pulse sidenav-trigger"><i class="material-icons medium">apps</i></a>
          <ul id="slide-out" class="sidenav">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src={SelfPhotoBackground}></img>
                    </div>
                    <a href="#user"><img class="circle" src={SelfPhoto}></img></a>
                    <a href="#name"><span class="white-text name">Caleb Gasser</span></a>
                    <a href="#email"><span class="white-text email">calebgasser@gmail.com</span></a>
                </div>
            </li>
            <li><a href="#!"><i class="material-icons waves-effect right">account_box</i>About Me</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div class="divider"></div></li>
            <li><a class="subheader">Subheader</a></li>
            <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        {/*
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        */}
          </>
        )
    }
}

export default NavBar;
