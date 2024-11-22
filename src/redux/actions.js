export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PURCHASE_COURSE = 'PURCHASE_COURSE';

export const addToCart = (course) => ({
  type: ADD_TO_CART,
  payload: course,
});

export const removeFromCart = (courseId) => ({
  type: REMOVE_FROM_CART,
  payload: courseId,
});

export const purchaseCourse = (course) => ({
  type: PURCHASE_COURSE,
  payload: course,
});