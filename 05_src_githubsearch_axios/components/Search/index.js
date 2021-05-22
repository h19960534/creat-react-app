import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search = () => {
        const {keyWordElement:{value:keyWord}} = this
        
        this.props.updateAppState({isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => this.props.updateAppState({isLoading:false,users:response.data.items}),
            error => {
                this.props.updateAppState({isLoading:false,err:error})
            }
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
