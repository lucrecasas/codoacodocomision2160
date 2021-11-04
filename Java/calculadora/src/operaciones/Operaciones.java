
package operaciones;


public class Operaciones {
    public float num,num2; /*Creamos dos variables de tipo float*/
    public String op;/*Creamos una variable de tipo string*/
    public Operaciones(float num, float num2, String op){/*Creamos el constructor*/
        this.num=num; /*Inicializamos los atributos/variables*/
        this.num2=num2;
        this.op=op;
    }
    public float operacion(){ /*Creamos una funcion, porque siempre tiene return*/
        if(op.equals("+")){
            return num+num2;
            
        }else if(op.equals("-")){
            return num-num2;
           
        }else if (op.equals("/")){
            return num/num2;
        
        }else if(op.equals("*")){
            return num*num2;
            
        }else{
            return 0;
        }
    }
    
    
    
}
