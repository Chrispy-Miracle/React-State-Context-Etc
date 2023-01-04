const Reduce = () => {
    const array = [0,1,2,3,4]
    const arrayString = "const array = [0,1,2,3,4]"
    const addTwo = (a, b) => {
        return a + b
    }
    const addTwoString = "const addTwo = (a, b) => {return a + b}"
    const reducedArray = array.reduce(addTwo)
    const reducedArrayString = "const reducedArray = array.reduce(addTwo)"
    return (
        <div className="mfr-part flex-col scale">
            <h2>Reduce</h2>
            <code>{arrayString}</code>
            <code>{addTwoString}</code>
            <code>{reducedArrayString}</code>
            <p>reducedArray: {reducedArray}</p>
        </div>
    )
}
export default Reduce;