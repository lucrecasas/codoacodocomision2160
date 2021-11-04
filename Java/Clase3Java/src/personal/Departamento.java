
package personal;


public class Departamento extends Personal {
    
    public Departamento(String nombre, String apellido, String domicilio, int edad, String Depar) {
        super(nombre, apellido, domicilio, edad);/*Llama a la clase padre que en este caso es personal*/
    }
    
    public String mostrarDatos(){
        return "\n Nombre: " + nombre + "\n Apellido: " + apellido + 
                "\n Domicilio: " + domicilio + "\n Edad: " + edad + 
                "\n Sueldo: " + getSueldo();
    }
    
}
