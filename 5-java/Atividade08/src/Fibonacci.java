// 3 - Implemente um programa que calcule e exiba os primeiros n números da sequência de Fibonacci.
// n deve ser fornecido pelo/a usuário/a.

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a quantidade de números da sequência de Fibonacci que você deseja: ");
        int n = scanner.nextInt();

        long[] fibSequence = new long[n];
        if (n > 0) fibSequence[0] = 0;
        if (n > 1) fibSequence[1] = 1;

        for (int i = 2; i < n; i++) {
            fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
        }

        System.out.println("Os primeiros " + n + " números da sequência de Fibonacci são:");
        for (int i = 0; i < n; i++) {
            System.out.print(fibSequence[i] + " ");
        }
    }
}
