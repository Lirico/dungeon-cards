import React, { useState } from 'react';

import Dropdown from './ui/dropdown';
import ItemsDropdown from './ui/itemsdropdown';
import Button from './ui/button';

import {
    Box
} from '@material-ui/core';


const Form = () => {

    const [ pj, setPj ] = useState({
        name: '',
        class: '',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
    })

    const handleChange = e => {
        setPj({
            ...pj,
            [e.target.name] : e.target.value
        })
    }
    
    return ( 
        <Box>
            <form>
                <Box mb={0.3}>
                    <label 
                        style={{
                            marginLeft: "0.5rem", 
                            webkitTextStroke: "1px black"
                        }}
                    >Name your character</label>
                </Box>
                <input
                    type="text" 
                    name="name"
                    className="rpgui-dropdown" 
                    style={{marginBottom: "0.5rem", paddingLeft: "0.5rem"}}
                    onChange={handleChange}
                />
                <Dropdown 
                    name="class"
                    title="Select your class" 
                    characters={characters}
                    onChange={handleChange}
                />
                <Box mb={0.5} mt={2}>
                    <label 
                    style={{
                        marginLeft: "0.5rem", 
                        webkitTextStroke: "1px black"
                        }}
                    >Choose 4 initial items</label>
                </Box>
                <ItemsDropdown 
                    name="item1"
                    title="Select an item" 
                    items={items}
                    onChange={handleChange}
                />
                <ItemsDropdown 
                    name="item2"
                    title="Select an item" 
                    items={items}
                    onChange={handleChange}
                />
                <ItemsDropdown 
                    name="item3"
                    title="Select an item" items={items}
                    onChange={handleChange}
                />
                <ItemsDropdown 
                    name="item4"
                    title="Select an item" 
                    items={items}
                    onChange={handleChange}
                />
                <Box align="center" mt={3}>
                    <Button type="button" value="Create" />
                </Box>
            </form>        
        </Box>
     );
}
 
export default Form;

const characters = [
    {
        id: 1,
        value: 'Barbarian',
    },
    {
        id: 2,
        value: 'Cultist',
    },
    {
        id: 3,
        value: 'Mage',
    },
    {
        id: 4,
        value: 'Necromancer',
    },
    {
        id: 5,
        value: 'Paladin',
    },
    {
        id: 6,
        value: 'Ranger',
    },
    {
        id: 7,
        value: 'Rogue',
    },
    {
        id: 8,
        value: "Warrior",
    },
    ];
    
    const items = [
        {
            id: 1,
            value: 'Healing Potion',
        },
        {
            id: 2,
            value: 'Mana Potion',
        },
        {
            id: 3,
            value: 'Torch',
        },
        {
            id: 4,
            value: 'Gold (10 coins)',
        },
        {
            id: 5,
            value: 'Cheese (food)',
        },
        {
            id: 6,
            value: 'Meat (food)',
        },
        {
            id: 7,
            value: 'Telep. Scroll',
        },
        {
            id: 8,
            value: "Boots of Speed",
        },
        ];