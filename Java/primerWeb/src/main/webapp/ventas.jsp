<%-- 
    Document   : ventas
    Created on : 9 nov 2021, 14:56:37
    Author     : Lucre
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%! int num = 89; double num2 =34.8;
        double suma(){
            return num+num2;
        }
                     
        %>
        
        <%               
            String nombre="Lucre";
            String usuario = request.getParameter("usuario");
            out.println("<p>"+suma()+"</p>");         

        
        %>
        <h1>Hello <%= nombre%></h1>
        <P><% java.util.Date fecha = new java.util.Date();%><%=fecha%></p>
    </body>
</html>
