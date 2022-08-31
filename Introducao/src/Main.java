import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		 * Elabore um programa que dada uma entrada idade, 
		 * verifique se a idade é menor ou igual a 12 (jovem),
		 * se é menor ou igual a 17 e maior que 12(adolescente),
		 * e maior que 18(adulto).
		 */
		
		
		Scanner entrada = new Scanner(System.in);
		System.out.println("Digite sua idade");
		int idade = entrada.nextInt();
		//idade = input();		
		if(idade <= 12) {
			System.out.println("Jovem");
		}		
		if( idade < 18) {
			System.out.println("Adolescente");
		}		
		if(idade > 18) {
			System.out.println("Adulto");
		}
		
		
		//print
		System.out.println("A sua idade é " + idade);
		
		/*
		//Elabore um programa que receba uma idade
		// e verifique a maioridade.		
		
		//input
		Scanner entrada = new Scanner(System.in);
		System.out.println("Digite sua idade");
		int idade = entrada.nextInt();
		//idade = input();		
		if(idade >= 18 &&) {
			System.out.println("Eh maior");
		}else {
			System.out.println("Eh menor");
		}
		
		//print
		System.out.println("A sua idade é " + idade);
	
		*/

	}

}