import React from "react";
import "./ToggleImages.css";
import { useState } from "react";

function ToggleImages({Item}) {

    const [active, setActive] = useState(true);

    const handleChangeActive  = () => {
        setActive((enableImg) => {
            return !enableImg;
        });
    };

    return (
        <>
            <img
                id={Item.id}
                className={active ? 'selected' : 'unselected'}
                src={active ? Item.cardsReverse.sakuraReverse : Item.sakuraCard}
                alt="Sakura Taro Card"
                onClick={() => {handleChangeActive(); this.setSelected();}}
                key={Item.key} 
            />
        </>
    );
}

export default ToggleImages;