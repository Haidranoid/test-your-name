import React, {FC} from "react"
import searchLogo from "../../static/images/search.svg"
import "./styles.sass"

const SearchBar: FC = () => {
    return <div className="searchbar-container">
        <div className="flex" style={{justifyContent: "center", position: "relative"}}>
            <input type="text" className="searchbar-input light-shadow"
                   placeholder=" Search"/>
            <div className="searchbar-logo">
                <img src={searchLogo} alt="not found" width="100%" height="100%"/>
            </div>
        </div>
    </div>
}

export default SearchBar