import React, {useState, useEffect} from "react"
import axios from "axios"
import {Card, Button, Icon, Image, CardGroup} from "semantic-ui-react"
import {Link} from "react-router-dom"
import {Header} from "semantic-ui-react"

const Home = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    axios
    .get("/api/posts")
    .then(res =>{
      console.log(res)
      setPosts(res.data)
    })
    .catch((e) =>{
      console.log(e)
    })
  },[])

  const renderPosts= () =>{
    return posts.map (post => (
      <>
      <CardGroup>
        <h1>{post.name}</h1>
        <p>{post.text}</p>
        <Image src={post.avatar} />
      </CardGroup>
      </>
      
    ))
  }

  return(
    <div>
      <Header as='h3' textAlign='center'>My Space</Header>
      {renderPosts()}
    </div>
  )

}

export default Home