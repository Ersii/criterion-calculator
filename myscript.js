function start(){
    var stable = parse();
    if (stable){
        console.log('Stable');
    }else{
        console.log('Unstable');
    }
}
function parse(){

    document.getElementById("table").innerHTML = " ";
    var str = document.getElementById("vstup").value;

    var stab = 0;
    var n = str.split(/[ ,]+/).length;
    console.log(n);
    var output = document.getElementById("output");

    var x = [];
    x = str.split(/[ ,]+/);
    var a = [];
    for(var i = 0;i<n;i++){
        a[i] = Number(x[i]);
    }
    

    i = 0;

    var k = [];

    k[0] = a[0] / a[1];

    var b = [];
    var c = [];
    var d = [];
    var e = [];
    var f = [];
    var g = [];
    var h = [];
    var m = [];

    for(i=0;i < (n/2-1);i++){
        if ((n % 2) != 0){
            if (a[(i+1)*2] == a[a.length-1]){
                b[i] = a[(i+1)*2];
            }else{
                b[i] = a[(i+1)*2] - (k[0]*a[3+(i*2)]);
            }
        }else{
            b[i] = a[(i+1)*2] - (k[0]*a[3+(i*2)]);
        }
        console.log(b[i]);
    }

    if(b[0] == 0){

        k[1] =  0;
        drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
        output.innerHTML = "Systém je nestabilný <br>";
        return false;
    }
    k[1] = a[1] / b[0];


    for(i =0;i < (n/2-1);i++){
        console.log(b.length);
        if (a[3+(i*2)] != undefined){
            if(i+1 >= b.length){
                c[i] = a[3+(i*2)]
            }else{
                c[i] = a[3+(i*2)] - (k[1]*b[(i+1)]);
            }
        }
        console.log(c[i]);
    }

    if(c[0] == 0){

        k[2] = 0;
        drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
        output.innerHTML = "Systém je nestabilný <br>";
        return false;
    }

    k[2] = b[0] / c[0];
    //Ak je K Infinity -> nestabilne
    //if (k[2]== Number.POSITIVE_INFINITY || k[2] == Number.NEGATIVE_INFINITY){console.log(k[2]);

    console.log(22222);

    if (c.length > 1){
        for(i =0;i < (b.length-1);i++){
            if (b[i+1] != undefined){
                if(i+1 >= c.length){
                    d[i] = b[i+1];
                }else{
                    d[i] = b[i+1] - (k[2]*c[i+1]);
                }
            }
        }
        console.log(d);

        if(d[0] == 0){

            k[3] = 0;
            drawTable(5,k,a,b,c,d,e,f,g,h,m,"table");
            output.innerHTML = "Systém je nestabilný <br>";
            return false;
        }

        k[3]=c[0]/d[0];

        for(i =0;i < (c.length-1);i++){
            if (c[i+1] != undefined){
                if(i+1 >= d.length){
                    e[i] = c[i+1];
                }else{
                    e[i] = c[i+1] - (k[3]*d[i+1]);
                }
            }
        }
        if(e[0] == 0){

            k[4] = 0;
            drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
            output.innerHTML = "Systém je nestabilný <br>";
            return false;
        }
        k[4]=d[0]/e[0];

        for(i =0;i < (d.length-1);i++){
            if (d[i+1] != undefined){
                if(i+1 >= e.length){
                    f[i] = d[i+1];
                }else{
                    f[i] = d[i+1] - (k[4]*e[i+1]);
                }
            }
        }
        if(f[0] == 0){

            k[5] = 0;
            drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
            output.innerHTML = "Systém je nestabilný <br>";
            return false;
        }
        k[5]=e[0]/f[0];

        for(i =0;i < (e.length-1);i++){
            if (d[i+1] != undefined){
                if(i+1 >= f.length){
                    g[i] = e[i+1];
                }else{
                    g[i] = e[i+1] - (k[5]*f[i+1]);
                }
            }
        }
        if(g[0] == 0){

            k[6] = 0;
            drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
            output.innerHTML = "Systém je nestabilný <br>";
            return false;
        }
        k[6]=f[0]/g[0];

        for(i =0;i < (f.length-1);i++){
            if (d[i+1] != undefined){
                if(i+1 >= g.length){
                    h[i] = f[i+1];
                }else{
                    h[i] = f[i+1] - (k[6]*g[i+1]);
                }
            }
        }
        if(h[0] == 0){

            k[7] = 0;
            drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
            output.innerHTML = "Systém je nestabilný <br>";
            return false;
        }
        k[7]=g[0]/h[0];

        for(i =0;i < (g.length-1);i++){
            if (d[i+1] != undefined){
                if(i+1 >= h.length){
                    m[i] = g[i+1];
                }else{
                    m[i] = g[i+1] - (k[7]*h[i+1]);
                }
            }
        }
        if(m[0] == 0){

            k[8] = 0;
            drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
            output.innerHTML = "Systém je nestabilný <br>";
            return false;
        }
        k[8]=h[0]/m[0];
    }else{
        d[0]=b[1];
        k[3]=c[0]/d[0];
        e[0]=c[1];
        k[4]=d[0]/e[0];
    }
    console.log(d);
    console.log(k[3]);
    console.log(e);
    for(var p =0; p<n;p++){
        if(k[p] < 0 ){
            stab++;
        }
    }
    console.log(stab);
    output.innerHTML = " ";
    output.innerHTML = "pocet nestabilnych korenov = " + stab + "<br>";

    drawTable(n,k,a,b,c,d,e,f,g,h,m,"table");
    return true;
}

function start2(){
    var output = document.getElementById("output4");
    output.innerHTML = "";
    var stable = parse2();
    if (stable){
        console.log('Stable');
    }else{
        console.log('Unstable');
    }
}
function parse2(){
    document.getElementById("table2").innerHTML = " ";
    var str = document.getElementById("vstup2").value;

    var n = str.split(/[ ,]+/).length;

    var x = [];
    x = str.split(/[ ,]+/);
    var a = [];
    for(var i = 0;i<n;i++){
        a[i] = Number(x[i]);
    }

    var arr = [];
    var nuler = 0;

    for (i =0;i<(n-1);i++){ //i = cislo riadku
        if(!arr[i])         //Vytvorenie 2D pola
            arr[i] = [];

        if (i % 2 == 0 && i != 0){
            nuler++;    //pocet nul na zaciatku, kazdy druhy riadok sa pridava jedna
        }

        var k =0;       //pomoc na vyber prvku z pola A pre parny a neparny riadok
        if (i == 0 || i % 2 == 0){
            k = 1;
        }else{
            k = 0;
        }
        var tmp = nuler; //pomocna premenna aby som upravil znizil pocet nul
        for(j=0;j<(n-1);j++){
            if (tmp > 0){
                arr[i][j] = 0;
                tmp--;
                k -= 2;         //ked zacinam riadok nulou, treba posunut k aby sa vyberali spravne cisla z pola 'a'
            }else{
                if (a[j+k] == undefined){       //ked a[j+k] neexistuje, prida sa nula, na osetrenie nul na konci
                    arr[i][j] = 0;
                }else{
                    arr[i][j] = a[j+k];
                }
            }
            k++;
        }
    }
    console.log(arr);
    var allDeterminants = makeDeterminants(arr);

    printDeterminants(allDeterminants);

    var positiveDeterminants = areDetPositive(allDeterminants);
    var output = document.getElementById("output4");

    if (positiveDeterminants){
        output.innerHTML += "<br> Systém je stabilný <br>";
    }else {
        output.innerHTML += "<br> Systém je nestabilný <br>";
    }
    return true;
}

function drawTable(n,k,a,b,c,d,e,f,g,h,m,tableId){
    var index;
    var table = document.createElement('table');
    for(var x = 0; x <= n-1; x++){
        if (x==0){
            index = n-1;
        }
        var tr = document.createElement('tr');
        var j = 0;
        var l = 1;
        for(var y = 0; y < (n/2)+2; y++){
            var td = document.createElement('td');
            if (y==0){
                if (x > 0){
                    if (x == 1){
                        td.classList.add('kClass');
                    }
                    if(isNaN(Math.round(k[x-1]*100)/100)){td.innerHTML =  "k" + "<sub>" + index + "</sub>" + " = ";}else{
                        td.innerHTML =  "k" + "<sub>" + index + "</sub>" + " = " + Math.round(k[x-1]*100)/100;}
                }
                else{
                    td.innerHTML =  " ";
                }
            }else if (y ==1){
                if (x == 1){
                    td.classList.add('sClass1');
                }else{
                    td.classList.add('sClass');
                }
                td.innerHTML =  "s" + "<sup>" + index-- + "</sup>";
            }else{
                if (x==1){
                    if (a[l] != undefined){
                        td.classList.add('aClass');
                        td.innerHTML =  a[l] ;
                    }else{
                        td.classList.add('aClass');
                        td.innerHTML =  " ";
                    }
                    l += 2;
                }else if (x==2){
                    if ((y-2) < b.length){
                        td.innerHTML =  Math.round(b[y-2]*100)/100 ;
                    }
                } else if (x==3){
                    if ((y-2) < c.length){
                        td.innerHTML =  Math.round(c[y-2]*100)/100 ;
                    }
                }else if (x==4){
                    if ((y-2) < d.length){
                        td.innerHTML =  Math.round(d[y-2]*100)/100 ;
                    }
                }else if (x==5){
                    if ((y-2) < e.length){
                        td.innerHTML =  Math.round(e[y-2]*100)/100 ;
                    }
                }else if (x==6){
                    if ((y-2) < f.length){
                        td.innerHTML =  Math.round(f[y-2]*100)/100 ;
                    }
                }else if (x==7){
                    if ((y-2) < g.length){
                        td.innerHTML =  Math.round(g[y-2]*100)/100 ;
                    }
                }else if (x==8){
                    if ((y-2) < h.length){
                        td.innerHTML =  Math.round(h[y-2]*100)/100 ;
                    }
                }else if (x==9){
                    if ((y-2) < m.length){
                        td.innerHTML =  Math.round(m[y-2]*100)/100 ;
                    }
                }else{
                    if (a[j] != undefined){
                        td.innerHTML =  a[j] ;
                    }else{
                        td.innerHTML =  " ";
                    }
                    j += 2;
                }

            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    document.getElementById(tableId).appendChild(table);
}

function makeDeterminants(matrix){
    var determinants = [];  //pole vysledok subdeterminantov
    console.log(matrix.length);
    for (i =0;i< matrix.length;i++){
        var determinantN = getMatrix(matrix,i);
        determinants.push(determinantN);
    }
    paintMatrix(matrix);
    return determinants;
}

function paintMatrix(array) {
    var result = document.getElementById("output3");
    result.innerHTML = "Hurwitzova matica<br>";
    var tbl = document.createElement('table');
    tbl.setAttribute("class","tableHurwitz");
    var tbdy = document.createElement('tbody');
    var index = 0;
    for (var i = 0; i < array[0].length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < array[0].length; j++) {
            console.log(array[i][j]);

            var td = document.createElement('td');
            td.classList.add('tdclass');
            td.id = i.toString()+j.toString();
            td.innerText = array[i][j];
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    result.appendChild(tbl);

}

function getMatrix(matrix,number) {
    var retmatrix = [];
    var n = number;
    if (number == 0){
        return matrix[0][0];
    }
    for (k =0 ;k < n+1;k++){        //riadky mensej matice
        console.log("i Num: " + k);
        if(!retmatrix[k])
            retmatrix[k] = [];
        for (j = 0;j < n+1;j++){    //stlpce mensej matice
            var num = matrix[k][j];
            retmatrix[k][j] = num;
        }
    }


    console.log(retmatrix);
    console.log(retmatrix.length);
    console.log(math.det(retmatrix));
    var det = math.det(retmatrix);
    return det;
}
function printDeterminants(determinants){
    var output = document.getElementById("output2");
    output.innerHTML = "";
    
    for (l = 0;l < determinants.length;l++){
        output.innerHTML +="<div id=d"+(l+1) +">"+ "Δ" + (l+1) + ": " + Math.round(determinants[l]*100)/100 +"</div>" + "<br>";
    }

}

function areDetPositive(allDeterminants){
    for (l = 0;l < allDeterminants.length;l++){
        if (allDeterminants[l] <= 0){
            return false;
        }
    }
    return true;
}

$('#output2').mouseover(function() {
    $($( this ).children()).mouseover(function() {
        var tmp = this.id.slice(1, 2);
        for (i = 0;i < tmp;i++){
            for (j = 0;j < tmp;j++) {
                $('#' + i.toString() + j.toString()).css('background-color', '#F7FE2E');
            }
        }
    });
    $($( this ).children()).mouseout(function() {
        var tmp = this.id.slice(1, 2);
        for (i = 0;i < tmp;i++){
            for (j = 0;j < tmp;j++) {
                $('#' + i.toString() + j.toString()).css('background-color', '#DDDDDD');
            }
        }
    })
});

$('document').ready(function(){
        $('#t').keyup(function(){
            var pomP = ($(this).val()) / 1000;
            $('#krok').val(pomP);
        });
    });

function start3(){
    
    document.getElementById("ecka").innerHTML = "";
    var Fraction = algebra.Fraction;
    var Expression = algebra.Expression;
    var Equation = algebra.Equation;

    var citatel = document.getElementById("vstup4").value; // citatel
    var menovatel = document.getElementById("vstup3").value; // menovatel

        //ZISKANIE CITATELA ZO VSTUPU
    var citatelPole = [];

    citatelPole = citatel.split(/[ ,]+/);
    console.log(citatelPole);

    var pocetClenov = citatelPole.length;
    var pomocnePole = [];

    for(var i = 0; i < citatelPole.length; i++){
        pomocnePole[i] =  citatelPole[i] + "s^" + (pocetClenov-1).toString();
        pocetClenov--;
    }

    var citatelX = pomocnePole.join("+");
    console.log(citatelX); //MAM CITATEL V TVARE napr. 1s^4+2s^3+5s^2+4s^1+7s^0


    //ZISKANIE MENOVATELA ZO VSTUPU
    var menovatelPole = [];

    menovatelPole = menovatel.split(/[ ,]+/);

    var pocetClenov2 = menovatelPole.length;
    console.log(pocetClenov2);
    console.log(menovatelPole);
    var pomocnePole2 = [];

    var typCharakteristiky = document.getElementById('selectid').value;

    var grafText = "";
    var grafText2 = "";

    if(typCharakteristiky == "1") {
        grafText = "Prechodová charakteristika";
        grafText2 = "y[t]";
        for(var i = 0; i< menovatelPole.length; i++){
            pomocnePole2[i] = menovatelPole[i] + "s^" + (pocetClenov2).toString();
            pocetClenov2--;
        }
    }else{
        grafText = "Impulzná charakteristika";
        grafText2 = "k[t]";
        for(var i = 0; i< menovatelPole.length; i++){
            pomocnePole2[i] = menovatelPole[i] + "s^" + (pocetClenov2-1).toString();
            pocetClenov2--;
    }}

    

    var menovatelX = pomocnePole2.join("+");
    console.log(menovatelX); //MAM MENOVATEL V TVARE napr. 1x^2+2x^1+5x^0

    
    document.getElementById("zlomok2").innerHTML = "<p>$$F(s) = {{"+citatelX+"} \\over {"+menovatelX+"}}$$</p>";
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"zlomok2"]); 

    var citatelK = "solve(" + citatelX.toString() + ",s)";
    var x = nerdamer(citatelK);
    console.log(x.toString()); //korene citatela

    var menovatelK = "solve(" + menovatelX.toString() + ",s)";
    var z = nerdamer(menovatelK);
    console.log(z.toString()); //KORENE MENOVATELA (S-ka)


    var pomocnaS = [];
    pomocnaS = (z.toString()).replace(/[.*+?^${}()|[\]\\]/g,'');
    console.log(pomocnaS);

    var s = [];
    s = pomocnaS.split(",");
    //console.log(s);
    var pomomocnaPremenna = [];
    for(var i = 0; i< s.length;i++){
                pomomocnaPremenna = s[i].split("/");
               
                if(pomomocnaPremenna[1]){
                    var xStr = "factor((" + pomomocnaPremenna[0].toString() + ")/(" + pomomocnaPremenna[1].toString() + "))";
                var arr = [nerdamer(xStr)];
                s[i] = Number(arr[0]);
                
                }else{
                    s[i] = Number(pomomocnaPremenna[0]);
                }
                
    }

   
   var stupenR = 1;

   for(var i = 0; i< s.length;i++){
    if(isNaN(s[i])){
        stupenR++;
    }
   }

   s = s.filter(function (value) {
    return !Number.isNaN(value);
    });



   console.log(s);
   console.log(stupenR);

   if(stupenR == 1){
    var expr = [];    //Jednotlive cleny menovatela napr. (s+1)(s+2)(s+3)
    for(var i=0;i<s.length;i++){
        expr[i] = new Expression("s");
        if(s[i] != 0){
            expr[i] = expr[i].add(-s[i]);     
        }
    }

    //console.log(expr[0].toString());
    //console.log(expr[1].toString());
    //console.log(expr[2].toString());

    var pom = expr[0];     //cely menovatel vynasobeny
    for(var i = 0; i<expr.length-1;i++){
        pom = pom.multiply(expr[i+1]);
    }
    console.log(pom.toString());

    //TODO VYNASOB citatel * expr[i]

    var prvy = nerdamer(citatelX.toString());
    var druhy = [];
    var vysledokk = [];

    for(var i = 0; i < expr.length;i++){
        druhy[i] = nerdamer(expr[i].toString().replace(/\s/g, ''));
        vysledokk[i] = nerdamer(prvy).multiply(druhy[i]);
    }
    console.log(vysledokk.toString());

    console.log(s.length);
    var g = [];
    for(var i = 0; i< s.length;i++){
        
        var xStr = "factor((" + vysledokk[i].toString() + ")/(" + pom.toString() + "))";
        var arr = [nerdamer(xStr)];

        g[i] = nerdamer(arr.join(''));
        console.log(g[i].toString());
    }

   var solution = [];
   var a = [];
   for(var i=0;i<g.length;i++){
    solution[i] = nerdamer(g[i].evaluate().toString(),{s:s[i]});
    console.log(solution[i].toString());
    a[i] = Number(solution[i]);
    console.log(a[i]);
   }

   if(typCharakteristiky == 1){
        var prvyClen = "y[t] = ";
    }else{
        var prvyClen = "k[t] = ";
    }
    document.getElementById("ecka").innerHTML = prvyClen;
   for(var i = 0;i<s.length;i++){
    console.log(s.length);
    console.log(s[i]);
    console.log(a[i]);

    if(i == (s.length-1)){
        if(s[i] == 0){
            document.getElementById("ecka").innerHTML += "("+solution[i].toString()+")";
        }else{
            document.getElementById("ecka").innerHTML += "("+solution[i].toString()+"&#215&#8455<sup>"+s[i]+"t</sup>)";
        }
        
    }else{
        if(s[i] == 0){
            document.getElementById("ecka").innerHTML +="("+ solution[i].toString()+")";
        }else{
            document.getElementById("ecka").innerHTML +="("+ solution[i].toString()+"&#215&#8455<sup>"+s[i]+"t</sup>)+";
        }
        
    }
    
   }
   

   function add(accumulator, c) {
    return accumulator + c;
    }
   
   var poleY =[];
   var t = document.getElementById("t").value; //cas zo vstupu
   var poleNaX = [];
   var poleNaY = [];

   var krok = document.getElementById("krok").value;
   console.log(krok);

   for(var x = 0.0;x<=t;x+=Number(krok)){  //for ktory ide po T
        for(var i = 0;i<g.length;i++){
        poleY[i] = (Math.pow(Math.E,s[i]*x))*a[i];  // s[i] - Ska, a[i] - vysledky jednotlivych Gcok
        
    }
    var sum = poleY.reduce(add);  // scitam 3 hodnoty ktore som vytvoril vlozil do poleY
    //console.log(sum);
    //console.log(x);
     poleNaX.push(x);
     poleNaY.push(sum);
   }
   console.log(poleNaY);
   console.log(poleNaX);
   var trace = {
        x: poleNaX,
        y: poleNaY,
        type: 'scatter'
    };
    var layout = {
        title: {
        text:grafText,
        font: {
            family: 'Courier New, monospace',
            size: 24
        },
        xref: 'paper',
        x: 0.05,
    },
        xaxis: {
            title: {
            text: 'čas[t]',
            font: {
            family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
      }      
    },
  },
  yaxis: {
    title: {
      text: grafText2,
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

    var data = [trace];

    Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true}); 

   }else{

    var expr = [];    //Jednotlive cleny menovatela napr. (s+1)(s+2)(s+3)
    for(var i=0;i<s.length;i++){

        expr[i] = "s";
        console.log(expr[i]);
        if(s[i] != 0){
            //expr[i] = expr[i].add(-s[i]);   
            expr[i] = expr[i] +" + " +-s[i];
        }
    }

    //console.log(expr[0].toString());

    var pom = nerdamer(''+expr[0]+'');     //cely menovatel vynasobeny
    for(var i = 0; i<expr.length-1;i++){
        pom = nerdamer(''+expr[i+1]+'').multiply(pom);
    }
    console.log(pom.toString());

    //TODO VYNASOB citatel * expr[i]

    var prvy = nerdamer(citatelX.toString());
    var druhy = [];
    var vysledokk = [];

    for(var i = 0; i < expr.length;i++){
        druhy[i] = nerdamer(expr[i].toString().replace(/\s/g, ''));
        vysledokk[i] = nerdamer(prvy).multiply(druhy[i]);
    }
    console.log(vysledokk.toString());

    console.log(s.length);
    var g = [];
    for(var i = 0; i< s.length;i++){
        var arr = [nerdamer(''+vysledokk[i]+'').divide(''+pom+'').evaluate()];

        g[i] = nerdamer(arr.join(''));
        console.log(g[i].toString());
    }

    var solution = [];
    var a = [];
   for(var i=0;i<g.length;i++){
    if(s[i] == 0){
        console.log(-s[i-1]);
        solution[i] = 1/(Math.pow((-s[i-1]),stupenR));
        a[i] = Number(solution[i]);
    }else{
        solution[i] = nerdamer(g[i].evaluate().toString(),{s:s[i]});
    console.log(solution[i].toString());
    a[i] = Number(solution[i]);
    
    }
   }
   console.log(a);
   //MAM spravne Gcka treba derivovat

   if(stupenR == 3){
   var prvaDerivacia = nerdamer('diff('+g[0]+', s)');
   console.log(prvaDerivacia.toString());
   var druhaDerivacia = nerdamer('diff('+g[0]+', s, 2)'); //second derivative
   console.log(druhaDerivacia.toString());

   prvaDerivacia = nerdamer(prvaDerivacia.toString(),{s:s[0]});
   druhaDerivacia = nerdamer(druhaDerivacia.toString(),{s:s[0]});

   console.log(prvaDerivacia.toString());
   console.log(druhaDerivacia.toString());

   a.push(Number(prvaDerivacia));
   a.push(Number(druhaDerivacia));
}else{
	var prvaDerivacia = nerdamer('diff('+g[0]+', s)');
   console.log(prvaDerivacia.toString());

    prvaDerivacia = nerdamer(prvaDerivacia.toString(),{s:s[0]});

    a.push(Number(prvaDerivacia));
}
   console.log(a);

   function add(accumulator, c) {
    return accumulator + c;
    }


   var poleY =[];
   var t = document.getElementById("t").value; //cas zo vstupu
   var poleNaX = [];
   var poleNaY = [];
   console.log(Number(krok));
   var krok = document.getElementById("krok").value;
   for(var x = 0.0;x<=t;x+=Number(krok)){  //for ktory ide po T
   		if(stupenR == 3){
   			poleY = a[1] + Math.pow(Math.E,s[0]*x) * ((a[3]/2) + (a[2] * x) + ((a[0]/2) * (Math.pow(x,2))));
   			var sum = poleY;  
     		poleNaX.push(x);
     		poleNaY.push(sum);
            console.log(x);
            console.log(sum);
   		}else{
   			poleY = a[1] + Math.pow(Math.E,s[0]*x) * ((a[2] * x) + ((a[0]/2) * (Math.pow(x,2))));
   			var sum = poleY;  
     		poleNaX.push(x);
     		poleNaY.push(sum);
            console.log(x);
            console.log(sum);
   		}
        
   }
   console.log(poleNaY);
   console.log(poleNaX);

   var trace = {
        x: poleNaX,
        y: poleNaY,
        type: 'scatter'
    };
    var layout = {
        title: {
        text:grafText,
        font: {
            family: 'Courier New, monospace',
            size: 24
        },
        xref: 'paper',
        x: 0.05,
    },
        xaxis: {
            title: {
            text: 'čas[t]',
            font: {
            family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
      }      
    },
  },
  yaxis: {
    title: {
      text: grafText2,
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

    var data = [trace];

    Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});


   var img = 0;
   var imgPole =[];
   for(var i = 0; i< poleNaY.length;i++){
   	if(isNaN(poleNaY[i])){
   		img++;
   	}

   	console.log(img);

   	if(img == poleNaY.length && img != 0){
   		var imgPole = nerdamer('partfrac(('+citatelX+')/('+menovatelX+'), s)');
		console.log(imgPole.evaluate().toString());
		imgPole = imgPole.toString().split("^(-1)");
		console.log(imgPole.toString());
		for(var i = 0;i<imgPole.length-1;i++){
			imgPole[i] = imgPole[i] + "^(-1)";

			if(imgPole[i].charAt(0) == "*"){
				imgPole[i] = imgPole[i].toString().substring(3);
				imgPole[i-1] = imgPole[i-1] + "*s";
			}
		}
		console.log(imgPole.toString());
   	}
   }

   if(img != 0){var laplacePole = [];
   for(var i =0;i<imgPole.length-1;i++){
   	laplacePole[i] = nerdamer('ilt('+imgPole[i]+',s, t)').evaluate();

   }
   console.log(laplacePole.toString());
   
   laplacePole = laplacePole.join("+");
   
    
    var sum1;
    var poleNaX2 = [];
    var poleNaY2 = [];
    var krok = document.getElementById("krok").value;
        for(var x = 0.0;x<=t;x+=Number(krok)){  //for ktory ide po T
                sum1 = nerdamer(laplacePole.toString(),{t: x});
                console.log(sum1.evaluate().toString());
                poleNaX2.push(x);
                poleNaY2.push(Number(sum1.evaluate()));
        		console.log(poleNaY2);
            }
  
   var trace = {
        x: poleNaX2,
        y: poleNaY2,
        type: 'scatter'
    };
    var layout = {
        title: {
        text:grafText,
        font: {
            family: 'Courier New, monospace',
            size: 24
        },
        xref: 'paper',
        x: 0.05,
    },
        xaxis: {
            title: {
            text: 'čas[t]',
            font: {
            family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
      }      
    },
  },
  yaxis: {
    title: {
      text: grafText2,
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

    var data = [trace];

    Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true}); }
   


   }
     
    }


