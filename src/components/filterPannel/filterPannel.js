import React, {Component} from 'react';
import './filterPannel.css';

export default class FilterPannel extends Component {

    handleSearchTextChange = (e) => {
      this.props.onSearchTextChange(e.target.value);
    }
  
    handleTvChange = (e) => {
      this.props.onTvChange(e.target.checked);
    }
  
    handlePhotoChange = (e) => {
      this.props.onPhotoChange(e.target.checked);
    }
    
    render() {
      return (
        <form className='filterpannel'>
          <h3>Поиск по наименованию</h3>
          <input type="text"
                  placeholder="Введите товар"
                  value={this.props.searchText}
                  onChange={this.handleSearchTextChange}
          />
              <h3>Тип товара</h3>
              <input type='checkbox' id='tv' onChange={this.handleTvChange} /> 
              <label htmlFor='tv'>Телевизор</label>
              <input type='checkbox' id='photo' onChange={this.handlePhotoChange} /> 
              <label htmlFor='photo'>Фотоаппарат</label>
        
        </form>
      )
    }
  }