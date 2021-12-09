
package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.Alumnos;
import modelo.AlumnosDAO;


@WebServlet(name = "AlumnosController", urlPatterns = {"/AlumnosController"})
public class AlumnosController extends HttpServlet {

    
    

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            AlumnosDAO alumnosDao = new AlumnosDAO();
            String accion;
            RequestDispatcher dispatcher =null;
            accion = request.getParameter("accion");
            if (accion == null || accion.isEmpty()){
                dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
            
            
            }else if(accion.equals("modificar")){
                dispatcher = request.getRequestDispatcher("Vistas/modificar.jsp");
            
            }else if(accion.equals("actualizar")){
                int id = Integer.parseInt(request.getParameter("id"));
                String nombres = request.getParameter("nombre");
                String apellidos = request.getParameter("apellido");
                String email = request.getParameter("email");
                String telefono = request.getParameter("telefono");
                int tl = Integer.parseInt(telefono);
                Alumnos alumno = new Alumnos(id,nombres,apellidos,email,tl);
                alumnosDao.actualizarAlumno(alumno);
                dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
            
            }else if(accion.equals("nuevo")){
                dispatcher = request.getRequestDispatcher("Vistas/nuevo.jsp");
                
            }else if(accion.equals("insert")){
                String nombres = request.getParameter("nombre");
                String apellidos = request.getParameter("apellido");
                String email = request.getParameter("email");
                String telefono = request.getParameter("telefono");
                int tl = Integer.parseInt(telefono);
                Alumnos alumno = new Alumnos(0,nombres,apellidos,email,tl);
                alumnosDao.insertarAlumno(alumno);
                dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
                
            }else if(accion.equals("eliminar")){
                int id =  Integer.parseInt(request.getParameter("id"));
                alumnosDao.eliminarAlumno(id);
                dispatcher = request.getRequestDispatcher("Vistas/alumnos.jsp");
                
            }
            dispatcher.forward(request, response);
        
    }

   
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            doGet(request,response);
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
