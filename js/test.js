import * as p5 from 'js/p5.svg.js';


function testCall(){
    console.log("调用test.js===================================");
    console.log("saveSVG start...........");
    p5.save("f.svg");
    
    console.log("saveSVG end............");
}