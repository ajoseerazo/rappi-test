import React, { Component } from 'react'
import {
  Input,
  Label
} from 'reactstrap'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './style.scss';

export default class Filters extends Component {
  onChangeInput = (e) => {
    const { onFilterChanged } = this.props


    console.log(this.props)
    console.log(onFilterChanged)

    const value = e.target.value

    if (value !== undefined) {
      onFilterChanged({key: 'available', value: JSON.parse(value)})
    }
  }

  onChangePrice = (value) => {
    const { onFilterChanged } = this.props

    onFilterChanged({key: 'price', value})    
  }

  onChangeQuantity = (value) => {
    const { onFilterChanged } = this.props

    onFilterChanged({key: 'quantity', value})    
  }

  render () {
    return (
      <div className="filters">
        <h4>Filtros</h4>

        <div className="filter-item">
          <Label>Disponibilidad</Label>
          <Input type="select" name="select" onChange={this.onChangeInput}>
            <option> --- </option>
            <option value={true}>Disponible</option>
            <option value={false}>No disponible</option>
          </Input>
        </div>

        <div className="filter-item">
          <Label>Rango de Precio</Label>
          <InputRange
            maxValue={20}
            minValue={0}
            value={{min: 2, max: 19}}
            onChange={this.onChangePrice} />
        </div>

        <div className="filter-item">
          <Label>Cantidad en stock</Label>
          <InputRange
            maxValue={20}
            minValue={0}
            value={14}
            onChange={this.onChangeQuantity} />
        </div>
      </div>
    )
  }
}