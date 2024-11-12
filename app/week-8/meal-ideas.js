
"use client"
import {
    useState,
    useEffect,
} from "react";


export default function MealIdea({ingredient}){

    let [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    };

    const loadMealIdeas = async () => {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }

    
    useEffect(()=> {
        if (ingredient) {
        loadMealIdeas();
        }
    } ,[ingredient]);


    return(
        <div>
            {meals.map((meal)=> 
             <ul>
                <li 
                 className="text-blue-400
                 font-medium"
                 key={meal.idMeal}> 
                    {meal.strMeal}
                </li>
             </ul>)}
        </div>
    )
}