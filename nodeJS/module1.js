console.log("hi this is module -1")

x = 10
function student_data_1(){
    console.log("hi bro im module 1 student")

}
module.exports = {func1 : student_data_1,x:x,cal : calcu}

function calcu(x,y){
   return x+y
}