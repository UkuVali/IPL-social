export function passwordChecker(password) {
    // Vérifi la longueur minimale
    if (password.lenght < 8){
        return false;
    }
    // Vérifi si il a character special
    const CharSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(password);
    if (!CharSpecial) {
      return false;
    }
    // Vérifi si il a chiffre
    const chiffre = /\d/.test(password);
    if (!chiffre) {
      return false;
    }
    // Vérifi si il a pas ipl dans le string
    const hasIpl = password.toLowerCase().includes("ipl");
    if (hasIpl) {
      return false;
    }
    // Vérification finale
    return true;
}