import React, {FC} from "react"

import "./styles.sass"

interface BadgeProps {
    value: string | number;
}

const Badge: FC<BadgeProps> = ({value}) => {
    return <div className="badge-container text-center">
        {value}
    </div>
}

export default Badge