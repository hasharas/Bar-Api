export const removeFromCart = (itemId) => ({
      type: 'REMOVE_FROM_CART',
      payload: { id: itemId },
});
