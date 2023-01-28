import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav(props) {

    const navigate = useNavigate();
    //console.log("Nav",props.onSearch);
    return (
        <div>
            <SearchBar onSearch={props.onSearch}/>
                <Link to={'\About'}>
                    <h6>About</h6>
                </Link>
            <Link to={'\Home'}>
                <h6>Home</h6>
            </Link>
            <button onClick={()=>{ navigate('/'); }}>Salir</button>
        </div>
    )
}