function Quiz (name , ans, crctans){
    this.name = name;
    this.ans = ans;
    this.crctans = crctans;
}

var qus1 = new Quiz("who is the founder of Apple?", ['Steve jobs','Mark Zuckerberg' , 'Larry page'], 0);
var qus2 = new Quiz("Arrays starts from ?" , ['1','2','0'], 2);
var qus3 = new Quiz("select the framework/Library that uses js?", ['Django', 'Laravel' ,'React'], 2);
var questions = [qus1,qus2,qus3];

var question = {
    no: '1',
    display: function(no){
        console.log(this.no + ":-  " + questions[no].name);
        for(i in questions[no].ans){
            console.log(i + ": " + questions[no].ans[i])
        }
       var ans = prompt("Select the correct answer in numbers?");
       this.check(ans,no);
    },
    check: function(ans,no){
        console.log(no);
        if(ans == questions[no].crctans){
            console.log('correct answer!!')
        }else{
            console.log('wrong answer!! try again');
        }
    }
}
var rand =Math.floor(Math.random() * 3);
question.display(rand);