import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Card, Button, Image} from "semantic-ui-react"

const Post = (props) =>{
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get(`/api/posts/${props.match.params.id}`)
      .then(res => {
      setPost(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  // const renderPost = () => {
  //   return post.map(p =>(
  //     <div>
  //       <h1>{p.name}</h1>
  //     </div>
  //   ))
  // }
  

  return(
    <div>
      {post.name}
      <Image src={post.avatar}/>
      {post.text}
      {/* {props.match.params.id} */}
      
      <div onClick={props.history.goBack}>back</div>
    </div>
  )
}

export default Post