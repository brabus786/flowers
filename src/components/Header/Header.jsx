import React,{useState, useEffect} from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import cx from 'classnames';

import { Container, Row, Col } from 'reactstrap';


const Header = ({ setIsPopup }) => {

    const [isScroll, setIsScroll] = useState(false);

    console.log(isScroll);


    useEffect(() => {
        window.addEventListener('scroll', () => window.pageYOffset !== 0 ? setIsScroll(true) : setIsScroll(false))
    },[])

    return (
        <div className={cx('Header',{'Header__HeaderScroll':isScroll})}>
            <Container>
                <div className={cx('Header__innerWrap')}>
                    <Logo />
                    <a href='https://app.florinka.pp.ua/registration' className='button button1'>Создать витрину</a>
                </div>
            </Container>
        </div>
    );
};

export default Header;