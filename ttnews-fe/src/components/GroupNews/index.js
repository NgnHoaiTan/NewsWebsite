import React from "react";
import { Wrapper, Content } from "./Newest.styles";

const GroupNews=({header,children})=>(
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
);
export default GroupNews