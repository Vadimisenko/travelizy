import React, {Component} from 'react';
import FilterPannel from '../filterPannel';
import CardsList from '../cardsList';

const cards = [
    {
     name: 'Телевизор Sony KD55XG7096BR Black',
     type: 'tv',
     brand: 'sony',
     price: 8900
    },
    {
     name: 'Телевизор Philips 58PUS8505/12',
     type: 'tv',
     brand: 'philips',
     price: 7600
    },
    {
     name: 'Фотоаппарат Canon EOS M50 Kit 15-45 IS STM Black',
     type: 'photo',
     brand: 'canon',
     price: 4100
    },
    {
     name: 'Фотоаппарат Sony Alpha а7',
     type: 'photo',
     brand: 'sony',
     price: 3300
    },
    {
     name: 'Телевизор LG 43UP78006LB',
     type: 'tv',
     brand: 'lg',
     price: 4560
    },
    {
     name: 'Фотоаппарат Sony Alpha 6000 Kit',
     type: 'photo',
     brand: 'sony',
     price: 2400
    },
  ]

export default class App extends Component {
    state = {
      searchText: '',
      tvChecked: false,
      photoChecked: false
    }
  
    handleSearchTextChange = (searchText) => {
      this.setState({
        searchText: searchText
      })
    };
  
   handleTvChange = (tvChecked) => {
     this.setState({
       tvChecked: tvChecked
     })
   }
  
   handlePhotoChange = (photoChecked) => {
     this.setState({
       photoChecked: photoChecked
     })
   }
  
    render() {
      return (
        <React.Fragment>
          <FilterPannel onTvChange={this.handleTvChange}
                        onPhotoChange={this.handlePhotoChange}
                        onSearchTextChange={this.handleSearchTextChange}
                        cards={cards}/>
          <CardsList data={cards}
                searchText={this.state.searchText} 
                tvChecked={this.state.tvChecked}
                photoChecked={this.state.photoChecked}        
          />
        </React.Fragment>
      )
    }
  }
  