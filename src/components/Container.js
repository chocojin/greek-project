import * as React from "react";

export const Container = ({id, className, children}) => {
    return (
        <div id={id} className={className}>
            {children}
        </div>
    )
}