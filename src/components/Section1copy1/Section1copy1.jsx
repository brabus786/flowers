import React from 'react';
import './Section1copy1.scss';
import mocaper1 from '../../img/mockuper1.png';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../Logo/Logo';
import cx from 'classnames';


const Section1copy1 = ({ title, text, img, position }) => {
    return (
        <div className='Section1copy1'>
            <Container>
                <Row className={cx('Section1copy1__innerContainer',{'Section1copy1__left':position ==='left'})}>
                    <Col xl='6' sm='12'>
                        <p className='Section1copy1__title'>{title}</p>
                        {
                        text.split('\n').map((data) => {
                            return(
                                <p className='Section1copy1__text'>{data}</p>
                            )
                        })
                        }
                    </Col>
                    <Col xl='6' sm='12'>
                        <img src={img} alt="img" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section1copy1;