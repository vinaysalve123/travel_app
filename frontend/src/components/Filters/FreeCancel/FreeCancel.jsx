import { useFilter } from "../../../context/filter-context"
import "./FreeCancel.css"


const FreeCancel=()=>{
    const {isCancellable, filterDispatch} = useFilter();

    const handleCancelChange=(event)=>{
        filterDispatch({
            type: "CANCELLATION",
            payload: event.target.checked
        })
    }

    console.log(isCancellable);

    return(
        <div className="filter-container">
            <div className="d-flex align-center gap-larger">
                <span className="filter-label">Free Cancellation</span>
                <label className="slide">
                    <input type="checkbox" checked={isCancellable} value={isCancellable} onChange={handleCancelChange}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default FreeCancel;