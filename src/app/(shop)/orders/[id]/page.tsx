import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface Props {
    params: {
        id: string
    }
}

export default function ({ params }: Props) {

    const { id } = params;

    //Todo: verificar

    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">

                <Title title={`Pedido ${id}`} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/*Carrito*/}
                    <div className="flex flex-col mt-5">

                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-sm font-bold text-white mb-5",
                                {
                                    'bg-red-500': false,
                                    'bg-green-700': true,
                                }
                            )
                        }>
                            <IoCardOutline size={30} />
                            {/* <span className="mx-2">Pendiente de pago</span> */}
                            <span className="mx-2">Pagado</span>

                        </div>


                        {/*Productos*/}
                        {
                            productsInCart.map(product => (
                                <div key={product.slug} className="flex mb-5">
                                    <Image
                                        src={`/products/${product.images[0]}`}
                                        width={100}
                                        height={100}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                        }}
                                        alt={product.title}
                                        className="mr-5 rounded"
                                    />

                                    <div>
                                        <p>{product.title}</p>
                                        <p>${product.price} x 3</p>
                                        <p className="font-semibold">Subtotal: ${product.price * 3}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                    {/*Checkout*/}
                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl mb-2 font-medium">Dirección de entrega</h2>
                        <div className="mb-10">
                            <p>Nacho Gutiérrez</p>
                            <p>Calle Colón, 123</p>
                            <p>Calle Florencia, 456</p>
                            <p>CP 46001</p>
                            <p>Valencia</p>
                            <p>España</p>
                            <p>963 333 333</p>
                        </div>

                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />


                        <h2 className="text-2xl mb-2 font-medium">
                            Resumen de la compra
                        </h2>

                        <div className="grid grid-cols-2">
                            <span>Nº productos</span>
                            <span className="text-right">3 artículos</span>

                            <span>Subtotal</span>
                            <span className="text-right">$ 100</span>

                            <span>Impuestos (15%)</span>
                            <span className="text-right">$ 100</span>

                            <span className="mt-5 text-2xl">Total:</span>
                            <span className="mt-5 text-2xl text-right">$ 100</span>
                        </div>

                        <div className="mt-5 mb-2 w-full">

                            <div className={
                                clsx(
                                    "flex items-center rounded-lg py-2 px-3.5 text-sm font-bold text-white mb-5",
                                    {
                                        'bg-red-500': false,
                                        'bg-green-700': true,
                                    }
                                )
                            }>
                                <IoCardOutline size={30} />
                                {/* <span className="mx-2">Pendiente de pago</span> */}
                                <span className="mx-2">Pagado</span>

                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};