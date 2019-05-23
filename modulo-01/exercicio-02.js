function pares(x, y) {
    x += (x%2==0)?0:1;
    while(x<=y){
        console.log(x);
        x+=2;
    }
}
pares(32, 321);