/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication1;

import java.text.DecimalFormat;
import java.util.Scanner;

/**
 *
 * @author fatec-dsm2
 */
public class JavaApplication1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        double num1, num2, divisao, mult, soma, sub;
        
        //lib para leitura de dados
        //Instanciando a variável para que possa receber dados
        Scanner read = new Scanner(System.in);
       
        //Arredondando números decimais
        DecimalFormat deci = new DecimalFormat("0.00");
        
        
        //Imprimindo texto na tela
        System.out.println("Digite o valor do primeiro número: ");
        //Lendo os dados inseridos na variável num1;
        num1 = read.nextDouble();
        
        System.out.println("Digite o valor do segundo número: ");
        //Lendo o valor do segundo número
        num2 =  read.nextDouble();
        
        //Soma
        soma = num1 + num2;
        System.out.println("O resultado da soma é " + deci.format(soma));
        
        //Subtração
        sub = num1 - num2;
        System.out.println("O resultado da subtração é " + sub);
        
        //Multiplicação
        mult = num1 * num2;
        System.out.println("O resultado da multiplicação é " + mult);
        
        //Divisão
        divisao = num1 / num2;
        System.out.println("O resultado da divisão é " + deci.format(divisao));
    }
    
}
