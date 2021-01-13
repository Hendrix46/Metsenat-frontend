import React, {Component} from 'react';
import './home.css'
import bgImage from '../../home-bg.svg';
class Home extends Component {
    render() {
        return (
            <div id='home' className="text-center">
                <h1>ВЫ студент?</h1>
                <h3>Получите помощь от метсенатов</h3>
                <h4>Через этот портал студенты получают помощь от метсенатов</h4>
                <button className="btn btn-primary getHelp">Получить помошь</button>
                <button className="btn btn-outline-primary help ml-5">Помочь</button>
                <div className="bg" style={{backgroundImage:`url(${bgImage})` }}></div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;