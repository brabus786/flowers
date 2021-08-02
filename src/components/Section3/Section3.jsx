import React from 'react';
import './Section3.scss';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../img/section3/i1.svg';
import img2 from '../../img/section3/i2.svg';
import img3 from '../../img/section3/i3.svg';
import img4 from '../../img/section3/i4.svg';


const Section3 = () => {
    return (
        <div className='Section3'>
            <Container>
                <p className='Section3__title'>
                    Как это работает
                </p>
                <p className='Section3__subTitle'>
                    Онлайн витрина это островок вашего физического магазина в интернете. Здесь вы можете добавить каталог букетов, принимать оплату онлайн и с легкостью управлять заказами.
                </p>
                <p className='Section3__subTitle'>
                    Создайте свою витрину и продвигайте её в ваших социальных сетях, google buissness и среди существующих клиентов.
                </p>
                <p className='Section3__subTitle'>
                    Товары добавленные в витрину оснащены кнопками шеринга для удобства привлечения клиентов через мессенджеры.
                </p>
                <Row>
                    <Col xl='3' lg='6' md='6'>
                        <div className='Section3__wrapSection'>
                            <img src={img1} alt="img1" />
                            <p className='Section3__titleBlock'>
                                Добавь каталог товаров
                            </p>
                        </div>
                    </Col>
                    <Col xl='3' lg='6' md='6'>
                        <div className='Section3__wrapSection'>
                            <img src={img2} alt="img1" />
                            <p className='Section3__titleBlock'>
                                Подключи платежный аккаунт
                            </p>
                        </div>
                    </Col>
                    <Col xl='3' lg='6' md='6'>
                        <div className='Section3__wrapSection'>
                            <img src={img3} alt="img1" />
                            <p className='Section3__titleBlock'>
                                Продвигайте магазин
                            </p>
                        </div>
                    </Col>
                    <Col xl='3' lg='6' md='6'>
                        <div className='Section3__wrapSection'>
                            <img src={img4} alt="img1" />
                            <p className='Section3__titleBlock'>
                                Получайте заказы и зарабатывайте
                            </p>

                        </div>
                    </Col>
                </Row>
                <div className='Section3__underline'></div>
            </Container>
        </div>
    );
};

export default Section3;