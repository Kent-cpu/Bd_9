const handleChange = (event, setData) => {
    setData(currentData => {
        return {...currentData, [event.target.name]: event.target.value};
    })
}

export default handleChange;