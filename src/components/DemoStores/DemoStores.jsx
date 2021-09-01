import React from 'react';
import './DemoStores.scss';
import mocaper1 from '../../img/mockuper1.png';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../Logo/Logo';
import mokap1 from '../../img/mockuper7.png';
import mokap2 from '../../img/mockuper8.png';
import mokap3 from '../../img/mockuper9.png';


const DemoStores = ({ setIsPopup }) => {
    return (
        <div className='DemoStores'>

            <Container>
                <p className='DemoStores__titlePage'>
                    Примеры демо-витрин созданных на платформе  <Logo size={31} />
                </p>
                <Row>
                    <Col className='DemoStores__col buttonFlowers' xl='4' >
                        <p className='DemoStores__title'>Витрина цветов</p>
                        <a target="_blank" href="https://app.florinka.pp.ua/public/kiev-flowers?category=610c19110e49e1003bc502fb">
                            <img src={mokap1} alt="mokap1" />
                        </a>
                        <div className='DemoStores__button'>
                            <a className='lickStore' target="_blank" href="https://app.florinka.pp.ua/public/kiev-flowers?category=610c19110e49e1003bc502fb">
                                <span className='button'>Смотреть</span>
                            </a>
                        </div>
                    </Col>
                  
                    <Col className='DemoStores__col buttonFlowers' xl='4'>
                        <p className='DemoStores__title'>Витрина саженцев</p>
                        <a target="_blank" href="https://app.florinka.pp.ua/public/point?category=6113f0c25c3756003b283ce7">
                            <img src={mokap2} alt="mokap1" />
                        </a>
                        <div className='DemoStores__button'>
                            <a className='lickStore' target="_blank" href="https://app.florinka.pp.ua/public/point?category=6113f0c25c3756003b283ce7">
                                <span className='button'>Смотреть</span>
                            </a>
                        </div>
                    </Col>

                    <Col className='DemoStores__col buttonFlowers' xl='4'>
                        <p className='DemoStores__title'>Витрина декора</p>
                        <a target="_blank" href="https://app.florinka.pp.ua/public/decor?category=61287ea4856aaa003c9de641">
                            <img src={mokap3} alt="mokap1" />
                        </a>
                        <div className='DemoStores__button'>
                            <a className='lickStore' target="_blank" href="https://app.florinka.pp.ua/public/decor?category=61287ea4856aaa003c9de641">
                                <span className='button'>Смотреть</span>
                            </a>
                        </div>
                    </Col>
                  
                </Row>
            </Container>
        </div>
    );
};

export default DemoStores;