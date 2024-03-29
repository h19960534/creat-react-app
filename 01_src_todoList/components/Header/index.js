import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
     
    // 对传入的props的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired,                       
    }

    //输入传递方法
    handleKeyUp = (event) => {
        const {keyCode, target} = event
        if(keyCode !== 13) return null
        if(target.value.trim() === '') {
            alert('输入不能为空！')
            return
        }
        this.props.addTodo(target.value)
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
