const { default: styled } = require("styled-components");

const GenderShoes = styled.div`
    color: gray;
    height: 28px;
`
const Gender = (props) => {
    const {gender} = props;
    return (
        <GenderShoes>{gender}</GenderShoes>
    )
}

export default Gender;