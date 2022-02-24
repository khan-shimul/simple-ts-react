import React from 'react';
import List from './List';

const Lists = () => {
    const items: string[] = ['Shimul', 'Khan'];

    const onClick = (text: string): void => {
        alert(text)
    }
    return (
        <div>
            <List items={items} onClick={onClick}></List>
        </div>
    );
};

export default Lists;