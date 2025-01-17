export function passwordChecker(password) {

    if (password.lenght < 8){
        return false;
    }
    
    
    const CharSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(password);
    if (!CharSpecial) {
      return false;
    }

    const chiffre = /\d/.test(password);
    if (!chiffre) {
      return false;
    }
    const hasIpl = password.toLowerCase().includes("ipl");
    if (hasIpl) {
      return false;
    }
      











    return true;

}