import './Search.css';
function Search() {
    return (
       <form action="">
            <input type="text" placeholder="City/Street" />
            <input type="text" placeholder="Property Type"/>
            <input type="text" placeholder="Price Range"/>
            <button>Search</button>
       </form>
    );
};

export default Search;