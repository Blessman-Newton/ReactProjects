import './Search.css';

function Search() {
    const inputType = "text"
    return (
       <form action="">
            {/* <h4>Premium Properties At Your Hands</h4> */}
            <input type={inputType} placeholder="City/Street" />
            <input type={inputType} placeholder="Property Type" />
            <input type={inputType} placeholder="Price Range" />
            <button>Search</button>
       </form>
    );
};

export default Search;