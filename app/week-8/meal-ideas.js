"use client";

import { useState, useEffect, useCallback } from "react";

export default function MealIdea({ ingredient }) {
    let [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    };

    // ✅ Memoize `loadMealIdeas` using `useCallback`
    const loadMealIdeas = useCallback(async () => {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }, [ingredient]);  // ✅ Now depends on `ingredient`

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient, loadMealIdeas]);  // ✅ Include `loadMealIdeas` in dependencies

    return (
        <div>
            {meals.map((meal) => (
                <ul key={meal.idMeal}>  {/* ✅ Moved `key` to `ul` */}
                    <li className="text-blue-400 font-medium">
                        {meal.strMeal}
                    </li>
                </ul>
            ))}
        </div>
    );
}
