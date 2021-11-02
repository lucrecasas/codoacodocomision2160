
package clase2java;


 
public class Ingreso {
    private String usuario,password;
    private String miUsuario="Lucre";
    private String miPass="123456";
    
    public String getUsuario(){
        return usuario;
    }
    public void setUsuario(String us){
        usuario=us;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public boolean validar(){
        return usuario.equals(miUsuario)&& password.equals(miPass);
    }
    
}


