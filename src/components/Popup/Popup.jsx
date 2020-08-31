import React,{ useState } from 'react';
import emailjs from 'emailjs-com';
import './Popup.scss';

const Popup = ({ isPopup, setIsPopup }) => {
  
    const [formContent,setFormContent] = useState(false);

    const send = () => {
        setFormContent(true)
    }

    function sendEmail(e) {
        send();
        e.preventDefault();
    
        emailjs.sendForm('flower', 'flover', e.target, 'user_n2iF0lXWDz5Qyjph1IzZO')
          .then((result) => {
             // console.log(result.text);
          }, (error) => {
            //  console.log(error.text);
          });
      }



    let popup = null;
    let content = (
        <form onSubmit={sendEmail}>
            <span onClick={() => setIsPopup(false)}>Закрыть</span>
            <p>Заявка на регистрацию</p>
            <input name="user_name" type="text" placeholder='Ваше Имя' />
            <input name="user_userPhone"  type="text" placeholder='Номер телефона' />
            <input name="user_email" type="email" placeholder='Email' />
            <button type="submit">Отправить заявку</button>
        </form >
    )

    if(formContent){
        content = (
            <p>
                Спасибо за заявку. <br/>Мы свяжемся с вами<br/> в ближайшее время.
            </p>
        )
        setTimeout(() => {
            setIsPopup(false);
        },2000);
    }

    if (isPopup) {
        popup = (
            <div className='popup'>
                <div className='popup__form'>
                    {content}
                </div>
            </div>
        )
    }

    return popup;
};

export default Popup;