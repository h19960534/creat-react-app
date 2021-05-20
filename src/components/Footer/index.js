import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }
    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((pre,cur) => {
            return pre + (cur.done ? 1: 0)
        }, 0)
        const totalCount = todos.length

        return (
            <div className="todo-footer">
                <label><input  type="checkbox" checked={doneCount === totalCount ? true: false} 
                onChange={this.handleCheckAll}/></label>
                <span>
                    <span>已完成{doneCount}</span>/全部{totalCount}
                </span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
