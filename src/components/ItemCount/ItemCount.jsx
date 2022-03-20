import React from 'react'
import { useState } from "react"

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'




function ItemCount() {
    const initial = 1;
    const stock = 5;

    const [amount, setAmount] = useState (initial);

    const onAdd = (amount) => {
        alert(`Agregaste ${amount} productos`)
    };

    const addProduct = (num) => {
        setAmount(amount + num);
    };

  return (
      <Container>
        <div className="">
            <div className="">
                <Button
                    className=""
                    onClick={() => addProduct(-1)}
                    disabled = {amount === initial ? true : null}
                >
                -
                </Button>
                <span className="">{amount}</span>
                <Button
                    className="count-container_button"
                    onClick={() => addProduct(+1)}
                    disabled = {amount === stock ? true : null}
                >
                +
                </Button>
            </div>
            <Button
                variant="primary"
                className="button-primary"
                onClick={() => onAdd(amount)}
                disable={stock === 0 ? true :null}
            >
                    Agregar
            </Button>
        </div>
    </Container>
  )
}

export default ItemCount