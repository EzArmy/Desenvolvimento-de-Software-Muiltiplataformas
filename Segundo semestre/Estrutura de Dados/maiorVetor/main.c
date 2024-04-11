#include <stdio.h>
#include <stdlib.h>

int main()
{
    int vet[] = {1,2,3,4,5,6,7,8,9,10};
    int i, maior=8;

    for(i = 0; i<10; i++){
        if(maior < vet[i]){
            printf("%u", vet[i]);
        }
    }


    return 0;
}
