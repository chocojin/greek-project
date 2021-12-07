import * as React from "react";
import styled from "styled-components";

export const Container = styled(({id, className, children, style}) => {
    return (
        <div id={id} className={className} style={style}>
            {children}
        </div>
    )
})`
    box-sizing: border-box
`