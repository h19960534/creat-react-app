import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search = () => {
        const {keyWordElement:{value:keyWord}} = this
        console.log(keyWord)
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => console.log('成功了', response.data),
            error => console.log('失败了', error)
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
