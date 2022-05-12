import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActionCreator } from "../../redux/actions";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <div className=" w-full md:w-2/5 mx-auto px-2 pt-40">
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
                <tr className="border-b border-purple-300 duration-300 ease-in-out hover:bg-gray-200">
                  <td className="px-2 object-cover h-20 w-20 ">
                    <img src={country.flags.png} alt={country.name.common} />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 align-middle">
                    {country.name.common}
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`countries/${country.name.common}`}>
                      <VisibilityOutlinedIcon color="primary" />
                    </Link>
                  </td>

                  <td>
                    <button
                      className="px-6 py-4 align-middle"
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
