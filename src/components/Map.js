import * as React from 'react'
import { Container } from './Container'
import styled from "styled-components";

export const Map = styled(() => {
    return (
        <Container id='map'>
            <svg width='700' height='700'/>
        </Container>
    )
})`
    margin-right: 30px
`

