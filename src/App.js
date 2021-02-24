import { useState } from 'react';
import './App.css';
import Card from './components/index'
import Img from './images/CW7183_100_A_PREM.jpg'

function App() {
  const [quantity,setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((preventQuantity) => {
      return preventQuantity + 1;
    })
  }

  const handleDcreaseQuantity = () => {
    if(quantity <=1) {
      return
    }
    setQuantity((preventQuantity) => {
      return preventQuantity - 1;
    })
  }

  return (
    <Card 
      image={Img}
      title="Air Jordan 4 Retro SE"
      gender="Women's Shoe"
      color="Sail/Starfish/Light Smoke Grey/Black"
      quantity={quantity}
      total={5589000*quantity}
      handleDcreaseQuantity={handleDcreaseQuantity}
      handleIncreaseQuantity={handleIncreaseQuantity}
    />
  );
}

export default App;
