import React from 'react'
import Body from './body'
import ColorShoes from './colorShoes'
import Gender from './genderShoes'
import Image from './image'
import Quantity from './quantity'
import Title from './title'
import Total from './totalPrice'

const { default: styled } = require("styled-components");

const Card = styled.div`
    display: flex;
    width: 716px;
    height: 150px;
    margin: auto;
    margin-top: 100px;
    position: relative;
`

const Index = (props) => {
    const {
        image, title, gender, color, quantity, total,
        handleDcreaseQuantity, handleIncreaseQuantity
    } = props;
    return (
        <Card>
            <Image image={image}/>
            <Body>
                <Title title={title}/>
                <Gender gender={gender}/>
                <ColorShoes color={color}/>
                <Quantity
                    quantity={quantity}
                    handleDcreaseQuantity={handleDcreaseQuantity}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                />
            </Body>
            <Total total={total}/>
        </Card>
    )
}

export default Index;