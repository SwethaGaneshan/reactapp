class Authentication {
  getLoggedInUser() {
    var uname = sessionStorage.getItem("AuthenticatedUser");
    return uname;
  }
  setUserLoggedIn(uname) {
    sessionStorage.setItem("AuthenticatedUser", uname);
  }
  removeUser() {
    sessionStorage.remove("AuthenticatedUser");
  }
  isUseLoggedIn() {
    var user = this.getLoggedInUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
export default new Authentication();
