var rect ={
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b){
    console.log("solving for rectangle with l = "+ l + " and b = "+b);

    if(l<=0 || b<=0){
        console.log("dimensions should be greater than zero");
    
    }
    else {
        console.log("Area of the rectangle is "+ rect.area(l,b));
        console.log("The perimeter of the rectangle is "+ rect.perimeter(l,b));
    }

}

solveRect(3,4);
solveRect(2,5);
solveRect(-2,2);