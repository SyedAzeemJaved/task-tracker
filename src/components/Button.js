import '../custom.css'

const Button = ({onAdd, showAdd}) => {   
    return (
        <button
            onClick={onAdd}
            className={`btn ${showAdd ? 'redColor' : 'greenColor'}`} 
        >
            {showAdd ? 'Close' : 'Add'}
        </button>
    )
}

export default Button