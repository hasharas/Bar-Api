const initialState = {
      cartItems: [], // Initialize with  empty array
};

const cartReducer = (state = initialState, action) => {
      switch (action.type) {
            case 'ADD_TO_CART':
                  return {
                        ...state,
                        cartItems: [...state.cartItems, action.payload], // Add new item to cart
                  };
            case 'REMOVE_FROM_CART':
                  return {
                        ...state,
                        cartItems: state.cartItems.filter(item => item.id !== action.payload.id), // Remove item
                  };
            default:
                  return state;
      }
};

export default cartReducer;
