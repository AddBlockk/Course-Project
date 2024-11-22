import { ADD_TO_CART, REMOVE_FROM_CART, PURCHASE_COURSE } from "./actions";

const initialState = {
  cart: [],
  purchasedCourses: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((course) => course.title !== action.payload),
      };
    case PURCHASE_COURSE:
      return {
        ...state,
        purchasedCourses: [...state.purchasedCourses, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
