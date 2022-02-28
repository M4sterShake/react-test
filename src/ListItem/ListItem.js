import { Item } from './ListItem.style';


const ListItem = ({ item, onSelect, selected }) => {
    return <Item onClick={() => onSelect(item)} selected={selected}>List Item: {item}</Item>
};

export default ListItem;
