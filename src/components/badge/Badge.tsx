import React, {FC} from "react"

import "./styles.sass"

interface BadgeProps {
    value: string | number;
}

const Badge: FC<BadgeProps> = ({value}) => {
    return <div style={{display:"inline-block"}}>
        <div className="badge-container shadow-badge text-center">
            {value}
        </div>
    </div>
}

export default Badge