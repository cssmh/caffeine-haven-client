import axiosSecure from ".";

export const addUser = async (userData) => {
  const { data } = await axiosSecure.put("/add-user", userData);
  return data;
};
