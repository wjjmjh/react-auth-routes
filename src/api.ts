export const WhoAmIRequest = async () => {
  return localStorage.getItem("username");
};
