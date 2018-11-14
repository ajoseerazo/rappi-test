import React, { Component } from 'react'
import {
  Input,
  Label, 
  Form } from 'reactstrap';

export default class Sort extends Component {
  onChange = (e) => {
    if (e.target.value && e.target.value.trim() !== '') {
      let value = JSON.parse(e.target.value)

      const { onSelectOption } = this.props
      
      onSelectOption(value)
    }
  }

  render () {
    return (
      <Form inline>
        <Label>Ordenar por:</Label>
        <Input type="select" name="select" onChange={this.onChange} >
          <option value=''> --- </option>
          <option value={JSON.stringify({key: 'priceNumber', mode: 'desc'})}>Precio: Mayor a menor</option>
          <option value={JSON.stringify({key: 'priceNumber', mode: 'asc'})}>Precio: Menor a mayor</option>
          <option value={JSON.stringify({key: 'quantity', mode: 'desc'})}>Cantidad en stock: Mayor a menor</option>
          <option value={JSON.stringify({key: 'quantity', mode: 'asc'})}>Cantidad en stock: Menor a mayor</option>
          <option value={JSON.stringify({key: 'available', mode: 'desc'})}>Disponibles primero</option>
          <option value={JSON.stringify({key: 'available', mode: 'asc'})}>No disponibles primero</option>
        </Input>
      </Form>
    )
  }
}