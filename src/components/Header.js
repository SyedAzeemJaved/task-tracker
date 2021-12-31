import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>React Task Tracker</h1>
            <Button onAdd={onAdd} showAdd={showAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'React Task Tracker'
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header