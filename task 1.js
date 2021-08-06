function run(Array){
    //variables
    let index  = 0;
    let odd   = 0;
    let sorted;
    //Main 
    function sort(arr){
        index
        for (let i = 0; i < index; i++) {
            for (let j = 0; j < index; j++) {
                if (arr[j] < arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }
    function calculate()
    {
        Array.forEach(element => 
            {   ++index;
                if(element % 2 != 0)
                {   ++odd;   }
        
            }   
        );
        sorted = sort(Array)
    }
    calculate()
    //methods
    
   
    function Count(){
        return index
    }
    function Odds(){
        return odd
    }
    function SecondHighest(){
        
        return sorted[1];
    } 
    function display(value){
        console.log(value);
    }
    //processing
    function process()
    {
        display(Count())
        display(Odds())
        display(SecondHighest())
    }
    process()
}

let ar = [0,5,1,3,6,7,20,60,46]
run(ar)