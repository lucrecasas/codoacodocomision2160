
package config;

import java.sql.*;


public class Conexion {
    public String driver ="com.mysql.cj.jdbc.Driver";
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
    
    public static void main(String []args) throws ClassNotFoundException, SQLException{
        Connection conexion =null;
        Conexion con =new Conexion();
        conexion = con.getConection();
        PreparedStatement ps;
        ResultSet rs;
        
        ps = conexion.prepareStatement("SELECT * FROM participantes");
        rs = ps.executeQuery();
        while(rs.next()){
        int id = rs.getInt("id");
        String nombre = rs.getString("Nombre");
        String apellido = rs.getString("Apellido");
        String email = rs.getString("Email");
        int telefono = rs.getInt("Telefono");
        System.out.println("Id:" + id + "\n Nombre: " +nombre +
                "\n Apellido: "+ apellido +"\n Email: " +email+
                "\nTelefono: " + telefono);
    
        }
        
        
                
    
    }
    
}
