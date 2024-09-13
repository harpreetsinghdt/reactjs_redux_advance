import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotify({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-redux-advance-376cb-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotify({
          status: "success",
          title: "Success",
          message: "Cart data sent successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotify({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotify({
    //     status: "pending",
    //     title: "Fetching...",
    //     message: "Fetching cart data.",
    //   })
    // );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-redux-advance-376cb-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) {
        throw new Error("Fetching cart data failed!");
      }

      const resData = await res.json();
      return resData;
    };

    try {
      const cartData = await sendRequest();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      // dispatch(
      //   uiActions.showNotify({
      //     status: "success",
      //     title: "Success",
      //     message: "Cart data fetched successfully.",
      //   })
      // );
    } catch (error) {
      dispatch(
        uiActions.showNotify({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
