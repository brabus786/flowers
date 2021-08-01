import React from 'react';
import './Section2.scss';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../img/section2/img1.svg';
import img2 from '../../img/section2/img2.svg';
import img3 from '../../img/section2/img3.svg';
import img4 from '../../img/section2/img4.svg';
import img5 from '../../img/section2/img5.svg';
import img6 from '../../img/section2/img6.svg';

const Section2 = () => {
    return (
        <div className='Section2'>
            <Container>
                <Row>
                    <Col xl='4' lg='6' md='6'>
                        <div className='Section2__wrapSection'>
                            <img src={img1} alt="img1" />
                            <p className='Section2__titleBlock'>
                                Личная интернет витрина
                            </p>
                            <p className='Section2__subTitle'>
                                Создайте личную страничку для вашего онлайн бизнеса. Теперь вы можете продавать онлайн.
                            </p>
                        </div>
                    </Col>
                    <Col xl='4' lg='6' md='6'>
                        <div className='Section2__wrapSection'>
                            <img src={img2} alt="img1" />
                            <p className='Section2__titleBlock'>
                                Удобство для клиентов
                            </p>
                            <p className='Section2__subTitle'>
                                Хороший клиентский сервис это рост вашего бизнеса. Онлайн магазин поможет вам получить больше довольных клиентов.
                            </p>
                        </div>
                    </Col>
                    <Col xl='4' lg='6' md='6'>
                        <div className='Section2__wrapSection'>
                            <img src={img3} alt="img1" />
                            <p className='Section2__titleBlock'>
                                Быстро и легко
                            </p>
                            <p className='Section2__subTitle'>
                                Вы можете создать совой сайт и начать принимать оплату в течение 5 минут без технических знаний.
                            </p>
                        </div>
                    </Col>
                    <Col xl='4' lg='6' md='6'>
                        <div className='Section2__wrapSection'>
                            <img src={img4} alt="img1" />
                            <p className='Section2__titleBlock'>
                                Без затрат
                            </p>
                            <p className='Section2__subTitle'>
                                Создание магазина бесплатно, а комиссия снимается только с оплаченного заказа. Мы зарабатываем, когда вы зарабатываете.
                            </p>
                        </div>
                    </Col>
                    <Col xl='4' lg='6' md='6'>
                        <div className='Section2__wrapSection'>
                            <img src={img5} alt="img1" />
                            <p className='Section2__titleBlock'>
                                Удобное управление заказами
                            </p>
                            <p className='Section2__subTitle'>
                                Простой и понятный интерфейс для управления заказами, доставкой и оплатой. Ни один заказ не будет забыт.
                            </p>
                        </div>
                    </Col>
                    <Col xl='4' lg='6' md='6'>
                        <div className='Section2__wrapSection'>
                            <img src={img6} alt="img1" />
                            <p className='Section2__titleBlock'>
                                Прием оплаты онлайн.
                            </p>
                            <p className='Section2__subTitle'>
                                Ваши клиенты могут теперь расплатиться карточкой всего в пару кликов.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section2;