import React, { Component } from 'react'
import Axios from 'axios'

export default class PostList extends Component {
    
    constructor(){
        super()
        this.state={
            posts: [],
            errMsg: ''
        }
    }
    
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(respons => {
               // console.log(respons);
                this.setState({posts: respons.data})
            }
        )
        .catch(err => {
            console.log(err);
            this.setState({errMsg: 'Error retreving data'})
        })
    }
    
    render() {
        
        const { posts, errMsg } = this.state
        return (
            <div>
                Post List
                {
                    posts.map(post => <div key={post.id}> {post.title}. <br/> </div>)
                }
                {
                    errMsg ? <h1> {errMsg} </h1> : null
                }
            </div>
        )
    }
}
