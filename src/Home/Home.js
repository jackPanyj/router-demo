
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
                        <link to="/Home/List/HomePage">
                            首页
                        </link>
                    </li>
                    <li>
                        <link to="/Home/List/Singer">歌手</link>
                    </li>
                    <li>
                        <link to="/Home/List/Special">专辑</link>
                    </li>
                    <li>
                        <link to="/Home/List/Ranking">排行榜</link>
                    </li>
                    <li>
                        <link to="/Home/List/Playlist">分类歌单</link>
                    </li>
                    <li>
                        <link to="/Home/List/Mv">Mv</link>
                    </li>
                </ul>
                <Route path="/Home/List/HomePage" component={HomePage}/>
                <Route path="/Home/List/Singer" component={Singer}/>
                <Route path="/Home/List/Special" component={Special}/>
                <Route path="/Home/List/Ranking" component={Ranking}/>
                <Route path="/Home/List/Playlist" component={Playlist}/>
                <Route path="/Home/List/Mv" component={Mv}/>
            </div>
        )
    }
}
