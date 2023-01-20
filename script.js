// برنامه ای که تا زمانی که کاربر مایل است دو عدد صحیح را از کاربر دریافت کند
// سپس یک عدد صحیح تصادفی بین این دو عدد تولید کند
// و در ادامه اعمال زیر را انجام دهد
// 1- نمایش تعداد ارقام عدد تصادفی
// 2- نمایش مجموع و میانگین ارقام عدد تصادفی
// 3- نمایش یک عدد تصادفی دیگر با استفاده از فقط ارقام عدد تصادفی اول
// 4- تولید یک عدد تصادفی بین دو عدد دریافتی که از دو طرف یکسان خوانده می شود
// 5- بررسی اول بودن عدد تصادفی
// 6- خروج از برنامه

var num1,num2,numRand,userOption
var whileCondition=true
//------------------------------------------------
function countDigi(num){
    var numString=String(num)
    return numString.length
}
//-------------------------------------------------
function addDigit(num){
    var numLength=countDigi(num)
    var numString=String(num)
    var sum=0,ave=0

    for(var i=0;i<numLength;i++){
        sum+=Number(numString[i])
    }
    ave=sum/numLength

    alert("مجموع ارقام عدد تصادفی "+num+" برابر است با: "+sum+"\n و میانگین ارقام این عدد برابر است با: "+ave)
}
//----------------------------------------------------
function createRandomNumber(num){
    var numRandLength=+prompt("شما می خواهید عدد تصادفی جدید، چند رقمی باشد؟\nتعداد ارقام آن را وارد کنید:")
    var numRand=""

    for(var i=0;i<numRandLength;i++){
        var randIndex=Math.trunc(Math.random()* String(num).length)
        numRand+=String(num)[randIndex]
    }

    alert("اولین عدد تصادفی: "+num+"\nعدد تصادفی جدید: "+numRand)
}
//----------------------------------------------------
function createRandomNumber2(num1,num2,num3){
    var numLength=String(num3).length
    var midNumLength=Math.trunc(numLength/2)

    var numRand=Math.trunc(Math.random()*(10**midNumLength))
    var numRandLength=String(numRand).length
    var numRandReverse=""

    for(var i=numRandLength-1;i>=0;i--){
        numRandReverse+=String(numRand)[i]
    }

    var newNumRand=numRand+numRandReverse

    alert("عدد تصادفی اولیه: "+num3+"\nعدد تصادفی متقارن جدید: "+newNumRand)

}

//----------------------------------------------------
function uniqueTest(num){
    var num2=Math.trunc(num/2)
    var code=0

    for(var i=2;i>=num2;i++){
        if(num%i===0){
            alert("عدد تصادفی "+num+" اول نیست.")
            code=1
            break
        }
    }
    if(code===0){
        alert("عدد تصادفی "+num+" اول است.")
    }
}

//************************ Main Program ****************************
num1=+prompt("یک عدد صحیح وارد کنید:",0)
num2=+prompt("عدد صحیح دیگری را وارد کنید:",0)
if(num1>num2){
    var temp=num1
    num1=num2
    num2=temp
}
numRand=Math.trunc(Math.random()*(num2-num1+1)+num1)

while(whileCondition){

    userOption=+prompt("عدد تصادفی تولید شده بین دو عدد "+num1+" و "+num2+" برابر است با: "+numRand+"\n\nاکنون می توانید با انتخاب یکی از اعداد زیر اعمال زیر را انجام دهید: \n\n1- نمایش تعداد ارقام عدد تصادفی\n2- نمایش مجموع ارقام عدد تصادفی\n3- نمایش یک عدد تصادفی دیگر با استفاده از فقط ارقام عدد تصادفی اول\n4- تولید یک عدد تصادفی بین دو عدد دریافتی که از دو طرف یکسان خوانده می شود\n5- بررسی اول بودن عدد تصادفی\n6- خروج از برنامه",6)

    switch(userOption){
        case 1:
            alert("تعداد ارقام عدد تصادفی "+numRand+" برابر است با: "+countDigi(numRand))
            break
        
        case 2:
            addDigit(numRand)
            break

        case 3:
            createRandomNumber(numRand)
            break

        case 4:
            createRandomNumber2(num1,num2,numRand)
            break

        case 5:
            uniqueTest(numRand)
            break

        case 6:
            whileCondition=false
            break
        
        default:
            alert("انتخاب شما صحیح نیست!!")
    }

    userAns=confirm("آیا می خواهید برنامه را ادامه دهید؟")
    if(userAns!=true){
        break
    }


}



