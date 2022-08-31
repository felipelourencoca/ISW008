public class Main {
/* Classe: são tipos de dados existentes
 * na programação orientada a objetos.
 * Se forma "tosca", pode-se dizer que 
 * uma classe equivale a um tipo não primitivo.
 * 
 * /
 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FormaBolo b = new FormaBolo();
		System.out.println(b);
		b.setSabor("chocolate");
		b.setPeso(750);
		
		System.out.println(b.getPeso());
		System.out.println(b.getSabor());
		
		
		/*
		errado! acessar atributo diretamente
		b.sabor = "Chocolate";
		b.peso = 1000;
		
		System.out.println(b.peso);
		System.out.println(b.sabor);
		*/
		

	}

}
