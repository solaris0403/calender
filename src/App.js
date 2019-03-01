import React, {Component} from 'react';
import './App.css';
import moment from 'moment';
import 'moment/locale/zh-cn';

let weekConst = ['星期日', '星期一', '星期三', '星期四', '星期五', '星期六'];

class App extends Component {
    constructor(props) {
        super(props);
        moment().locale('zh-cn');
        this.state = {
            realTime: moment()//实时时间
        }
    }

    componentDidMount() {
        // this.timeID = setInterval(() => {
        //     this.setState({
        //         realTime: moment()
        //     });
        // }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    calculate() {
        let list = [];
        let days = moment().daysInMonth();//当前月份总共天数
        let weekOfFirstDay = moment().date(1).day();//得到当前月份第一天的星期值,也是第一行需要显示上个月几天
        let weekOfLastDay = moment().date(days).day();//得到当前月份最后一天的星期值,也是最后一行下个月要显示(6-n)天
        for (let i = weekOfFirstDay; i >= 1; i--) {
            list.push(moment().date(1).subtract(i, 'd'));
        }
        for (let i = 1; i <= days; i++) {
            list.push(moment().date(i));
        }
        for (let i = 1; i <= (6 - weekOfLastDay); i++) {
            list.push(moment().date(days).add(i, 'd'));
        }
        return list;
    }


    render() {
        let dates = this.calculate();
        return (
            <div className="box">
                <table border="1px">
                    <tr className='tr_week'>
                        {weekConst.map(function (week) {
                            return <th>{week}</th>;
                        })}
                    </tr>
                    {dates.map(function (item, index) {

                    })}
                    <tr>
                        {weekConst.map(function (item, index) {
                            return <td>{index}</td>;
                        })}
                    </tr>
                    <tr>
                        {weekConst.map(function (item, index) {
                            return <td>{index}</td>;
                        })}
                    </tr>
                    <tr>
                        {weekConst.map(function (item, index) {
                            return <td>{index}</td>;
                        })}
                    </tr>
                    <tr>
                        {weekConst.map(function (item, index) {
                            return <td>{index}</td>;
                        })}
                    </tr>
                    <tr>
                        {weekConst.map(function (item, index) {
                            return <td>{index}</td>;
                        })}
                    </tr>
                    <tr>
                        {weekConst.map(function (item, index) {
                            return <td>{index}</td>;
                        })}
                    </tr>
                </table>
            </div>
        );
    }
}

export default App;
