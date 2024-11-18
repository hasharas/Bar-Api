import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartRemoveAction';
const Cart = () => {
      const cartItems = useSelector((state) => state.cart.cartItems || []);
      const dispatch = useDispatch();
      const handleRemoveItem = (itemId) => {
            dispatch(removeFromCart(itemId)); // Dispatch the action to remove the item
      };

      return (
            <div className="container h-auto mx-auto mb-11 p-4">
                  <h2 className="text-3xl font-bold mb-4 text-[#009498]">Your Drink Item</h2>
                  {cartItems.length === 0 ? (
                        <p>No items in cart.</p>
                  ) : (
                        <table className="w-full border-collapse  ">
                              <thead className='text-white ' style={{
                                    backgroundImage: "linear-gradient(to right, black ,#009498 )",
                              }}>
                                    <tr>
                                          <th className=" px-4 border-b border-gray-300 py-2">Drink Image</th>
                                          <th className=" px-4 border-b border-gray-300 py-2">Drink Name</th>
                                          <th className=" px-4 border-b border-gray-300 py-2">Item Count</th>
                                          <th className="border-b border-gray-300 px-4 py-2"></th>

                                    </tr>
                              </thead>
                              <tbody className=''>
                                    {cartItems.map((item, index) => (
                                          <tr key={index} className=" hover:bg-gray-100 bg-gray-50">
                                                <td className=" border-b  border-gray-300 px-4 py-2">
                                                      <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-16 h-16 rounded mx-auto"
                                                      />
                                                </td>
                                                <td className=" border-b border-gray-300 px-4 py-2 text-center text-gray-600 ">{item.name}</td>
                                                <td className="border-b border-gray-300 px-4 py-2 text-center">
                                                      <button
                                                            className="  w-8 bg-[#009498] mr-2 text-white px-2 py-2 rounded hover:bg-[#36989b] font-bold"
                                                      //     onClick={() => handleDecrement()}
                                                      >
                                                            -
                                                      </button>
                                                      <span className="mx-2">3</span>
                                                      <button
                                                            className="  w-8 bg-[#009498] ml-2 text-white px-2 py-2 rounded hover:bg-[#36989b]  font-bold"
                                                      //     onClick={() => handleIncrement()}
                                                      >
                                                            +
                                                      </button>
                                                </td>

                                                <td className=" border-gray-300 border-b px-4 py-2 text-center ">
                                                      <button
                                                            onClick={() => handleRemoveItem(item.id)}
                                                            className="text-white  justify-center items-center px-2 py-[6px] text-center bg-red-500 hover:bg-red-700 w-[100px] h-[40px] rounded"

                                                      >
                                                            Remove
                                                      </button>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>

                  )}
            </div>
      );
};

export default Cart;
