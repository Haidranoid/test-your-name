import React, {FC, useState} from "react"
import clsx from "clsx";
import arrows from "../../static/images/arrows.svg"

import "./styles.sass"

interface SelectProps {
    options: string[];
    onChange: (option: string) => void;
}

const Select: FC<SelectProps> = ({options, onChange}) => {

    const [value, setValue] = useState('')
    const [openMenu, setOpenMenu] = useState(false)

    const handleOptionSelected = (option: string) => {
        setValue(option)
        setOpenMenu(false)
        onChange(option)
    }

    return <div className="filter-container">
        <div className="filter-container-title">
            {value ? value : 'Filter by'}
        </div>
        <div className="filter-container-arrows" onClick={() => setOpenMenu(v => !v)}>
            <img src={arrows} alt="not found" width="8px" height="10px"/>
        </div>
        <div className={clsx("filter-container-content", {"display-block": openMenu})}>
            {options.map(option => <div key={option} onClick={handleOptionSelected.bind(this, option)}>
                {option}
            </div>)}
        </div>
    </div>
}

export default Select