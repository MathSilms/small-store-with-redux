import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux'
import { MdShoppingBasket} from 'react-icons/md'

import { Container } from './styles';
import { Cart } from './styles';
import logo from '../../assets/img/logo.svg'



function Header({cartSize }) {
  return (
    <Container>
        <Link to="/">
            <img src={logo} alt="ShoesStore"/>
        </Link>

        <Cart to="/Cart">
            <div>
                <strong>Meu carrinho</strong>
                <span>{cartSize}</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF"/>
        </Cart>

    </Container>
  )
}

export default connect(state => ({
  cartSize:state.cart.length,
}))(Header);