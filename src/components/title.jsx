const { default: styled } = require("styled-components");

const TitleShoes = styled.div`
    height: 28px;
    font-weight: 500;
`

const Title = (props) => {
    const {title} = props;
    return (
        <TitleShoes>{title}</TitleShoes>
    )
}

export default Title;