import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket} from 'react-icons/md'

import { Container } from './styles';
import { Cart } from './styles';
import logo from '../../assets/img/logo.svg'



function Header() {
  return (
    <Container>
        <Link to="/">
            <img src={logo} alt="ShoesStore"/>
        </Link>

        <Cart to="/Cart">
            <div>
                <strong>Meu carrinho</strong>
                <span>3 Itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF"/>
        </Cart>

    </Container>
  )
}

export default Header;