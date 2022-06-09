let buttons = Array.from(document.getElementsByClassName("button"));

let input_field = document.getElementById("input");
let clear_field = document.getElementById("clear");
let ans = document.getElementById("ans");
let display = document.getElementById("display");
let delete_btn = document.getElementById("del");

input_field.innerHTML = "";
let isSqrt = false;
let isPow = false;
let isPow2 = false;
let ifPow_Number = "";
let pow_num = ifPow_Number;
let closeBracket = false;

let equation = "";


buttons.map(button => {
    button.addEventListener('click', (e) =>{
        //console.log(e.target)
        let value = e.target.value;
        ifPow_Number = value;
        if(value == "/"){
            input_field.innerHTML += "&#247;";
            equation += value;
        }
        else if(value == "*"){
            input_field.innerHTML += "&#215;";
            equation += value;
        }
        else if(value == "power2"){
            console.log("eq: "+equation);

            var num = "";
            var i = equation.length;
            var x = 0;
            
            while(true){
                if(equation.charAt(i) == "+" || equation.charAt(i) == "-" || equation.charAt(i) == "*" || equation.charAt(i) == "/" || equation.charAt(i) == "%" || i < 0){
                    break;
                }
                num += equation.charAt(i);
                i--;
                x++;
            }
            console.log("number : "+num);
            console.log("i: " + x);

            //slice equation
            equation = equation.slice(0, equation.length-(x-1));

            //because of previous while loop the number was mirrored. So we need tho re transform it
            //re transform num
            let newNum = "";
            for(let j = num.length; j >= 0; j--){
                newNum += num.charAt(j);
            }
            equation += ("Math.pow(" + newNum + "," + 2);
            //console.log("new Eq: "+equation);

            input_field.innerHTML += "<sup>2</sup>";
            isPow2 = true;
            closeBracket = true;
        }
        else if(value == "sqrt"){
            equation += "Math.sqrt(";
            input_field.innerHTML += "&#8730;";
            isSqrt = true;
            closeBracket = true;
        }
        else if(value == "pow"){
            console.log("eq: "+equation);

            var num = "";
            var i = equation.length;
            var x = 0;
            
            while(true){
                if(equation.charAt(i) == "+" || equation.charAt(i) == "-" || equation.charAt(i) == "*" || equation.charAt(i) == "/" || equation.charAt(i) == "%" || i < 0){
                    break;
                }
                num += equation.charAt(i);
                i--;
                x++;
            }
            console.log("number : "+num);
            console.log("i: " + x);

            //slice equation
            equation = equation.slice(0, equation.length-(x-1));

            //because of previous while loop the number was mirrored. So we need tho re transform it
            //re transform num
            let newNum = "";
            for(let j = num.length; j >= 0; j--){
                newNum += num.charAt(j);
            }
            equation += ("Math.pow(" + newNum + ",");
            //console.log("new Eq: "+equation);

            input_field.innerHTML += "&#8743;";
            isPow = true;
            closeBracket = true;
        }
        else{
            if((value == "*" || value == "%" || value == "/" || value == "sqrt" || value == "power2" || value == "+" || value == "-") && closeBracket){
                equation += (")");
                closeBracket = false;
            }
            input_field.innerHTML += value;
            if(isSqrt){
                equation += value;
            }
            else if(isPow){
                equation += value;
            }
            
            else{
                equation += value;
            }
            isSqrt = false;
            isPow = false;
            isPow2 = false;
        }
        console.log(equation);
    })
})

ans.addEventListener('click', ()=>{
    if(closeBracket){
        equation += ")"
    }
    let answer;
    try{
        answer = eval(equation);
    }
    catch(e){}
    
    if(typeof(answer) == "number"){
        console.log(answer);
        console.log(typeof(answer));
        answer = answer.toString();
        if(answer.length > 7){
            answer = Number.parseFloat(answer).toExponential(5)
        }

        display.innerHTML = answer;
    }
    else{
        display.innerHTML = "Syntax Error";
    }
});



clear_field.addEventListener('click', ()=>{
    input_field.innerHTML = "";
    display.innerHTML = "";
    equation = "";
    value = ""
    num = "";
    newNum = "";
    x = 0;
    //sub_str = "";
    isSqrt = false;
    isPow = false;
    closeBracket = false;
});

delete_btn.addEventListener('click', ()=>{
    let input = input_field.innerHTML;
    console.log(input);
    input = input.slice(0,input.length-1);
    equation = equation.slice(0,input.length);
    console.log(input);
    console.log(equation);
    input_field.innerHTML = input;
});

////// theme control
let dark_btn = document.getElementById("dark");
let light_btn = document.getElementById("light");
let theme_ball = document.getElementById("ball");
let container = document.getElementById("cal_container");
let body = document.querySelector("body");
let buttons_style = document.querySelectorAll(".buttons button");
let clear_btn = document.getElementById("clear");
let color_1_btns = document.querySelectorAll(".color--1");
let color_2_btns = document.querySelectorAll(".color--2");
let color_0_btns = document.querySelectorAll(".color--0");
let theme_box = document.querySelector(".theme_controller");


//dark
dark_btn.addEventListener('click', ()=>{
    theme_ball.style.transform = "translateX("+0+"em)";
    theme_ball.style.backgroundColor = "black";
    console.log("dark");
    container.style.backgroundImage = "linear-gradient(to top,rgb(0, 0, 0), rgb(130, 129, 129))";
    body.style.backgroundImage = "linear-gradient(to top,rgb(27, 27, 40), rgb(76, 76, 76))";
    container.style.boxShadow = "-2px -1px 20px black, 2px 2px 20px rgba(102, 102, 102, 0.484)"
    for(let x = 0; x < buttons_style.length; x++){
        buttons_style[x].style.backgroundColor = "rgb(63, 63, 63)";
        buttons_style[x].style.boxShadow = "-1px -1px 0px rgb(147, 145, 145), 1px 1px 0px rgb(0, 0, 0)";
        buttons_style[x].style.color = "rgb(193, 193, 193)"
    }
    for(let x = 0; x < color_1_btns.length; x++){
        color_1_btns[x].style.backgroundColor = "rgb(97, 74, 42)";
        color_1_btns[x].addEventListener("mouseenter", ()=>{
            color_1_btns[x].style.backgroundColor = "rgb(59, 41, 0)";
        });
        color_1_btns[x].addEventListener("mouseleave", ()=>{
            color_1_btns[x].style.backgroundColor = "rgb(97, 74, 42)";
        });
        color_1_btns[x].addEventListener("click", ()=>{
            color_1_btns[x].style.backgroundColor = "rgb(97, 74, 42)";
            window.setTimeout(func,150);
            function func(){
                color_1_btns[x].style.backgroundColor = "rgb(59, 41, 0)";
            }
        });
        
        for(let x = 0; x < color_2_btns.length; x++){
            color_2_btns[x].style.backgroundColor = "rgb(84, 0, 95)";
            color_2_btns[x].addEventListener("mouseenter", ()=>{
                color_2_btns[x].style.backgroundColor = "rgb(47, 0, 53)";
            });
            color_2_btns[x].addEventListener("mouseleave", ()=>{
                color_2_btns[x].style.backgroundColor = "rgb(84, 0, 95)";
            });
            color_2_btns[x].addEventListener("click", ()=>{
                color_2_btns[x].style.backgroundColor = "rgb(84, 0, 95)";
                window.setTimeout(func,150);
                function func(){
                    color_2_btns[x].style.backgroundColor = "rgb(47, 0, 53)";
                }
            });  
        }

        ans.style.backgroundColor = "#8B6BFF";
    ans.style.color = "white";
    ans.addEventListener("mouseenter", ()=>{
        ans.style.backgroundColor = "#6A42FC";
    });
    ans.addEventListener("mouseleave", ()=>{
        ans.style.backgroundColor = "#8B6BFF";
    });
    ans.addEventListener("click", ()=>{
        ans.style.backgroundColor = "#8B6BFF";
        window.setTimeout(func,150);
        function func(){
            ans.style.backgroundColor = "#6A42FC";
        }
    });
    }
    clear_btn.style.backgroundColor = "rgb(255, 200, 0)";
    clear_btn.style.color = "rgb(91, 91, 91)";

    for(let x = 0; x < color_0_btns.length; x++){
        color_0_btns[x].style.backgroundColor = "rgb(63, 63, 63)";
        color_0_btns[x].addEventListener("mouseenter", ()=>{
            color_0_btns[x].style.backgroundColor = "rgb(33, 33, 33)";
        });
        color_0_btns[x].addEventListener("mouseleave", ()=>{
            color_0_btns[x].style.backgroundColor = "rgb(63, 63, 63)";
        });
        color_0_btns[x].addEventListener("click", ()=>{
            color_0_btns[x].style.backgroundColor = "rgb(63, 63, 63)";
            window.setTimeout(func,150);
            function func(){
                color_0_btns[x].style.backgroundColor = "rgb(33, 33, 33)";
            }
        });  
    }
    input_field.style.color = "rgb(51, 51, 51)";
    display.style.color = "white";

    theme_box.style.backgroundColor = "rgb(87, 86, 86)";
    theme_box.style.boxShadow = "1px 1px 5px black,-1px -1px 5px rgba(255, 255, 255, 0.318)";
});

//light
light_btn.addEventListener('click', ()=>{
    theme_ball.style.transform = "translateX("+2+"em)";
    theme_ball.style.backgroundColor = "white";
    container.style.backgroundImage = "linear-gradient(to top,#EBEBEB, #FFFFFF)";
    body.style.backgroundImage = "linear-gradient(to top, #E8E8E8, #FFFFFF)";
    console.log("light");
    container.style.boxShadow = "-2px -1px 20px rgba(0, 0, 0, 0.184), 2px 2px 20px rgba(102, 102, 102, 0.484)"
    for(let x = 0; x < buttons_style.length; x++){
        buttons_style[x].style.backgroundColor = "#EDECEC";
        buttons_style[x].style.boxShadow = "-2px -2px 1px white, 2px 2px 1px rgba(0, 0, 0, 0.38)";
        buttons_style[x].style.color = "rgb(111, 111, 111)";
    }
    for(let x = 0; x < color_1_btns.length; x++){
        color_1_btns[x].style.backgroundColor = "rgba(252, 214, 115, 0.384)";
        color_1_btns[x].addEventListener("mouseenter", ()=>{
            color_1_btns[x].style.backgroundColor = "#E3A95A";
        });
        color_1_btns[x].addEventListener("mouseleave", ()=>{
            color_1_btns[x].style.backgroundColor = "rgba(252, 214, 115, 0.384)";
        });
        color_1_btns[x].addEventListener("click", ()=>{
            color_1_btns[x].style.backgroundColor = "rgba(252, 214, 115, 0.384)";
            window.setTimeout(func,150);
            function func(){
                color_1_btns[x].style.backgroundColor = "#E3A95A";
            }
        });  
    }

    for(let x = 0; x < color_2_btns.length; x++){
        color_2_btns[x].style.backgroundColor = "#E3D3FE";
        color_2_btns[x].addEventListener("mouseenter", ()=>{
            color_2_btns[x].style.backgroundColor = "#BE98FF";
        });
        color_2_btns[x].addEventListener("mouseleave", ()=>{
            color_2_btns[x].style.backgroundColor = "#E3D3FE";
        });
        color_2_btns[x].addEventListener("click", ()=>{
            color_2_btns[x].style.backgroundColor = "#E3D3FE";
            window.setTimeout(func,150);
            function func(){
                color_2_btns[x].style.backgroundColor = "#BE98FF";
            }
        });  
    }

    ans.style.backgroundColor = "#8B6BFF";
    ans.style.color = "white";
    ans.addEventListener("mouseenter", ()=>{
        ans.style.backgroundColor = "#6A42FC";
    });
    ans.addEventListener("mouseleave", ()=>{
        ans.style.backgroundColor = "#8B6BFF";
    });
    ans.addEventListener("click", ()=>{
        ans.style.backgroundColor = "#8B6BFF";
        window.setTimeout(func,150);
        function func(){
            ans.style.backgroundColor = "#6A42FC";
        }
    });
    
    clear_btn.addEventListener("mouseenter", ()=>{
        clear_btn.style.backgroundColor = "#F79D00";
    });
    clear_btn.addEventListener("mouseleave", ()=>{
        clear_btn.style.backgroundColor = "rgb(255, 200, 0)";
    });
    clear_btn.addEventListener("click", ()=>{
        clear_btn.style.backgroundColor = "rgb(255, 200, 0)";
        window.setTimeout(func,150);
        function func(){
            clear_btn.style.backgroundColor = "#F79D00";
        }
    });
    clear_btn.style.backgroundColor = "rgb(255, 200, 0)";

    for(let x = 0; x < color_0_btns.length; x++){
        color_0_btns[x].style.backgroundColor = "#EDECEC";
        color_0_btns[x].addEventListener("mouseenter", ()=>{
            color_0_btns[x].style.backgroundColor = "#C4C4C4";
        });
        color_0_btns[x].addEventListener("mouseleave", ()=>{
            color_0_btns[x].style.backgroundColor = "#EDECEC";
        });
        color_0_btns[x].addEventListener("click", ()=>{
            color_0_btns[x].style.backgroundColor = "#EDECEC";
            window.setTimeout(func,150);
            function func(){
                color_0_btns[x].style.backgroundColor = "#C4C4C4";
            }
        });  
    }
    input_field.style.color = "#A5A5A5";
    display.style.color = "#6D6D6D";

    theme_box.style.backgroundColor = "#D1D1D1";
    theme_box.style.boxShadow = "1px 1px 5px rgb(118, 118, 118)";
});