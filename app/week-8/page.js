"use client";

import { useState } from "react";
import NewItem3 from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

import MealIdea from "./meal-ideas";


export default function Page() {

    const [items, setItems] = useState(itemsData);

    const [selectedItemName, setSelectedItemName] = useState("");
    // const [selectedItemName, setSelectedItemName] = useState(items);

    // const handleItemSelect = (selectedItemName)  => {
    //     setSelectedItemName()
    // };

    const handleItemSelect = (itemName)  => {
        setSelectedItemName(itemName)
    };

    const handleAddItem = (newItem)  => {
        setItems([...items, newItem]);
    };

    return (
        <main>
            <NewItem3 onAddItem = {handleAddItem}></NewItem3>


            <ItemList 
             items = {items}
             onItemSelect = {handleItemSelect}></ItemList>

            {selectedItemName && <MealIdea ingredient={selectedItemName} />}
        </main>
    )
}