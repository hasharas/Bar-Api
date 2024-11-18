
const loadCartFromLocalStorage = () => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
      cartItems: loadCartFromLocalStorage(), // Initialize with saved cart items from localStorage
};

const cartReducer = (state = initialState, action) => {
      switch (action.type) {
            case 'ADD_TO_CART':
                  const newCart = [...state.cartItems, action.payload];
                  localStorage.setItem('cart', JSON.stringify(newCart));
                  return {
                        ...state,
                        cartItems: newCart,
                  };

            case 'REMOVE_FROM_CART':
                  const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id);
                  localStorage.setItem('cart', JSON.stringify(updatedCart)); // updated cart to localStorage
                  return {
                        ...state,
                        cartItems: updatedCart,
                  };

            default:
                  return state;
      }
};

export default cartReducer;
