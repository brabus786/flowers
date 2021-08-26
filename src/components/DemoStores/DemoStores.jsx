import React from 'react';
import './DemoStores.scss';
import mocaper1 from '../../img/mockuper1.png';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../Logo/Logo';
import mokap1 from '../../img/mockuper7.png';


const DemoStores = ({ setIsPopup }) => {
    return (
        <div className='DemoStores'>

            <Container>
                <p className='DemoStores__titlePage'>
                    Примеры демо-витрин созданных на платформе  <Logo size={31} />
                </p>
                <Row>
                    <Col className='DemoStores__col' xl='4' >
                        <p className='DemoStores__title'>Магазин цветов</p>
                        <a target="_blank" href="https://app.florinka.pp.ua/public/kiev-flowers?category=610c19110e49e1003bc502fb">
                            <img src={mokap1} alt="mokap1" />
                        </a>
                        <div className='DemoStores__button'>
                            <a target="_blank" href="https://app.florinka.pp.ua/public/kiev-flowers?category=610c19110e49e1003bc502fb">
                                <span className='button'>Смотреть</span>
                            </a>
                        </div>
                    </Col>
                    <Col xl='4'>

                    </Col>
                    <Col xl='4'>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DemoStores;