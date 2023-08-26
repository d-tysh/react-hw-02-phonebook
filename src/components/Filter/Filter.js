import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";

export const Filter = () => {
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const changeFilter = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <label>
            <span style={{'marginRight': '4px'}}>Filter</span>
            <input type="text" name='filter' value={filter} onChange={changeFilter} />
        </label>
    )
}