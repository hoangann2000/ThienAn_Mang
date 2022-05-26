var A =[];
var printMang = "";

function nhapSoNguyen() {
    var num = Number(document.getElementById("SoNguyen").value);
    if (num == parseInt(num)) {
        A.push(num);
        printMang += num + ", ";
        document.getElementById("txtSoNguyen").innerHTML =
        printMang;
    }else {
        alert("Không phải số nguyên");
    }
}

function Sum(params) {
    var sum = 0;
    for (var i = 0; i < A.length; i++) {
        if(A[i] > 0) {
            sum += A[i];
        }
    }

    if (sum == 0) {
        document.getElementById("sum").innerHTML = "Không có số dương";
    }else {
        document.getElementById("sum").innerHTML = sum;
    }
}

function Count() {
    var count = 0;
    for(var i=0; i<A.length; i ++) {
        if(A[i] > 0)
            count +=1;
    }
    if(count==0) {
        document.getElementById("txt2").innerHTML = "Không có số dương";
    }else {
        document.getElementById("txt2").innerHTML = count;
    }
}

function Min() {
    var min = A[0];
    for (var i =0; i < A.length; i++) {
        if(A[i] < min) {
            min = A[i];
        }
    }
    document.getElementById("txt3").innerHTML = min;
}

function MinA() {
    var newA = [];
    for(var i =0; i<A.length; i ++) {
        if (A[i] > 0) {
            newA.push(A[i]);
        }
    }
    // console.log(newA[0])
    var min = newA[0];
    if(newA.length > 0) {
        for(var j=0; j< newA.length ; j++) {
            if(newA[j] < min) {
                min = newA[j];
            }
        }
        document.getElementById("txt4").innerHTML = min;
    }
    else {
        document.getElementById("txt4").innerHTML = "không có số dương";
    }
    
    // console.log(newA.length);
}

function lastEvenNumber() {
    var Even = 0;
    for(var i =0;i<A.length; i++) {
        if (A[i] % 2 ==0) {
            Even = A[i];
        }
    }
    document.getElementById("txt5").innerHTML = Even;
    if (Even == 0) {
        document.getElementById("txt5").innerHTML = "-1";
    }
}

function  Swap() {
    var temp = 0;
    var vitri1 = document.getElementById("vitri1").value;
    var vitri2 = document.getElementById("vitri2").value;
    if (vitri1 == vitri2) {
        document.getElementById("txt6").innerHTML = A;
    }else{
        temp = A[vitri1];
        A[vitri1] = A[vitri2];
        A[vitri2] = temp;   
        document.getElementById("txt6").innerHTML = A;  
    }
    // console.log(A)
}

function AZ() {
    var temp = A[0];
    for(var i=0;i<A.length;i++) {
        for(var j=0;j<A.length;j++) {
            if(A[i] < A[j]) {
                temp = A[j];
                A[j] = A[i];
                A[i] = temp;
            }
        }
    }
    document.getElementById("txt7").innerHTML = A
}


function firstPrime() {
    for (var i = 0; i < A.length; i++) {
        var count = 0;
        for (var j = 1; j <= A[i]; j++) {
            if (A[i] % j == 0) {
                count++;
            }
        }
        if (count < 3 && count != 0) {
            document.getElementById("txt8").innerHTML = A[i];
            return A[i]
        }
    }
    document.getElementById("txt8").innerHTML = "-1";
}

var R = [];
var R1 = "";
function NumR() {
    var NumR = Number(document.getElementById("R").value);
    R.push(NumR);
    R1 += NumR + ", ";
    document.getElementById("txtThemSo").innerHTML = R1
}


function countSN() {
    var count = 0;
    for(var i=0; i<R.length; i++) {
        if(Number.isInteger(R[i])) {
            count ++;
        }
    }
    document.getElementById("txt9").innerHTML = count;
}

function SS() {
    var SoDuong = 0;
    var SoAm = 0;
    for(var i=0; i<A.length; i++) {
        if(A[i] >= 0) {
            SoDuong +=1;
        }else{
            SoAm +=1;
        }
    }
    if(SoDuong > SoAm) {
        document.getElementById("txt10").innerHTML = "Số dương lớn hơn số âm";
    }else{
        document.getElementById("txt10").innerHTML = "Số lượng số âm lớn hơn số dương";
    }
}

