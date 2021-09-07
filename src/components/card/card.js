import React, {Component} from 'react';
import './card.css'

export default class Card extends Component {

    render() {
      const {name, price} = this.props.data;
      return (
          <div className='singlecard'>
            <img src='./pict.jpg' alt=''/>
            <h2>{name}</h2>
            <h3>Цена {price} грн.</h3>
            </div>
      )
    }
  }