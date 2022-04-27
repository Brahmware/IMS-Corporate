import React from 'react';

const SubscribeComponent = () => {
  return (
    <div className='subscribecomponent'>
        <div className="title">Stay Connected</div>
        <form className='subscribe-form'>
            <input type='text' name='search_input' placeholder='yourname@email.com' />
            <button className='subscribe-button py-1'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default SubscribeComponent