import React from 'react'

function TodoForm(props) {
    const [input, setInput] = React.useState(props.edit ? props.edit.value : '')

    const inputRef = React.useRef(null)

    React.useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('')
    }


    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder='Update your todo'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit' onClick={handleSubmit}>Update</button>
                </>
            ) : (
                    <>
                        <input
                            type="text"
                            placeholder='Add a todo'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button' onClick={handleSubmit}>Add todo</button>)
                    </>
                )}


        </form>
    )
}

export default TodoForm