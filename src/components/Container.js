import * as React from "react";
import styled from "styled-components";

export const Container = styled(({id, className, children}) => {
    return (
        <div id={id} className={className}>
            {children}
        </div>
    )
})`
    box-sizing: border-box
`