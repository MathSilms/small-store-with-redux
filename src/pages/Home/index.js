import React, { Component } from 'react';
import api from '../../services/api'
import { formatPrice } from '../../utils/format'

import { ProductList } from './styles';
import { MdAddShoppingCart} from 'react-icons/md'


class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product =>({
      ...product,
      priceFormatted:formatPrice(product.price),
    }));
    this.setState({ products: data})
  }
 
  render() {

    const { products } = this.state
    return (
      <ProductList>
        {products.map(product =>(
          <li key={product.id}>
          <img 
            src={product.image} 
            alt={product.title}
          />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
  
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>
  
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        ))}
        
      </ProductList>
    );
  }
}

export default Home;