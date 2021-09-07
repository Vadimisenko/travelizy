import React, {Component} from 'react';
import Card from '../card';
import './cardsList.css'

export default class CardsList extends Component {

    showVisibleCards = () => {
      const {data, searchText, tvChecked, photoChecked} = this.props;
      const visibleCards = []
  
      data.forEach((item, id) => {
        if (item.name.includes(searchText)) {
          if (tvChecked && item.type === 'tv') {
                visibleCards.push(
                <Card
                  key={id}
                  data={item} 
                />
              )
          }
          if (photoChecked && item.type === 'photo') {
                visibleCards.push(
                <Card
                  key={id}
                  data={item} 
                />
              )
          }
          if (!tvChecked && !photoChecked) {
            visibleCards.push(
              <Card
                key={id}
                data={item} 
              />
            )
          }
        }
      })
  
    return (
        <div  className='cardsList'>{visibleCards}</div>
      )
    }
  
    render() {
      return (
        <div>
          {this.showVisibleCards()}
        </div>
      )
    }
  }