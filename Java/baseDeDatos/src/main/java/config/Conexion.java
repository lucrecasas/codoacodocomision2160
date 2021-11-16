
package config;

import java.sql.*;


public class Conexion {
    public String driver ="com.mysql.jdbc.Driver";
    public Connection getConection() throws ClassNotFoundException{
        Connection conexion=null;
        try{
            Class.forName(driver);
            conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/comision2160",
                    "lucrecasas","lu38789247");
        
        }catch(SQLException e){
            System.out.println(e.toString());
        
        }
        return conexion;
        
    }
    
    public static void main(String []args) throws ClassNotFoundException{
        Connection conexion =null;
        Conexion con =new Conexion();
        conexion = con.getConection();
        System.out.println("Hola");
                
    
    }
    
}
