import React from 'react';
import './Content1.scss';

const Content1 = ({setIsPopup}) => {
    return (
        <>
            <span  onClick={() => setIsPopup(false)}>Закрыть</span>
            <p>Заявка на регистрацию</p>
            <input type="text" placeholder='Ваше Имя' />
            <input type="text" placeholder='Номер телефона' />
            <input type="email" placeholder='Email' />
            <button /* onClick={() => send()}*/>Отправить заявку</button>
        </>
    )
}
export default Content1;