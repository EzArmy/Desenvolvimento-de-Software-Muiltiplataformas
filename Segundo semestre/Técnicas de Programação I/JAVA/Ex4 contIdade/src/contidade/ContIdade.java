/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package contidade;

import java.util.Scanner;

/**
 *
 * @author fatec-dsm2
 */
public class ContIdade {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int dias, idade;
        
        //Instanciando a função scanner
        Scanner read = new Scanner(System.in);
        
        System.out.println("Insira sua idade: ");
        idade = read.nextInt();
        
        dias = idade * 365;
        
        System.out.println("Você viveu um total de " + dias + " dias");
    }
    
}
