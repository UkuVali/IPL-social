export function passwordChecker(password) {

    if (password.lenght < 8){
        return false;
    }

    const hasIpl = password.toLowerCase().includes("ipl");
    if (hasIpl) {
      return false;
    }
      











    return true;

}