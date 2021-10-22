import React, {FC, useState} from "react"
import searchLogo from "../../static/images/search.svg"
import "./styles.sass"

interface SearchBarProps {
    onSubmit: (input: string) => void
}

const SearchBar: FC<SearchBarProps> = ({onSubmit}) => {

    const [input, setInput] = useState('')

    return <div className="searchbar-container">
        <div className="flex"
             style={{justifyContent: "center", position: "relative"}}>
            <input type="text"
                   className="searchbar-input light-shadow"
                   placeholder=" Search"
                   value={input}
                   onChange={e => setInput(e.target.value as string)}
                   onKeyDown={e => {
                       if (e.keyCode === 13)
                           onSubmit(input)
                   }}/>
            <div className="searchbar-logo"
                 onClick={() => onSubmit(input)}>
                <img src={searchLogo}
                     alt="not found"
                     width="100%"
                     height="100%"/>
            </div>
        </div>
    </div>
}

export default SearchBar