import React, {useState, useEffect} from "react"
import axios from "axios"
import {Card, Button, Icon, Image, CardGroup, CardHeader} from "semantic-ui-react"
import {Link} from "react-router-dom"
import {Header} from "semantic-ui-react"
import OnlineUser from "../components/OnlineUser"

const Home = () => {
  const [posts, setPosts] = useState([])
  // const [currentUser, setCurrentUser] = useState({})
  
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

  // useEffect(() =>{
  //   axios
  //   .get("/api/get_current_user")
  //   .then(res => {
  //     console.log(res)
  //     setCurrentUser(res.data)
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //   })
  // },[])


  const renderPosts= () =>{
    return posts.map (post => (
      <>
      <Card key={post.id}>
        <Image src={post.avatar} />
        <Card.Content>
        <Card.Header>{post.name}</Card.Header>
        <Card.Description>{post.text.substring(1, 30)}...</Card.Description>
        <Button>View</Button>
        </Card.Content>
      </Card>
      </>
    ))
  }

  // const renderCurrentUser = () =>{
  //   return currentUser.map (current => (
  //     <h1>{current.data}</h1>
  //   ))
  // }

  return(
    <div>

      <Header as='h1' textAlign='center'>My Space</Header>
      {/* {renderCurrentUser()} */}
      {/* <h4>Hello, {currentUser.email}</h4> */}
      <OnlineUser/>
      <br/> <hr></hr>
      {renderPosts()}
    </div>
  )

}

export default Home