import { useState } from 'react';
import ListItem from '../ListItem';
import { List } from './BigList.style';

const list = Array.from({length: 30000}, (_, index) => index + 1);

const BigList = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelect = (item) => {
        if(selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    return (
        <List>
            {list.map(item => 
                <ListItem item={item} onSelect={handleSelect} selected={selectedItems.includes(item)}/>
            )}
        </List>
    )
}

export default BigList;