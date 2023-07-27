export const Filter = ({ filter, changeFilter }) => {
    return (
        <label>
            <span style={{'marginRight': '4px'}}>Filter</span>
            <input type="text" name='filter' value={filter} onChange={changeFilter} />
        </label>
    )
}