import React from 'react';
import './Section1.scss';
import bg1 from '../../img/bg1.svg';
import { Container, Row, Col } from 'reactstrap';


const Section1 = ({ setIsPopup }) => {
    return (
        <div className='Section1'>
            <img className='Section1__bg1' src={bg1} alt="bg1" />
            <Container>
                <Row>
                    <Col xl='6'>
                        <p className='Section1__label'>цветочные магазины, флористы.</p>
                        <p className='Section1__title'>
                            Расширяй свой цветочный бизнес
                        </p>
                        <p className='Section1__subTitle'>
                            Персональная страница и<b> каталог</b> товаров с <b> оналйн оплатой </b> и удобным управлением заказами. Создай витрину <b>за 5 минут</b> без технических знаний и <b>затрат</b>
                        </p>
                        <a href='https://app.florinka.pp.ua/registration' className='Section1__button'>Создать витрину</a>
                    </Col>
                    <Col xl='6'></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section1;