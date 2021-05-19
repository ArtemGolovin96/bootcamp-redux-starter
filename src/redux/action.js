export function  addGoodToCart (id) {
    return {
        type: 'ADD_TO_CART',
        payload: { id }
    }
}

export function  deleteGoodFromCart (id) {
    return {
        type: 'DEL_TO_CART',
        payload: { id }
    }
}