import { passwordChecker} from "../passwordcheck";


describe('passwordChecker', () => {
    it('devrait renvoyer false pour les mots de passe de moins de 8 caractères', () => {
      expect(passwordChecker('short')).toBe(false);
    });
  
    it('devrait renvoyer false pour les mots de passe sans caractères spéciaux', () => {
      expect(passwordChecker('long12345')).toBe(false);
    });
  
    it('devrait renvoyer false pour les mots de passe sans chiffres', () => {
      expect(passwordChecker('special!@#')).toBe(false);
    });
  
    it('devrait renvoyer false pour les mots de passe contenant IPL', () => {
      expect(passwordChecker('valid!@#IPL456')).toBe(false);
    });
  
    it('devrait renvoyer vrai pour les mots de passe valides', () => {
      expect(passwordChecker('long!@#456789')).toBe(true);
    });
  });