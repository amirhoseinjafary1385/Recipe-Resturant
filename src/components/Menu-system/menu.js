import React, { useState } from "react";
import Search from "../Searching/Search";

{/* <RecipeList recipes={filteredRecipes} onSelectRecipe={handleRecipeSelect} /> */}
const Menu = ({addToCart}) => {
    const [message, setMessage] = useState("");//وضعیت برای پیام معرفی

    const dishes = [
        { id: 1, name: 'پیتزا مارگاریتا', price: 100000 },
        { id: 2, name: 'پاستا آلفردو', price: 200000 },
        { id: 3, name: 'کباب کوبیده', price: 150000 },
        { id: 4, name:  'پاستا کاپلینی', price: 250000 },
        { id: 5, name:  'کوبیده مرغ جوجه کباب', price: 190000 },
        
    ];
    
    const handleAddToCart = (dish) => {
        addToCart(dish);
        setMessage(`${dish.name} با موفقیت به سبد خرید شما اضافه شد!`); // تنظیم پیام با backticks
        setTimeout(() => setMessage(""), 3000); // پاک کردن پیام بعد از 3 ثانیه
    };

    return(
        <div className="menu">
            <h2>منو غذا</h2>
            {dishes.map(dish =>(
                <div key={dish.id} className="menu-item">
                    <h3>{dish.name}</h3>
                    <p>قیمت: {dish.price} تومان</p>                    
                    <button onClick={() => addToCart(dish)}>اضافه کردن به سبد خرید شما...</button>
                </div>               
            ))}
            {message && <div className="success-message">{message}</div>} {/* نمایش پیام */}
        </div>
    );
};

export default Menu;
