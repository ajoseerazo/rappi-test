import React, { Component } from 'react'
import {
  Input,
  Label
} from 'reactstrap'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './style.scss';

export default class Filters extends Component {
  render () {
    return (
      <div className="filters">
        <h4>Filtros</h4>

        <div className="filter-item">
          <Label>Disponibilidad</Label>
          <Input type="select" name="select">
            <option> --- </option>
            <option>Disponible</option>
            <option>No disponible</option>
          </Input>
        </div>

        <div className="filter-item">
          <Label>Rango de Precio</Label>
          <InputRange
            maxValue={20}
            minValue={0}
            value={{min: 2, max: 19}} />
        </div>

        <div className="filter-item">
          <Label>Cantidad en stock</Label>
          <InputRange
            maxValue={20}
            minValue={0}
            value={14} />
        </div>
      </div>
    )
  }
}