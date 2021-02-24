const { default: styled } = require("styled-components");

const ButtonIncrease = styled.button`
    border: unset;
    outline: unset;
    margin-left: 10px;
    font-weight: 500;
    &:active {
        color: white;
        background-color: black;
    }
`

export default ButtonIncrease;