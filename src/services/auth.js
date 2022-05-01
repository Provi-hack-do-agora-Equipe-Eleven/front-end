export const isAuthenticated = () => localStorage.getItem("token") !== null;
export const getToken = () => localStorage.getItem("token");
export const login = (token, id) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userID", id);
};
export const logout = () => localStorage.clear();
