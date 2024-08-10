import styled from "styled-components";

export default function Navbar() {
    return (
        <div>
            <StyledHeader>
                header
            </StyledHeader>
        </div>
    )
}

const StyledHeader = styled.header`
    background: pink;
    color: red;
    padding: 16px;
    font-size: 24px;
`;
