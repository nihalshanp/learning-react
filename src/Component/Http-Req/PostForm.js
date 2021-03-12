import React, { Component } from 'react'
import Axios from 'axios'

export default class PostForm extends Component {
    
    constructor(){
        super()
        this.state={
            userId: '',
            title: '',
            body: '',
        }
    }
    
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    submitHandler = e => {
        e.preventDefault()
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(
            res => {
                console.log(res.data);
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
    }
    
    render() {
        
        const { userId, title, body} = this.state
        
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                        type='text'
                        name='userId'
                        value={userId}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input
                        type='text'
                        name='body'
                        value={body}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                
            </div>
        )
    }
}
