import React, {useState, useEffect} from "react"
import axios from "axios"

const OnlineUser = () =>{
  const [currentUser, setCurrentUser] = useState({})

    useEffect(() =>{
    axios
    .get("/api/get_current_user")
    .then(res => {
      console.log(res)
      setCurrentUser(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
  },[])

  return(
    <h3>Hello, {currentUser.email}</h3>
  )
}

export default OnlineUser