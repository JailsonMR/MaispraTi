// 1 - Escreva um programa que peça dois números e um operador (+, -, *, /).
// Realize a operação indicada e exiba o resultado.

import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita dois números ao usuário
        System.out.print("Digite o primeiro número: ");
        double num1 = scanner.nextDouble();
        System.out.print("Digite o segundo número: ");
        double num2 = scanner.nextDouble();

        // Solicita o operador ao usuário
        System.out.print("Digite um operador (+, -, *, /): ");
        char operador = scanner.next().charAt(0);

        double resultado;

        // Realiza a operação baseada no operador fornecido
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    resultado = num1 / num2;
                } else {
                    System.out.println("Divisão por zero não é permitida.");
                    return;
                }
                break;
            default:
                System.out.println("Operador inválido.");
                return;
        }

        // Exibe o resultado
        System.out.println("O resultado da operação é: " + resultado);
    }
}
