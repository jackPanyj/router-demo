import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Topics from './Topics/Topics'
import './app.css'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
           'linked':'blue'
        }
        this.changeColor=this.changeColor.bind(this)
    }

    changeColor=()=>{
        this.setState({
          'linked':'red'
        })
    }

    render(){
        var text=this.state.linked
        var style={"color":text}
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li ><Link to="/" style={style} onClick={this.changeColor} >音乐馆</Link></li>
                        <li ><Link to="/about" style={style} onClick={this.changeColor}>我的音乐</Link></li>
                        <li ><Link to="/topics" style={style} onClick={this.changeColor}>下载客户端</Link></li>
                    </ul>
                    <hr/>
                    <Route path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }
}

