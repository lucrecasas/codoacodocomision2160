
package calculadora;

import java.util.Scanner;
import operaciones.Operaciones;


public class Calculadora {

    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese el primer numero:");
        float num = entrada.nextFloat();
        System.out.println("Ingrese el segundo numero:");
        float num2 = entrada.nextFloat();
        System.out.println("Ingrese la operación a realizar: +,-,/,*");
        String op = entrada.next();
        Operaciones operacion = new Operaciones(num,num2,op);
        System.out.println("El Restultado de la operacion es:" + operacion.operacion());
    }
    
}
