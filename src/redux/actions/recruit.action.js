import apiService from "../../authInterceptor/authAxios";

export const SET_COMPANY_INFO = "SET_COMPANY_INFO";

export const buyPlan =
  ({ planId }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post(
        "/payment/purchase_plan",
        { planId }
      );
      console.log(status, data, 'actions')
      if (status == 200) return data.data;
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

export const getCompanyInfo = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/jobs/recruiter/company");
    if (status == 200) {
      const { name, logo } = data.data[0];
      dispatch(setCompanyInfo({ name, logo }));
      return true;
    }
  } catch (e) {
    throw e;
  }
};

export const setCompanyInfo = ({ name, logo }) => ({
  type: SET_COMPANY_INFO,
  name,
  logo,
});

export const getPlans = () => async (dispatch) => {
  try {
    const { status, data } = await apiService().get("/plans/get");
    if (status == 200) return data.data;
  } catch (e) {
    throw e;
  }
};
