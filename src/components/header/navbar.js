import React, {Component} from 'react';
import './navbar.css';
import $ from 'jquery'

class Navbar extends Component {

    render() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            // console.log(scroll);

            if (scroll >= 100) {
                $(".navbar").addClass("navbar-scroll");
            } else {
                $(".navbar").removeClass("navbar-scroll");
            }

        });
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light offset-1">
                    <a className="navbar-brand" href="#home">Metsenat <span>.</span></a>
                    <div className="navbar offset-5">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scholar"> Гранты</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#uz">O'zbek</a>
                            </li>
                            <li className="nav-item">
                                    <button className="btn btn-outline-primary reg">Зарегистрироватся</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}



export default Navbar;