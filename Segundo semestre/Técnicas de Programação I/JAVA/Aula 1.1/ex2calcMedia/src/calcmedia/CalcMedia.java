/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calcmedia;

import java.text.DecimalFormat;
import java.util.Scanner;

/**
 *
 * @author fatec-dsm2
 */
public class CalcMedia {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        double media1, media2, nota1, nota2, nota3, nota4, nota5, nota6, soma;
        
        DecimalFormat decimal = new DecimalFormat("0.00");
        
        //Instanciando a função de leitura de dados
        Scanner read = new Scanner(System.in);

        //Capturando a nota1
        System.out.println("Insira a nota 1: ");
        nota1 = read.nextDouble();

        //Capturando a nota2
        System.out.println("Insira a nota 2: ");
        nota2 = read.nextDouble();

        //Capturando a nota3
        System.out.println("Insira a nota 3: ");
        nota3 = read.nextDouble();

        //Calculando a media 1
        media1 = (nota1 + nota2 + nota3) / 3;

        //Capturando a nota 4
        System.out.println("Insira a nota 4: ");
        nota4 = read.nextDouble();

        //Capturando a nota 5
        System.out.println("Insira a nota 5: ");
        nota5 = read.nextDouble();

        //Capturando a nota 6
        System.out.println("Insira a nota 6: ");
        nota6 = read.nextDouble();

        media2 = (nota4 + nota5 + nota6) / 3;

        soma = media1 + media2;

        System.out.println("A média 1 é: " + decimal.format(media1));
        System.out.println("A média 2 é: " + decimal.format(media2));
        System.out.println("Nota final: " + decimal.format(soma));
    }

}
