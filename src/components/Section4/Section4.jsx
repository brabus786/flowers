import React from 'react';
import './Section4.scss';
import bg1 from '../../img/bg1.svg';
import { Container, Row, Col } from 'reactstrap';

const Section4 = ({setIsPopup}) => {
    return (
        <div className='Section4'>
            <Container>
                <Row>
                    <Col xl='6'>
                        <p className='Section4__title'>
                            Создай личную витрину и развивай свой бизнес
                        </p>
                        <button onClick={() => setIsPopup(true)} className='Section4__button'>Создать Витрину</button>
                    </Col>
                    <Col xl='6'></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section4;