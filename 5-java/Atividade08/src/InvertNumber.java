// 4. Crie um programa que leia um número inteiro e exiba o número invertido.
// Exemplo: se o usuário digitar 1234, o programa deve exibir 4321.

import java.util.Scanner;

public class InvertNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Solicita ao usuário um número inteiro
        System.out.print("Digite um número inteiro: ");
        int numero = scanner.nextInt();

        // Verifica se o número é negativo
        boolean isNegative = numero < 0;
        if (isNegative) {
            numero = -numero; // Converte para positivo para facilitar a inversão
        }

        int invertido = 0;
        
        // Inverte o número
        while (numero != 0) {
            int digito = numero % 10;
            invertido = invertido * 10 + digito;
            numero /= 10;
        }

        // Se o número original era negativo, converte o resultado de volta para negativo
        if (isNegative) {
            invertido = -invertido;
        }

        // Exibe o número invertido
        System.out.println("O número invertido é: " + invertido);

        // Fecha o scanner
        scanner.close();
    }
}
