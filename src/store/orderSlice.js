import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    // Let's use an object to make it easy to work with it
    meals: {},
  },
  reducers: {
    updateOrder: (state, action) => {
      const mealKey = `id-${action.payload.idMeal}`;
      // If meal is present, update count or remove item
      if (state.meals.hasOwnProperty(mealKey) && action.payload.count > 0) {
        state.meals[mealKey].count = action.payload.count;
      } else if (
        state.meals.hasOwnProperty(mealKey) &&
        action.payload.count <= 0
      ) {
        delete state.meals[mealKey];
      }
      // Else, add full payload if count is > 0
      else if (action.payload.count > 0) {
        state.meals[mealKey] = action.payload;
      }
    },
    removeMeal: (state, action) => {
      // TBD - Add ability to remove the meal in one go, without changing the quantity
    },
  },
});

export const { updateOrder, removeMeal } = orderSlice.actions;

export default orderSlice.reducer;
