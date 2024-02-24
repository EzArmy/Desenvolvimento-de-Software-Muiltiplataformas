/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ex4;

import java.util.Scanner;

/**
 *
 * @author fatec-dsm2
 */
public class Ex4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Instanciando variáveis
        double QTDSAL, salFunc, salMin;
        
        //Instanciando a função Scanner
        Scanner read = new Scanner(System.in);
        
        //Inserindo valor para a variável salMin
        salMin = 1412.00;
        
        //Printando no console a mensagem
        System.out.println("Qual seu salário?");
        //Capturando o valor digitado pelo usuário dentro da variável salFunc
        salFunc = read.nextDouble();
        
        QTDSAL = salFunc/salMin;
        
        System.out.println("Com um salário de " + salFunc + " você recebe um total de " + QTDSAL + " salários mínimos");
        
        
        
    }
    
}
