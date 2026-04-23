// import React from 'react'
import FriendCard from "./FriendCard"

const FriendsHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <h1 className="font-bold">Your Friends</h1>
      <div>
        <button className="h-8 w-8 bg-gray-300 rounded-full mr-2 hover:bg-sky-700">!</button>
        <button className="h-8 w-8 bg-gray-300 rounded-full mr-2">+</button>
      </div>
    </div>
  )
}

const FriendsPage = () => {
  return (
    <div className="m-8">
      <FriendsHeader />
      <FriendCard username="jondough" name="Jon Doe"/>
      <FriendCard username="deer.eyes" name="Jane Deer"/>
    </div>
  )
}

export default FriendsPage