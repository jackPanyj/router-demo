
/**
 * Created by dujingya on 17/6/2.
 */
import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import HomePage from './List/HomePage';
import Mv from './List/Mv';
import Playlist from './List/Playlist';
import Ranking from './List/Ranking';
import Singer from './List/Singer';
import Special from './List/Special';
import './home.css'
export default class Home extends Component{
    render(){
        return (
            <div className="home">
                <ul>
                    <li>
                        <Link to='/Home/HomePage'>首页</Link>
                    </li>
                    <li>
                        <Link to="/Home/Singer">歌手</Link>
                    </li>
                    <li>
                        <Link to="/Home/Special">专辑</Link>
                    </li>
                    <li>
                        <Link to="/Home/Ranking">排行榜</Link>
                    </li>
                    <li>
                        <Link to="/Home/Playlist">分类歌单</Link>
                    </li>
                    <li>
                        <Link to="/Home/Mv">Mv</Link>
                    </li>
                </ul>
                <Route path='/Home/HomePage' component={HomePage}/>
                <Route path="/Home/Singer" component={Singer}/>
                <Route path="/Home/Special" component={Special}/>
                <Route path="/Home/Ranking" component={Ranking}/>
                <Route path="/Home/Playlist" component={Playlist}/>
                <Route path="/Home/Mv" component={Mv}/>
            </div>
        )
    }
}
