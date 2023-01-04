const Filter = () => {
    const array = [1,2,3,4,5,6]
    const arrayString = "const array = [1,2,3,4,5,6]"
    const lessThanFour = (val) => {
        if (val < 4) {
            return val;
        }
    }
    const lessThanFourString = "const lessThanFour = (val) => {if (val < 4) {return val;}}"
    const filteredArray = array.filter(lessThanFour)
    const filteredArrayString = "const filteredArray = array.filter(lessThanFour)"
    return (
        <div className="mfr-part flex-col scale">
            <h2>Filter</h2>
            <code>{arrayString}</code>
            <code>{lessThanFourString}</code>
            <code>{filteredArrayString}</code>
            <p>filteredArray:  [{filteredArray.join(", ")}]</p>
        </div>
    )
}
export default Filter;