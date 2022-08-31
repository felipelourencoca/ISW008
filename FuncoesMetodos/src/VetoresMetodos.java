
public class VetoresMetodos {
	public static void main(String[] args) {
		double[] numeros = new double[4];
		
		VetoresMetodos.popularVetor(numeros);
		VetoresMetodos.mostarVetor(numeros);
		
		
	}
	
	public static void popularVetor(double []vet) {
		int indice = 0;
		while (indice < vet.length) {
			vet[indice] = 100 * Math.random();
			indice++;
		}		
	}	
	public static void mostarVetor(double []vet) {
		for (int i = 0; i < vet.length; i++) {
			System.out.println(vet[i]);
		}
	}

}
