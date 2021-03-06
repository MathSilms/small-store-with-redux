import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import { connect } from 'react-redux'
import * as cartActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../utils/format'


function Cart({cart,total, removeFromCart, updateAmountRequest }) {

  function increment(product) {
    updateAmountRequest(product.id, product.amount +1)
  }

  function decrement(product){
    updateAmountRequest(product.id, product.amount -1)
  }


  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>
              Produto
            </th><th>
              QTD
            </th><th>
              Subtotal
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img 
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td> 
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" onClick={()=> decrement(product)} />
                </button>
                <input type="number" readOnly value={product.amount}/>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" onClick={()=> increment(product)}/>
                </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>

              <td>
                <button type="button" onClick={() => removeFromCart(product.id)}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
          </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">
          Finalizar pedido
        </button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state =>({
  cart:state.cart.map(product =>({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(state.cart.reduce((total,product) =>{
    return total+product.price * product.amount;
  }, 0)),

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Cart);