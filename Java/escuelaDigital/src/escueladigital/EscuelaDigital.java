
package escueladigital;

import alumnos.Alumno;
import docente.Docente;


public class EscuelaDigital {
    

    
    public static void main(String[] args) {
       Docente docente1 = new Docente(12,"Luis", "Navas", 48);
       Alumno alumnno = new Alumno(14,"Lucrecia","Casas",25,8);
       Campus campus = new Campus(14,"web");
       campus.setPassword("123456");
       Campus docente = new Campus(12,"web");
       docente.setPassword("147258");
        System.out.println(docente.ingresar(12,"147258"));
    }
    
}
