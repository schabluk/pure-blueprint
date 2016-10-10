import React from 'react'

import './ListGroup.css'

const ListGroup = ({items}) =>
  <div className="list-group">
    {items.map((item, idx) => (
      <a href="#" className={'list-group-item ' + item.class} key={idx}>
        {item.text}
      </a>
    ))}
  </div>

ListGroup.propTypes = {
  items: React.PropTypes.array
}

ListGroup.displayName = 'ListGroup'

export default ListGroup
