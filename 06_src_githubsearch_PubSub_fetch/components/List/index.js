import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state  = {  users:[],        //users状态数组
        isFirst:true,    //是否第一次打开页面
        isLoading:false, //标识是否处于加载中
        err:'',   //存储请求相关错误信息
}
    componentDidMount() {
        PubSub.subscribe('atguigu',(_, stateObj) => {
            this.setState(stateObj)
        })
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>输入关键词，随后点击Search按钮</h2>: 
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color:'red'}}>{err.message}</h2> :
                    users.map((userObj) => {
                    return (
                        <div key={userObj.id} className="card">
                            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                                <img src={userObj.avatar_url} alt="head_portrait" style={{width:'100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                }) 
            }          
            </div>
        )
    }
}
