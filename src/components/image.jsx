const { default: styled } = require("styled-components");

const Image = styled.div`
    width: 150px;
    height: 150px;
    background: url(${(props) => props.image}) 50% 50%;
`

export default Image;