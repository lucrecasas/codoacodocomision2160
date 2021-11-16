
package ejercicioclase2;

import java.util.Scanner;

public class EjercicioClase2 {

   
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su apellido");
        String apellido = entrada.nextLine();
        System.out.println("Ingrese su edad");
        int edad = entrada.nextInt();
        System.out.println("Cual es su hobbie?");
        String hobbie = entrada.next();
        System.out.println("Cual es su editor de codigo preferido?");
        String editorCodigo = entrada.next();
        System.out.println("Que sistema operativo utiliza?");
        String sistOperativo = entrada.next();
        System.out.print("\033[H\033[2J");
        System.out.flush(); /* supuestamente el System.out.print("\033[H\033[2J") + flush seria para borrar 
        consola pero por alguna razon que no descubro no funciona*/
        
        System.out.println("Nombre: " + nombre);
        System.out.println("Apellido: "+ apellido);
        System.out.println("Edad: "+ edad);
        System.out.println("Hobbie: "+ hobbie);
        System.out.println("Editor de Codigo: "+ editorCodigo);
        System.out.println("Sistema Operativo: "+ sistOperativo);
        
        
    }
    
}
