// 5 - Escreva um programa que receba duas palavras e determine se elas são anagramas (se possuem as mesmas letras, mas em ordem diferente). Exemplo: "amor" e "roma".


import java.util.Arrays;
import java.util.Scanner;

public class Anagrama {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Solicita ao usuário as duas palavras
        System.out.print("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine();
        System.out.print("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine();
        
        // Verifica se as palavras são anagramas
        boolean saoAnagramas = saoAnagramas(palavra1, palavra2);
        
        // Exibe o resultado
        if (saoAnagramas) {
            System.out.println("As palavras \"" + palavra1 + "\" e \"" + palavra2 + "\" são anagramas.");
        } else {
            System.out.println("As palavras \"" + palavra1 + "\" e \"" + palavra2 + "\" não são anagramas.");
        }
        
        // Fecha o scanner
        scanner.close();
    }
    
    public static boolean saoAnagramas(String palavra1, String palavra2) {
        // Remove espaços em branco e converte para minúsculas
        palavra1 = palavra1.replaceAll("\\s+", "").toLowerCase();
        palavra2 = palavra2.replaceAll("\\s+", "").toLowerCase();
        
        // Se as palavras têm comprimentos diferentes, não são anagramas
        if (palavra1.length() != palavra2.length()) {
            return false;
        }
        
        // Converte as palavras em arrays de caracteres e ordena os arrays
        char[] array1 = palavra1.toCharArray();
        char[] array2 = palavra2.toCharArray();
        Arrays.sort(array1);
        Arrays.sort(array2);
        
        // Verifica se os arrays ordenados são iguais
        return Arrays.equals(array1, array2);
    }
}
