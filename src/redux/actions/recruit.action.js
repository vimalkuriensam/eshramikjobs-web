import apiService from "../../authInterceptor/authAxios";

export const buyPlan = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().post("/payment/purchase_plan");
    if (status == 200) return data;
  } catch (e) {
    throw e;
  }
};

export const confirmOrder =
  ({ razorpay_payment_id }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(
        "/payment/order_validate",
        {
          razorpay_payment_id,
        }
      );
      if (status == 200) return data;
    } catch (e) {
      throw e;
    }
  };
