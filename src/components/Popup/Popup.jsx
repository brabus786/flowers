import React from 'react';
import './Popup.scss';

const Popup = ({ isPopup, setIsPopup }) => {
    console.log(isPopup);


    let popup = null;

    if (isPopup) {
        popup = (
            <div className='popup'>
                <div className='popup__form'>
                    <span onClick={() => setIsPopup(false)}>Закрыть</span>
                    <p>Заявка на регистрацию</p>
                    <input type="text" placeholder='Ваше Имя' />
                    <input type="text" placeholder='Номер телефона' />
                    <input type="email" placeholder='Email' />
                    <button>Отправить заявку</button>
                </div>
            </div>
        )
    }

    return popup;
};

export default Popup;