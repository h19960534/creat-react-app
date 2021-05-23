import React, { Component } from 'react'
import {Route,Redirect, Switch} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from '../Home/News'
import Message from '../Home/Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home组件内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>                        
                    </ul>
                    <div>                   
                    <Switch>                        
                        <Route path="/home/message" component={Message}/>
                        <Route path="/home/news" component={News}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                    </div>                                                                       
                </div>
            </div>
        )
    }
}
