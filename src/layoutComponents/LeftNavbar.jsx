/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, []);
    // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    //   },
    return (
        <div>
            <h2 className='text-center mb-4 font-semibold'>All Categories({categories.length })</h2>
            <div className="flex flex-col flex-start gap-4">
                {
                    categories.map((eachCategory) =>
                         <NavLink to={`/category/${eachCategory.category_id}`} className="flex justify-start bg-white btn" key={eachCategory.category_id}>
                            {eachCategory.category_name}
                        </NavLink> 
                    )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;