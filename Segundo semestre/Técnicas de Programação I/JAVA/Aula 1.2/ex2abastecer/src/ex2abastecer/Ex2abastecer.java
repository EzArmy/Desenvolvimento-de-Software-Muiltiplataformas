/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ex2abastecer;

import java.text.DecimalFormat;
import java.util.Scanner;

/**
 *
 * @author fatec-dsm2
 */
public class Ex2abastecer {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //declarando variáveis
        double gasL, gasV, total;
        
        //Instanciando a função DecimalFormat
        DecimalFormat decimal = new DecimalFormat("0.00");

        //Instanciando a função Scanner
        Scanner read = new Scanner(System.in);

        gasV = 5.39;

        //Apresentando texto no console
        System.out.println("Quanto pretende abastecer?");

        //Capturando valor digitado pelo usuário na variável gasL 
        gasL = read.nextDouble();
        
        total = gasL * gasV;
        
        //Apresentando texto no console
        System.out.println("O valor total a ser pago ao abastecer "+gasL+" com a gosolina "+gasV+" é "+decimal.format(total));
    }

}
