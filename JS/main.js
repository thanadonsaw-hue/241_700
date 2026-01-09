/*
// STring 
let fname = 'John'  
console.log('name',fname)
const idcard = 123

//number
let age = 30
let height = 185.7
conft = 3.14
fname = 'Tom'

idcard = 456
console.log('idcard,idcard')

console.log('name',fname,'age',age)
//consold.log('age'age)
*/

/**
+ บวก
- ลบ
* คูณ
/ หาร
% mod หารเอาเศษ
 */

/**
condition statements (if,else,switch)
== เท่ากับ
!= มากกว่า 
> มากกว่า
< น้อยกว่า
>= มากกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
*/

/*
//Operetor
let number1 = 3
let number2 = 5

let number3 = number1 + ' ' + number2
let condition1 = number1 >=  number2 //Boolean (true or false)

console.log('condition  is ',condition1)
*/

/*
//if-else condition
if(comdition number1 >= number2){
    console.log('this if')
}else if(number1 == number2){
    console.log('this else if')
}else{
    console.log('this else')
}
*/

/**
Grade
>= 80 A
>= 70 B 
>= 60 C
>= 50 D
*/

/*
let score = 65
 if(score >= 80){
    console.log('Grade : A')
 }else if(score >= 70){
    console.log('Grade : B')
 }else if(score >= 60){
    console.log('Grade : C')
 }else if(score == 50){
    console.log('Grade : D')
 }else{
    console.log('Grade : F')
 }
*/
 
 /**
 && และ
 || หรือ
 ! not ไม่
  */

 /*
 let number1 = 5
 let number2 = 10
*/

 /*//T || F = F
 let condition = !(number1 >= 3 && number2 >= 11)
 console.log('result of condition',condition)
 */

/*
 let number = 20
if(number % 2 == 0){
    console.log('You are event.')
}
*/

/**\
for
 */

/*
let counter = 0
while(counter <= 10){
    console.log('Hi')
    counter += 1
}

for(let counter = 0; counter < 10; counter++){
    console.log('Hi')
}
*/

/*
let age1 = '20'
let age2 = '25'
let age3 = '30'

let ages = [20,25,30]

console.log('age1 age2 age3',age1 + ' ' + age2 + ' ' + age3)
console.log('array',ages)

console.log('index',ages[0])

//ต่อ array 
ages.push(25)
console.log('push array',ages)
//ลบ array
ages.pop(25)
console.log('pop array',ages)
*/

/*
let ages = [20,25,30,35,40]

if(ages.includes(30)){
    console.log('มีเลขสามสิบอยู่ใน Array')
}
ages.sort()
console.log('Sort name_list',ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log('Push name_list',name_list)

name_list.pop('dd')
console.log('Pop name_list',name_list)
console.log('Lenght name_list',name_list.length)

for(let index = 0; index < name_list.length;index++){
    console.log('name list',name_list[index])
}
*/
/*
let student = [{
    age: 30,
    name: 'aa'
    grade: 'A'
},{
    age: 25,
    name: 'bb'
    grade: 'B'
}]
student.push({
    age: 40,
    name: 'cc'
    grade: 'C'
})

for(let index = 0;index < student.length ;index++){
    console.log('Student number',(index + 1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}
*/

/*
let score1 =55
let score = 65

let grade = ''

//ประกาศฟังชันก์
function calculate_grade(score){
    if(score >= 80){
       grade = 'A'
    }else if(score >= 70){
       grade = 'B'
    }else if(score >= 60){
       grade = 'C'
    }else if(score >= 50){
       grade = 'D'
    }else{
       grade = 'f'
    }
return grade
}

//เรียกใช้ฟังชันก์
let grade1 = calculate_grade(grade1)
console.log('Grade',grade1)
*/

/*
let score = [20,30,40,50]

for(index = 0; index < score.length; index++){
    console.log('score',score[index])
    if(score[index] >= 30){
        new_score.push(score[index])
    }
}

let new_score = score.filter((s) => {
    return s >= 30
})

new_score.forEach((ns) => {
    console.log('forEach Score',ns)
})
*/

let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'D'
    },{
        name: 'bb',
        score: '80',
        grade: 'A'
    }
]

let student = students.find((s) => {
    if (s.name == 'aa') {
        return true
    }
})

let double_score = student
double_score.score = Number(double_score.score) * 2

let hightScore = students.filter((s) => {
    if (Number(s.score) >= 120) {
        return true
    }
})

console.log(student)
console.log('double_score', double_score)
console.log('hightScore', hightScore)
