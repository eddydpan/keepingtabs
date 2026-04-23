// import React from 'react'

const FriendCard = ({username, name}: {username: string, name: string}) => {
  return (
    <div className="flex flex-row mt-4">
        <div className="h-12 w-12 bg-gray-300 rounded-full mr-2"></div>
        <div className="flex flex-col items-start">
            <p className="text-[15px]">{name}</p>
            <p className="text-xs">@{username}</p>
        </div>
    </div>
  )
}

export default FriendCard