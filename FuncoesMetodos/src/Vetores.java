
public class Vetores {
	
  public static void main(String[] args) {
	  double []numeros = new double[4];
	  
	  int indice = 0;
	  
	  while( indice <  numeros.length ) {
		  numeros[indice] =  100 * Math.random();
		  indice ++;
	  }
	  
	  for(int i = 0; i < numeros.length; i++) {
		  System.out.println(numeros[i]);
	  }
	  
	  //numeros[0] = 10;
	  //numeros[2] = 33;
	  //numeros[5] = 33;
	  
	  
	
  }
  

}
