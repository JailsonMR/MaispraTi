// 7 - Escreva um programa que leia uma frase e conte o número de palavras nela.
// Considere que as palavras estão separadas por espaços em branco.

import java.util.Scanner;

public class ContarPalavras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Solicita ao usuário uma frase
        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine();
        
        // Divide a frase em palavras usando espaços em branco como delimitadores
        String[] palavras = frase.trim().split("\\s+");
        
        // Conta o número de palavras
        int numeroDePalavras = palavras.length;
        
        // Exibe o número de palavras
        System.out.println("A frase contém " + numeroDePalavras + " palavras.");
        
        // Fecha o scanner
        scanner.close();
    }
}