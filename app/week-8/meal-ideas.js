
"use-client"
import {
    useState,
    useEffect,
} from "react";

export default function MealIdea({ingredient}){

    let [meals, setMeals] = useState([]);

    const fetchMealIdeas = async(ingredient)  => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

        const data = await response.json();

        return data.meals || [];

        // const dish = Object.keys(data.message);
        // setMeals(dish);
    }

    const loadMealIdeas = async () => {
        if (ingredient) {
            // Clean the ingredient (strip spaces and emojis)
            const cleanIngredient = ingredient
              .trim()  // Remove leading/trailing spaces
              .replace(/[^\w\s]/g, ''); // Remove special characters/emojis
      
            const fetchedMeals = await fetchMealIdeas(cleanIngredient);
            setMeals(fetchedMeals); // Update state with fetched meals
          }
    }

    
    useEffect(()=> {
        loadMealIdeas();
    } ,[ingredient]);

    useEffect
    return(
        <div>
            {meals.map((meal)=> 
             <ul>
                <li key={meal.idMeal}> 
                    {meal.strMeal}
                </li>
             </ul>)}
        </div>
    )
}