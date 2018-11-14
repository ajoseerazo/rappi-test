import React, { Component } from 'react'
import {
  Input,
  Label,
  Button
} from 'reactstrap'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './style.scss';

export default class Filters extends Component {
  state = { }

  componentDidMount() {
    this._setInitialValues(this.props)
  }

  _setInitialValues(props) {
    const { stockRange: { max }, priceRange } = props
    this.setState({
      quantity: max,
      price: priceRange,
      available: ''
    })
  }

  onChangeInput = (e) => {
    const { onFilterChanged } = this.props

    const value = e.target.value

    if (value !== '') {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters.length) {
      let statePayload = {}
      const { filters } = nextProps

      for (let i=0; i<filters.length; i++) {
        statePayload[filters[i].key] = filters[i].value
      }

      this.setState(statePayload)
    } else {
      this._setInitialValues(nextProps)
    }
  }

  render () {
    const { price, quantity, available } = this.state
    const { stockRange, priceRange, onClearFilters } = this.props

    return (
      <div className="filters">
        <h4>Filtros</h4>

        <Button size="sm" color="primary" onClick={onClearFilters}>Limpiar filtros</Button>

        <div className="filter-item">
          <Label>Disponibilidad</Label>
          <Input type="select" name="select" onChange={this.onChangeInput} value={available}>
            <option value=''> --- </option>
            <option value={true}>Disponible</option>
            <option value={false}>No disponible</option>
          </Input>
        </div>

        <div className="filter-item">
          <Label>Rango de Precio</Label>
          {
            price !== undefined &&
            <InputRange
              maxValue={priceRange.max}
              minValue={priceRange.min}
              value={price}
              step={100}
              onChange={this.onChangePrice} />
          }
        </div>

        <div className="filter-item">
          <Label>Cantidad en stock</Label>
          {
            quantity !== undefined &&
            <InputRange
              maxValue={stockRange.max}
              minValue={stockRange.min}
              step={100}
              value={quantity}
              onChange={this.onChangeQuantity} />
          }
        </div>
      </div>
    )
  }
}