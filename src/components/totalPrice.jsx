const { default: styled } = require("styled-components");

const TotalShoes = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 28px;
`
const formatPriceVN = (price) => {
    return new Intl.NumberFormat(
        'vi-VN', { style: 'currency', currency: 'VND' }
    ).format(price);
}

const TotalPrice = (props) => {
    const { total } = props;
    const priceFormated = formatPriceVN(total);

    return (
        <TotalShoes>{priceFormated}</TotalShoes>
    )
}

export default TotalPrice;