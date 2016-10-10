import React from 'react'

import './Button.css'

/**
 * Moving click handler function outside of the component
 * follows the separation of concerns principle (SoC).
 */
const _handleClick = (onClick, event) => {
  event.preventDefault()
  onClick('Thanks!')
}

/**
 * The component is Pure; has no state and returns the same markup
 * given the same props. That makes it easy to test and maintain.
 * For brevity, it is defined as a function, rather than a class.
 *
 * There should be no 'contextType' nor 'defaultProps'
 * as they can mutate the state. The default props
 * can be passed as argument defaults.
 *
 * Props are clearly definded using Object Destructuring.
 */
const Button = ({text, onClick = alert}) =>
  <button
    type='button'
    className="btn btn-primary"
    onClick={(event) => _handleClick(onClick, event)}>
    {text}
  </button>

// The propTypes object defines component 'interface'.
Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
}

// The displayName property is used in debugging messages.
Button.displayName = 'Button'

export default Button
