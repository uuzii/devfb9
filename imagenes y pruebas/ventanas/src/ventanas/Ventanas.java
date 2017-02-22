
package ventanas;
import javax.swing.JOptionPane;  


public class Ventanas {

    public static void main(String[] args) {
        
        int base, altura;
        double area;
        
        base=Integer.parseInt
        (JOptionPane.showInputDialog(null, "Ingrese la base: "));
        
        altura=Integer.parseInt
        (JOptionPane.showInputDialog(null, "Ingrese la altura: "));
        
       area=(base*altura)/2;
       JOptionPane.showMessageDialog(null, "El area del triangulo es : " + area );
        // TODO code application logic here
    }
    
}
