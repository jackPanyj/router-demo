
/**
 * Created by dujingya on 17/6/2.
 */
import React,{Component} from 'react'
import {Router,Route,Link} from 'react-router-dom'

export default class Home extends Component{
    render({match}){
        return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )
    }
}
