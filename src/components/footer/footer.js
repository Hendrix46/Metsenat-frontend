import React from "react";
import './footer.css';
import logo from '../../logo-white.117a675.svg';

function Footer(){

    return(
        <div id="footer">
            <div className="navs offset-1 mt-5">
                <h2>Metsenat</h2>
                <ul>
                    <li>Главная</li>
                    <li>Налоговые учеты</li>
                    <li>Условия эксплуатации</li>
                    <li>Политика конфиденциальности</li>
                </ul>
            </div>
            <span className="logo offset-1">
                <img src={logo} width="200" height="100" alt="pmlogo"/>
                <span>Проект разработан компанией
                    Project Managers</span>
            </span>
            <div className='txt'>
                Материалы, опубликованные на сайте «metsenat.uz»,
                могут быть скопированы, распространены и использованы
                в других формах только со ссылкой на сайт metsenat.uz.
            </div>
        </div>
    )
}
export default Footer;