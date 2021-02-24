const { default: styled } = require("styled-components");

const ButtonDecrease = styled.button`
    border: unset;
    outline: unset;
    margin-right: 10px;
    font-weight: 700;
    color: black;
    &:active {
        color: white;
        background-color: black;
    }
`

export default ButtonDecrease;