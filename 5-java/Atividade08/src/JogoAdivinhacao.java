// 6 - Crie um jogo em que o programa escolhe um número entre 1 e 50, e o/a usuário/a deve adivinhar.
// O programa informa apenas se o palpite está certo ou errado. O jogo termina quando o número é adivinhado.


import java.util.Random;
import java.util.Scanner;

public class JogoAdivinhacao {
    public static void main(String[] args) {
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);
        
        // Gera um número aleatório entre 1 e 50
        int numeroEscolhido = random.nextInt(50) + 1;
        int palpite = 0;
        
        System.out.println("Bem-vindo ao jogo de adivinhação!");
        System.out.println("Tente adivinhar o número que estou pensando entre 1 e 50.");
        
        // Loop até que o usuário adivinhe corretamente
        while (palpite != numeroEscolhido) {
            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();
            
            if (palpite == numeroEscolhido) {
                System.out.println("Parabéns! Você adivinhou o número correto.");
            } else {
                System.out.println("Errado! Tente novamente.");
            }
        }
        
        // Fecha o scanner
        scanner.close();
    }
}

