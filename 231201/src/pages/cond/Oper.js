function Oper(props) {
    const cars = props.cars;
    return (
        <>
        <h1>차고</h1>
        {cars.length > 0 && <h2>you have {cars.length} cars in your garage.</h2>}
        </>
    )
}

export default Oper