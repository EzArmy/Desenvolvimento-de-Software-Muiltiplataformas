
import java.util.Scanner;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author fatec-dsm2
 */
public class OO {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Instanciar objeto da classe pessoa
        
        Pessoas pes = new Pessoas();
        Scanner read = new Scanner(System.in);
        
        pes.setNome("Ezequiel");
        pes.setEndereco("Rua Aquela Lá");
        pes.setIdade(25);
        pes.setTelefone("(13) 9999-9999");
        
        //Chamando método para apresentar os dados
        pes.MostraDados();
    }
}
