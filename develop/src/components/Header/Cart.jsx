import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActionCreator } from "../../redux/actions";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <div className=" w-full md:w-1/2 mx-auto px-2 pt-40">
      <div className="overflow-hidden">
        {cartItems.length === 0 && (
          <div>
            <p className="flex justify-center items-center text-2xl">
              Your cart box is empty
            </p>
          </div>
        )}
        <table className="min-w-full">
          {cartItems &&
            cartItems.map((country) => (
              <tbody key={country.name.common}>
                <tr className="bg-white border-b hover:bg-gray-100">
                  <td>
                    <img
                      className="object-cover h-10 w-10"
                      src={country.flags.png}
                      alt={country.name.common}
                    />
                  </td>
                  <td>{country.name.common}</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch(cartActionCreator.removeFromCart(country))
                      }
                    >
                      <DeleteForeverIcon color="error" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Cart;
