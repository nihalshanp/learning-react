import React, {
    Component
} from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }
    usernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    commentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    topicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleChange = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        //event.preventDefault()
    }
    render() {
        const {username, comment, topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleChange}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={username} onChange={this.usernameChange}></input>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={comment} onChange={this.commentChange}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.topicChange}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                 </form>
            </div>
    )
}
}