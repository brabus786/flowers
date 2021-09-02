import React from 'react';
import './Section1.scss';
import mocaper1 from '../../img/mockuper1.png';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../Logo/Logo';


const Section1 = ({ setIsPopup }) => {
    return (
        <div className='Section1'>
            {/* <img className='Section1__bg1' src={bg1} alt="bg1" /> */}
            <Container>
                <Row>
                    <Col xl='6'>
                        {/* <p className='Section1__label'>цветочные магазины, флористы, торговля саженцами</p> */}
                        <p className='Section1__title'>
                            Расширяй свой бизнес с оналйн витриной <Logo size={31}/>
                        </p>
                        <p className='Section1__subTitle'>
                            Персональная страница и<b> каталог</b> товаров с <b> оналйн оплатой </b> и удобным управлением заказами. Создай витрину <b>за 5 минут</b> без технических знаний и <b>затрат</b>
                        </p>
                        <p className='Section1__test'>Бесплатный тест 3 меяца!!!</p>
                        <p>По окончанию тестового периода будет предложенна подписка - 100 грн. в месяц.</p>
                        <a href='https://app.florinka.pp.ua/registration' className='button button2'>Создать витрину</a>
                    </Col>
                    <Col className='Section1__colRight' xl='6'>
                        <img src={mocaper1} alt="mocaper1" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section1;