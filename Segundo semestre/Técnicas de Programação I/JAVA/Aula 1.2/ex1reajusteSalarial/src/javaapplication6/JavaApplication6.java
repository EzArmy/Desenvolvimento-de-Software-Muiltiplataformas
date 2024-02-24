/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication6;

import java.util.Scanner;

/**
 *
 * @author fatec-dsm2
 */
public class JavaApplication6 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Declarando variáveis
        double salAtual, salNovo, percent;
      
        //Instanciando a função Scanner
        Scanner read = new Scanner(System.in);
        
        //Apresentando texto no console
        System.out.println("Qual o salário atual do funcionário?");
        
        //Capturando valor digitado pelo usuário dentro da variável salAtual
        salAtual = read.nextDouble();
        
        System.out.println("Qual a porcentagem do reajuste?");
        percent = read.nextDouble();
        
        //Calculando reajuste de salário
        salNovo = salAtual+(salAtual*percent)/100;
        
        System.out.println("O salário de "+salAtual+" com reajuste de "+percent+" gera um total de "+salNovo);
    }
    
}
