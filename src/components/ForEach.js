const ForEach = () => {
    const arr = [0,1,2,3];
    const newArr = [];
    const timesTwo = (val) => {newArr.push(val * 2)};
    arr.forEach(timesTwo)
    return (
        <div className="flex scale">
            <h3>forEach:</h3>
            <code>{`const arr = [0,1,2,3]`}</code>
            <code>{`const newArr = [];`}</code>
            <code>{`const timesTwo = (val) => {newArr.push(val * 2)};`}</code>
            <code>{`arr.forEach(timesTwo)`}</code>
            <p>newArr = [{newArr.join(", ")}]</p>
        </div>
    )
}

export default ForEach;