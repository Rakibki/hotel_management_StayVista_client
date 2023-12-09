import useAxuisSecure from "../hooks/useAxuisSecure"

const axiosSecure = useAxuisSecure();

export const getPaymentSecret = async (price) => {
  const res = axiosSecure.post("/carete-payment-intent", {price})
  return res
}

export const savePaymentInfo = async (paymentData) => {
  const res = axiosSecure.post("/bookings", paymentData)
  return res
}


// export const updateStatus = async (id, status) => {
//   const res = axiosSecure.patch(`/room-status/${id}`, {status})
//   return res
// }

export const getMyBookings = async (email) => {
  const res = await axiosSecure.get(`/my-bookings/${email}`)
  return res.data
}

export const getanageBookins = async (email) => {
  const res = await axiosSecure.get(`/managege-booking/${email}`)
  return res.data
}
