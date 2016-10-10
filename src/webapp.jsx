import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Button, ListGroup} from 'index'

const listItems = [
  {text: 'Cras justo odio', class: 'active'},
  {text: 'Dapibus ac facilisi'},
  {text: 'Morbi leo risus'},
  {text: 'Porta ac consectetur ac', class: 'disabled'},
]

ReactDOM.render(
  <div style={{width:'400px'}}>
    <Button text='Click Me' />
    <br /><br />
    <ListGroup items={listItems}/>
  </div>,
  document.body
)
