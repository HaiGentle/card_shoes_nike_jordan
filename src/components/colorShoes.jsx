const { default: styled } = require("styled-components");

const ColorShoes = styled.div`
    color: gray;
    height: 28px;
`
const Color = (props) => {
    const {color} = props;
    return (
        <ColorShoes>{color}</ColorShoes>
    )
}

export default Color;