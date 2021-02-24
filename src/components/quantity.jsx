import ButtonDecrease from './buttonDecrease'
import ButtonIncrease from './buttonIncrease'
const { default: styled } = require("styled-components");

const QuantityShoes = styled.div`
    color: gray;
    height: 28px;
`
const checkQuantity = (q) => {
    return q > 1 ? true : false;
}

const Quantity = (props) => {
    const {quantity, handleDcreaseQuantity, handleIncreaseQuantity} = props;
    
    const checked = checkQuantity(quantity);
    return (
        <QuantityShoes>
            <ButtonDecrease 
                onClick={handleDcreaseQuantity}
                disabled={!checked}
            >
                -
            </ButtonDecrease>
            Quantity {quantity}
            <ButtonIncrease
                onClick={handleIncreaseQuantity}
            >
                +
            </ButtonIncrease>
        </QuantityShoes>
    )
}

export default Quantity;