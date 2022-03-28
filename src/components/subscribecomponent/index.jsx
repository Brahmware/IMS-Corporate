import React from 'react'
import "./subscribecomponent.scss"

const SubscribeComponent = () => {
  return (
    <div className='subscribecomponent'>
        <div className="title">Stay Connected</div>
        <form className='subscribe-form'>
            <input type='text' name='search_input' placeholder='yourname@email.com' />
            <button className='subscribe-button'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default SubscribeComponent