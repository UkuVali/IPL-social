import { passwordChecker} from "../passwordcheck";


describe('passwordChecker', () => {
    
    it('devrait renvoyer false pour les mots de passe de moins de 8 caractères', () => {
      expect(passwordChecker('short')).toBe(false);// test la longueur minimale
    });
  
    it('devrait renvoyer false pour les mots de passe sans caractères spéciaux', () => {
      expect(passwordChecker('long12345')).toBe(false);// test si il a character special
    });
  
    it('devrait renvoyer false pour les mots de passe sans chiffres', () => {
      expect(passwordChecker('special!@#')).toBe(false);// test si il a chiffre
    });
  
    it('devrait renvoyer false pour les mots de passe contenant IPL', () => {
      expect(passwordChecker('valid!@#IPL456')).toBe(false);// test si il a pas ipl dans le string
    });
  
    it('devrait renvoyer vrai pour les mots de passe valides', () => {
      expect(passwordChecker('long!@#456789')).toBe(true);// test si la password est valide
    });
  });