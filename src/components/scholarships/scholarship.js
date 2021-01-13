import React, {Component} from 'react';
import './scholarship.css'
const data1=[
    {
        id:1,
        metsenat:'OOO October22',
        region:'Toshkent, Samarqand',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:2,
        metsenat:'OOO October22',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:3,
        metsenat:'OOO October22',
        region:'Qoraqalpogʻiston, Xorazm, Buxoro, Qashqadaryo',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
    {
        id:4,
        metsenat:'OOO October22',
        region:'Toshkent, Samarqand',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:5,
        metsenat:'OOO October22',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:6,
        metsenat:'OOO October22',
        region:'Qoraqalpogʻiston, Xorazm, Buxoro, Qashqadaryo',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
    {
        id:7,
        metsenat:'OOO October22',
        region:'Toshkent, Samarqand',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:8,
        metsenat:'OOO October22',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:9,
        metsenat:'OOO October22',
        region:'Qoraqalpogʻiston, Xorazm, Buxoro, Qashqadaryo',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
    {
        id:10,
        metsenat:'OOO October20',
        region:'Samarqand',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:11,
        metsenat:'OOO October220',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:12,
        metsenat:'OOO October220',
        region:'Xorazm, Buxoro, Qashqadaryo',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
];
const data2=[
    {
        id:1,
        metsenat:'OOO October20',
        region:'Toshkent, Samarqand',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:2,
        metsenat:'OOO October20',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:3,
        metsenat:'OOO October20',
        region:'Qoraqalpogʻiston, Xorazm',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
    {
        id:4,
        metsenat:'OOO October20',
        region:'Toshkent',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:5,
        metsenat:'OOO October20',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:6,
        metsenat:'OOO October20',
        region:'Buxoro, Qashqadaryo',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
    {
        id:7,
        metsenat:'OOO October20',
        region:'Samarqand',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:8,
        metsenat:'OOO October220',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:9,
        metsenat:'OOO October220',
        region:'Xorazm, Buxoro, Qashqadaryo',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
    {
        id:10,
        metsenat:'OOO October20',
        region:'Samarqand',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 1,
        stipendiya: 1,
        deadline:'2020-09-24 '
    },
    {
        id:11,
        metsenat:'OOO October220',
        region:'Qoraqalpogʻiston',
        otm:'inha',
        yonalish:'Aniq Fanlar',
        kurs: 4,
        stipendiya: 300000,
        deadline:'2020-09-30'
    },
    {
        id:12,
        metsenat:'OOO October220',
        region:'Xorazm, Buxoro, Qashqadaryo',
        otm:'Toshkent Moliya Instituti, JAHON TILLARI UNIVERSITETI',
        yonalish:'ANIQ FANLAR, Mashinasozlik',
        kurs: 12,
        stipendiya: 1,
        deadline:'2020-09-09  '
    },
];
class Scholarship extends Component {
    constructor(props) {
        super(props);
        this.state={
            togglevalue: false,
            data: data1
        }
    }

    handlechange=(e)=>{
        this.setState({
            togglevalue: !this.state.togglevalue
        });

        if (this.state.togglevalue){
            this.setState({data: data1})
        }
        else {
            this.setState({data:data2});
        }
    };
    render() {
        const {data}= this.state;
        return (
            <div id="scholar">
                <div className="offset-1 med" >
                    <div className="pt-5" >
                        <span className="grant" onClick={this.handlechange}>Гранты</span>
                        <span className="stp ml-3" onClick={this.handlechange}>Стипендии</span>
                        <span className="new float-right mr-5">
                            <button className="btn">+ Добавить новый</button>
                        </span>
                    </div>
                    <table className="tab mr-5">
                        <thead>
                        <tr>
                            <th>МЕТСЕНАТ</th>
                            <th>РЕГИОН</th>
                            <th>ОТМ</th>
                            <th>НАПРАВЛЕНИЕ</th>
                            <th>КУРС</th>
                            <th>ОБШАЯ СТИПЕНДИЯ</th>
                            <th>СРОК ЗДАЧИ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item,id)=>(
                            <tr className="data" key={item.id}>
                                <td className="pl-3">{item.metsenat}</td>
                                <td>{item.region}</td>
                                <td>{item.otm}</td>
                                <td>{item.yonalish}</td>
                                <td>{item.kurs}</td>
                                <td>{item.stipendiya}</td>
                                <td className="pr-3">{item.deadline}</td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                    <nav className="text-center">
                        <ul className="pagination offset-10">
                            <li className="page-item ">
                                <a className="page-link bg-transparent">&laquo;</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link bg-transparent" href="#">2</a></li>
                            <li className="page-item">
                                <a className="page-link bg-transparent" >&raquo;</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

Scholarship.propTypes = {};

export default Scholarship;