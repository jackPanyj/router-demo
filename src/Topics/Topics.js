
/**
 * Created by dujingya on 17/6/2.
 */
import React,{Component} from 'react'
import {Router,Route,Link} from 'react-router-dom'
import Topic from '../Topic/Topic'

export default class Home extends Component{
    render({match}){
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        )
    }
}
