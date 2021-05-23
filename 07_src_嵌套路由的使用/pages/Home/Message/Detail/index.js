import React, { Component } from 'react'


export default class Detail extends Component {
    render() {
        console.log(this.props)
        return (
            <ul>
                <li>ID:</li>
                <li>TITLE:</li>
                <li>CONTENT:</li>
            </ul>
        )
    }
}
