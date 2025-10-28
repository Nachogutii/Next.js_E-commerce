'use client'

import { QuantitySelector, SizeSelector } from "@/components"
import { Product, Size } from "@/interfaces"
import { useState } from "react"

interface Props {
    product: Product
}

export const AddToCart = ({ product }: Props) => {

    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState(1)
    const [posted, setPosted] = useState(false)

    const addToCart = () => {

        setPosted(true)

        if (!size) return
        console.log(size, quantity)
    }


    return (
        <>
            {/*Mensaje error*/}
            {posted && !size && (
                <span className="mt-2 text-red-500 fade-in">
                    Debe seleccionar una talla*
                </span>
            )}

            {/*Selector de tallas*/}
            <SizeSelector
                selectedSize={size}
                availableSizes={product.sizes}
                onSizeSelected={setSize}
            />

            {/*Selector de cantidad*/}
            <QuantitySelector
                quantity={quantity}
                onQuantityChanged={setQuantity}
            />

            {/*Boton de añadir al carrito*/}
            <button onClick={addToCart} className="btn-primary my-5 cursor-pointer">
                Añadir al carrito
            </button>

        </>
    )
}