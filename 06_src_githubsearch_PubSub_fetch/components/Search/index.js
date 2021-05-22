import React, { Component } from 'react'
//import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {

    search = () => {

       
        const {keyWordElement:{value:keyWord}} = this
        
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => PubSub.publish('atguigu',{isLoading:false,users:response.data.items}),
        //     error => {
        //         PubSub.publish('atguigu',{isLoading:false,err:error})
        //     }
        // )
        fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了')
                return response.json()
            }).then(
                response => console.log("获取数据成功了", response)
            ).catch(
                error => console.log("error",error)
            )
    }       

    render() {
        return (
            <section className="jumbotron">
                <h3>搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
