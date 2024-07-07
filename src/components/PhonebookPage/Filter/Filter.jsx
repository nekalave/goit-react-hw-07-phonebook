import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filterSlice';

const Filter = () => {

  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type='text' name='filter' onChange={handleChange} />
    </label>
  );
};

export default Filter;
