import { useState, useCallback } from 'react';
import ListItem from '../ListItem/ListItem';
import { List } from './BigList.style';

const list = Array.from({length: 30000}, (_, index) => index + 1);

const BigList = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    // Without a useCallback the handleSelect function is a new function on every render, meaning
    // every ListItem will be rendered on each render of BigList even if ListItem uses memo.
    const handleSelect = useCallback((item) => {
        // The state update that happens here requires access to the existing state value to either add or remove an item from the list.
        // The most obvious thing to do here would be to add selectedItems as a dependency of useCallback and then use selectedState within this function.
        // The problem with this is that this will cause react to get a new handleSelect callback each time the selectedItems state is changed.
        // This causes all the ListItems to be rerendered even if useMemo is used as the callback changes every time an item is clicked.
        // Using a functional setState allows you to get the existing state as a parameter to your setState function meaning its not required as a dependency of useCallback.
        setSelectedItems(currentlySelected => {
            if(currentlySelected.includes(item)) {
                return currentlySelected.filter(selectedItem => selectedItem !== item);
            } else {
                return [...currentlySelected, item];
            }
        });
    }, []);

    return (
        <List>
            {list.map(item => 
                <ListItem item={item} onSelect={handleSelect} selected={selectedItems.includes(item)}/>
            )}
        </List>
    )
}

export default BigList;