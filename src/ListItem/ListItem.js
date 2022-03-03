import { memo } from 'react';
import { Item } from './ListItem.style';


const ListItem = ({ item, onSelect, selected }) => {
    return <Item onClick={() => onSelect(item)} selected={selected}>List Item: {item}</Item>
};

// Using memo here means that each item in the list will only be updated when the props change.
// Without it every item in the list will be rerendered whenever the BigList component is rerendered.
export default memo(ListItem);