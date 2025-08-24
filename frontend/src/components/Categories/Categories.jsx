import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import {useCategory} from "../../context/category-context.jsx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useFilter } from "../../context/filter-context.jsx";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 9,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 6,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 4,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 2,
//   }
// };

const Categories=()=>{

    const [categories, setCategories] = useState([]);
    const [numberOfCategoryToShow, sestNumberOfCategoryToShow] = useState(0);
    const {hotelCategory, setHotelCategory} = useCategory();
    const {filterDispatch} = useFilter();

    const handleRightButtonClick=()=>{
        sestNumberOfCategoryToShow(prev=>prev+10);
    }
    const handleLeftButtonClick=()=>{
        sestNumberOfCategoryToShow(prev=>prev-10);
    }

    const handleCategoryClick=(category)=>{
        // console.log(category);
        setHotelCategory(category);
    }
    // console.log(hotelCategory);

    const handleFilterClick=()=>{
        filterDispatch({
            type:"SHOW_FILTER_MODAL",
        })
    }

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await axios.get("https://travel-app-onjk.onrender.com/api/categories");
                // console.log(data);
                const categoriesToShow = data.slice(
                    numberOfCategoryToShow+10 > data.length ? data.length-10 : numberOfCategoryToShow, 
                    numberOfCategoryToShow > data.length ? data.length : numberOfCategoryToShow+10);
                setCategories(categoriesToShow);
            }catch(err){
                console.log(err);
            }
        })()
    },[numberOfCategoryToShow])

    return(
        <>
            <section className="categories d-flex align-center gap-large cursor-pointer">
                {
                    numberOfCategoryToShow >= 10 && 
                    <button className="button btn-category btn-left fixed cursor-pointer" onClick={handleLeftButtonClick}>
                        <span className="material-icons-outlined">keyboard_arrow_left</span>
                    </button>
                }
                
                {
                    categories && categories.map(({category}, idx) => <span className={`category ${category === hotelCategory ? "border-bottom b" : "b"}`} key={idx} onClick={()=>handleCategoryClick(category)}>{category}</span>)
                }

                {
                    numberOfCategoryToShow <= categories.length &&
                    <button className="button btn-category btn-right fixed cursor-pointer" onClick={handleRightButtonClick}>
                        <span className="material-icons-outlined">keyboard_arrow_right</span>
                    </button>
                }

                {/* <Carousel responsive={responsive} arrows={true} swipeable={true} draggable={false} infinite={false}>
                {
                    categories && categories.map(({ _id, category }) => (
                    <span key={_id} className={`${category === hotelCategory ? "category-color" : ""} item`} onClick={() => handleCategoryClick(category)}>
                        {category}
                    </span>
                    ))
                }
                </Carousel> */}

                <button className="button btn-filter d-flex align-center gap-small cursor-pointer fixed" onClick={handleFilterClick}>
                    <span className="material-icons-outlined">filter_alt</span>
                    <span>Filter</span>
                </button>
            </section>
        </>
    )
}

export default Categories;