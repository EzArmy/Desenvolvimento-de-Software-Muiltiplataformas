/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ex3produtocomprado;

import java.util.Scanner;

/**
 *
 * @author fatec-dsm2
 */
public class Ex3produtoComprado {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Declaração de variáveis
        double value, total;
        int uni;
        String prod;
        
        //Instanciando a função Scanner
        Scanner read = new Scanner(System.in);
        
        //Apresentando texto no console
        System.out.println("Qual o nome do produto que pretende comprar?");
        
        //Capturando valor digitado pelo usuário dentro da variável prod
        prod = read.next();
        
        //Apresentando texto no console
        System.out.println("Quanto pretende comprar?");
        
        //Capturando valor digitado pelo usuário dentro da variável uni
        uni = read.nextInt();
        
        //Apresentando texto no console
        System.out.println("Quanto custa a unidade?");
        
        //Capturando valor digitado pelo usuário dentro da variável value
        value = read.nextDouble();
        
        //Calculando preço total da compra
        total = uni*value;
        
        System.out.println("O total da sua compra de "+uni+"x"+prod+" foi de "+total);
    }
    
}
