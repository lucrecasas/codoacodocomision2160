
package recursosHumanos;

import personal.Departamento;


public class Finanzas extends Departamento{
    public String cargo;
    
    public Finanzas(String nombre, String apellido, String domicilio, int edad, String Depar, String cargo) {
        super(nombre, apellido, domicilio, edad, Depar);
        this.cargo=cargo;
    }
    public float AbonarSueldo(){
        if (cargo.equals("gerente")){
            return 350000;
        }else if (cargo.equals("Asistente")){
            return 80000;
        }else{
        
        return 0;
        }
    }
    
}
