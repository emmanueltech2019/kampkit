'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addQty, deleteCart } from "@/features/shopSlice";

const CartItems = () => {
    const { cart } = useSelector((state) => state.shop) || {};

    const dispatch = useDispatch();

    // delete cart item
    const deleteCartHandler = (id) => {
        dispatch(deleteCart(id));
    };

    // qty handler
    const qtyHandler = (id, qty) => {
        dispatch(addQty({ id, qty }));
    };

    return (
        <>
            {cart?.map((item) => (
                <tr className="cart-item" key={item.id}>
                    <td className="product-thumbnail">
                        {/* <Link href={`/shop/${item.id}`}> */}
                            <img 
                            src={`${item.imgf}`} alt="cart added product" />
                        {/* </Link> */}
                    </td>

                    <td className="product-name">
                        {/* <Link href={`/shop/${item.id}`}> */}
                            {item.title}
                        {/* </Link> */}
                    </td>

                    <td className="product-price">₦{item.price.max}</td>

                    <td className="product-quantity">
                        <div className="item-quantity">
                            <input
                                type="number"
                                className="qty"
                                name="qty"
                                defaultValue={item?.qty}
                                min={1}
                                onChange={(e) =>
                                    qtyHandler(item?.id, e.target.value)
                                }
                            />
                        </div>
                    </td>

                    <td className="product-subtotal"> 
                        <span className="amount">
                            ₦{(item?.qty * item?.price.max).toFixed(2)}
                        </span>
                    </td>

                    <td className="product-remove">
                        <button
                            onClick={() => deleteCartHandler(item?.id)}
                            className="remove"
                        >
                            <span className="flaticon-dustbin">Remove</span>
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default CartItems;
