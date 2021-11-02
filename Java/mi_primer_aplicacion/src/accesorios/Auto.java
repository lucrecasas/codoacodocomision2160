
package accesorios;

public class Auto {
    public int velocidad; 
    private boolean encendido; 
    public int cantPasajeros; 
    public String color,modelo,anio,patente;

    public boolean isEncendido() {
        return encendido;
    }

    public void setEncendido(boolean encendido) {
        this.encendido = encendido;
    } 
        
     

    public Auto(int velocidad, int cantPasajeros, String color, String modelo, String anio, String patente) {
        this.velocidad = velocidad;
        this.cantPasajeros = cantPasajeros;
        this.color = color;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
    }
    public boolean enceder_auto(){
        if(this.isEncendido ()){
            System.out.println("El auto esta encendido");
            return false;
            
        }else{
            System.out.println("El auto se esta encenciendo");
            return true;
        }
          
    }
