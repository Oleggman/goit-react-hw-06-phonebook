import { useDispatch, useSelector } from "react-redux";
import { InputFilter, FilterTitle, FilterBox } from "./Filter.styled";
import { getFilter } from "redux/selectors";
import { changeFilter } from "redux/filterSlice";

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <FilterTitle>Find contact by name</FilterTitle>
      <InputFilter
        placeholder="Filter..."
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))} />
    </FilterBox>
  );
}