import React from 'react';
import FilledButton from '../buttons/FilledButton';

const SubscribeComponent = () => {
  return (
    <div className='subscribecomponent'>
        <div className="title">STAY CONNECTED</div>
        <form className='subscribe-form'>
            <input type='text' name='search_input' placeholder='yourname@email.com' />
            <FilledButton class="black-button" text='SUBSCRIBE' />
        </form>
    </div>
  )
}

export default SubscribeComponent