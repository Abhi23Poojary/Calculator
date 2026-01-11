      let op1 = document.getElementById("op1");
        let op2 = document.getElementById("op2");
        let sy = document.getElementById("sy");
        let final = document.getElementById("final");
        let e = document.getElementById("e");
        let equal = false;

        let sou=document.getElementById("sound")
        sou.addEventListener("click",()=>{
            if(document.getElementById("sound1").style.display==="none"){
                document.getElementById("sound1").style.display="block";
                document.getElementById("sound2").style.display="none";
            }
            else{
                document.getElementById("sound1").style.display="none";
                document.getElementById("sound2").style.display="block";
            }
            })
        function operator(sy,op1,op2){
            if(window.innerWidth<=450)
            {
                final.style.fontSize="23px";
            }
            let a=(e.innerHTML+sy.innerHTML+op2.innerHTML);
            while(a.includes('x')){
                a=a.replace('x','*');
            }
            let res=eval(a);
            final.innerHTML="= "+res;
            if(res.toString().length>12){
                final.innerHTML="= "+res.toPrecision(10);
            }

        } 

        function action(val) {
            switch (val) {
                case 'AC':
                    sy.innerHTML = "";
                    op2.innerHTML = "";
                    e.innerHTML = "";
                    final.innerHTML = "= 0";
                    op1.style.opacity = "1";
                    op1.style.color = "black";
                    op2.style.opacity = "1";
                    op1.style.color = "black";
                    sy.style.opacity = "1";
                    e.style.opacity = "1";
                    e.style.color = "black";
                    op1.style.display = "inline-block";
                    op1.innerHTML = "0";
                    e.style.display = "none";
                    e.innerHTML = "0";
                    equal = false;
                    final.style.color = "gray";
                    final.style.fontSize = "30px";
                    break;
                case 'DEL':
                    if (equal) {
                        break;
                    }
                    if (op1.innerHTML == 0) {
                        break;
                    }
                    if (op2.innerHTML != "")
                        op2.innerHTML = op2.innerHTML.slice(0, -1);
                    else if (sy.innerHTML != "")
                        sy.innerHTML = "";
                    else {
                        op1.innerHTML = op1.innerHTML.slice(0, -1);
                        if (op1.innerHTML.length == 0)
                            op1.innerHTML = "0";
                    }
                    if (sy.innerHTML !== "" && op2.innerHTML !== "") {
                        operator(sy,op1,op2);
                        const value = parseFloat(final.innerHTML.replace('=', '').trim());
                        if (!isFinite(value)) {
                            final.innerHTML = "Can't divide by zero";
                        }
                    } 
                    else{
                        final.innerHTML =  "= "+ op1.innerHTML;
                    }
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 0:
                    if(equal==true){
                        op1.innerHTML=final.innerHTML.replace('=','').trim();
                        op2.innerHTML="";
                        sy.innerHTML="";
                        e.innerHTML=final.innerHTML.replace('=','').trim();
                        final.style.color = "gray";
                        final.style.fontSize = "30px";
                        op1.style.opacity = "1";
                        op2.style.opacity = "1";
                        sy.style.opacity = "1";
                        equal=false;
                    }
                    if (sy.innerHTML == "")
                        if (op1.innerHTML == "0") {
                            op1.innerHTML = val;
                            final.innerHTML = "= "+ op1.innerHTML
                            e.innerHTML = op1.innerHTML
                        }
                        else {
                            op1.innerHTML += val;
                            e.innerHTML = op1.innerHTML
                            final.innerHTML = "= " + op1.innerHTML;
                        }
                    else {
                        op2.innerHTML += val;
                        operator(sy,op1,op2);
                        const value = parseFloat(final.innerHTML.replace('=', '').trim());
                        if (!isFinite(value)) {
                            final.innerHTML = "Can't divide by zero";
                        }

                    }
                    break;
                case '.':
                    if (sy.innerHTML == "")
                        if (op1.innerHTML.includes('.'))
                            break;
                        else if (op1.innerHTML === "0")
                            op1.innerHTML = "0.";
                        else
                            op1.innerHTML += val;
                    else
                        if (op2.innerHTML.includes('.'))
                            break;
                        else if (op2.innerHTML === "")
                            op2.innerHTML = "0.";
                        else
                            op2.innerHTML += val;
                    break;


                case '+':
                case '-':
                case 'x':
                case '%':
                case '/':
                    if(val==='%'){
                        if(op2.innerHTML===''){
                            op1.innerHTML=parseFloat(op1.innerHTML)/100;
                            sy.innerHTML="";
                            final.innerHTML="= "+parseFloat(op1.innerHTML);
                            break;
                        }
                    else if(op1.innerHTML==e.innerHTML){
                            op2.innerHTML=(parseFloat(op1.innerHTML)*parseFloat(op2.innerHTML))/100;
                            operator(sy,op1,op2);
                            break;
                        }
                        else{
                            if(sy.innerHTML==='+'||sy.innerHTML==='-'){
                                op2.innerHTML=(parseFloat(op1.innerHTML)*(parseFloat(op2.innerHTML)/100));
                                operator(sy,op1,op2);
                                break;
                            }
                            else if(sy.innerHTML==='x'||sy.innerHTML==='/'){
                                op2.innerHTML=(parseFloat(op2.innerHTML)/100);
                                operator(sy,op1,op2);
                                break;
                            }
                           
                    }
                }    
                    if(equal==true){
                        op1.innerHTML=final.innerHTML.replace('=','').trim();
                        op2.innerHTML="";
                        sy.innerHTML="";
                        e.innerHTML=final.innerHTML.replace('=','').trim();
                        final.style.color = "gray";
                        final.style.fontSize = "30px";
                        op1.style.opacity = "1";
                        op2.style.opacity = "1";
                        sy.style.opacity = "1";
                        equal=false;
                    }
                    if (sy.innerHTML !== "" && op2.innerHTML === "") {
                        sy.innerHTML = val;
                        return
                    }

                    if (op2.innerHTML != '') {
                        operator(sy,op1,op2);
                        const value = parseFloat(final.innerHTML.replace('=', '').trim());
                        if (!isFinite(value)) {
                            final.innerHTML = "Can't divide by zero";
                        }
                        e.style.display = "inline";
                        e.innerHTML += sy.innerHTML + op2.innerHTML;
                        op1.style.display = "none";
                        if (final.innerHTML != "")
                            op1.innerHTML = final.innerHTML.replace('=','').trim();
                        op2.innerHTML = "";
                        sy.innerHTML = val;
                    }
                    else
                        if (sy.innerHTML != '') {
                            op1.innerHTML = final.innerHTML.replace('=','').trim();
                            op2.innerHTML = "";
                            final.innerHTML = "";
                            sy.innerHTML = val;
                            op1.style.opacity = "1";
                            op2.style.opacity = "1";
                            sy.style.opacity = "1";
                            break;
                        }
                        else {
                            sy.innerHTML = val;
                            break;
                        }
                    break;
                case '=':
                    equal = true;
                    op1.style.opacity = "0.5";
                    op2.style.opacity = "0.5";
                    sy.style.opacity = "0.5";
                    e.style.opacity = "0.5";
                    final.style.color = "black";
                    if(final.innerHTML.toString().length>12)
                        final.style.fontSize = "40px";
                    else    
                        final.style.fontSize = "50px";
                    if (op2.innerHTML == '') {
                        final.innerHTML =  "= "+ parseFloat(op1.innerHTML);
                        break;
                    }
                    if (sy.innerHTML == '')
                        final.innerHTML =  "= "+ parseFloat(op1.innerHTML);
                    else {
                        operator(sy,op1,op2);
                        const value = parseFloat(final.innerHTML.replace('=', '').trim());
                        if (!isFinite(value)) {
                            final.innerHTML = "Can't divide by zero";
                        }
                    }
                    if(final.innerHTML==="Can't divide by zero"){
                        final.style.fontSize="35px";
                    }
                    if(window.innerWidth<=450)
                    {
                        final.style.fontSize="26px";
                    }
                    break;
            }
            const row1=document.getElementById("row1");
            row1.style.scrollBehavior = "smooth";
            row1.scrollTop = row1.scrollHeight;

            
            
        }

