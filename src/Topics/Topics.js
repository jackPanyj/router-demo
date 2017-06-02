
/**
 * Created by dujingya on 17/6/2.
 */
import React,{Component} from 'react'
import {Router,Route,Link} from 'react-router-dom'
import Topic from './Topic/Topic'
import Topic_one from './Topic/Topic_one'
import Topic_two from './Topic/Topic_two'
import './topics.css'

export default class Home extends Component{
    render(){
        return (
            <div className="topics">
                <ul>
                    <li>
                        <Link to='/Topics/Topic'>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to='/Topics/Topic_one'>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to='/Topics/Topic_two'>
                            Props v. State
                        </Link>
                    </li>
                </ul>
                <Route path='/Topics/Topic' component={Topic}/>
                <Route path='/Topics/Topic_one' component={Topic_one}/>
                <Route path='/Topics/Topic_two' component={Topic_two}/>
            </div>
        )
    }
}
