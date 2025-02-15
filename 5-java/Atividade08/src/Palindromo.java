// 2 - Crie um programa que leia uma palavra e verifique se ela é um palíndromo
// (se pode ser lida da mesma forma de trás para frente). Ignore diferenças entre maiúsculas e minúsculas.

import java.util.Scanner;

public class Palindromo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita ao usuário uma palavra
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine();

        // Converte a palavra para minúsculas e remove espaços em branco
        String palavraFormatada = palavra.toLowerCase().replaceAll("\\s+", "");

        // Verifica se a palavra é um palíndromo
        boolean isPalindromo = true;
        int length = palavraFormatada.length();
        for (int i = 0; i < length / 2; i++) {
            if (palavraFormatada.charAt(i) != palavraFormatada.charAt(length - i - 1)) {
                isPalindromo = false;
                break;
            }
        }

        // Exibe o resultado
        if (isPalindromo) {
            System.out.println("A palavra \"" + palavra + "\" é um palíndromo.");
        } else {
            System.out.println("A palavra \"" + palavra + "\" não é um palíndromo.");
        }

        // Fecha o scanner
        scanner.close();
    }
}

