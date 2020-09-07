const students = [
    {
        name:  "Ebrima Touray",
        dob: 1992,
        skill: 4,
        address: "Jam City",
        interest: ["Writing", "Programming", "Movies", "Athletics"]
    },
    {
        name:  "Buba Sowe",
        dob: 1986,
        skill: 4,
        address: "Bakoteh",
        interest: ["Reading", "Programming", "Movies", "History"]
    },
    {
        name: "Muhammad Gibba",
        dob: 1997,
        address: "Abuko",
        skill: 5,
        interest: ["Programing","videos", "Reading", "Writing"]
    },
    {
        name: "Jailan Saine",
        dob: 1990,
        address: "Tabokoto",
        skill: 6,
        interest: ["Reading", "Sports", "Programming", "Travel"]
    },
    {
        name: "Ismaila Turner",
        bornDate: 1998,
        address: "Dippakunda",
        skill: 6,
        interest: ["Programing","Music ", "Reading", "Spying"]
    },
    {
        name: "Abu Turaab",
        dob: 1988,
        address: "Jam City",
        skill: 6,
        interest: ["Reading", "Programming", "History"]
    },
    {
        name: "Ousman MB Gassama",
        dob: 1996,
        address: "Banjulinding",
        skill: 6, 
        interest: ["networking", "currentAfairs", "football"]
    }
];

//sadsa

let obj = {
    name:"Essu Fonny",
    dob: 1995,
    address:"Brikama", 
    skill : 6,
    interest :[ "programming", "research", "Cybersecurity", "Networking", "computer repair", "social Engineer", "workout", "riding"]  
}

function addStudent(obj) {
    students.push(obj);
    console.log(students)
    
}
addStudent(obj)


function studenNames(students) {
    let names = [];
    students.forEach(element => {
       names.push(element.name) 
       //console.log(element.name)
    });
    console.log(names)
}
studenNames(students);

function interest(students) {
    students.filter(ele => {
        if(ele.address === "Jam City"){
            console.log(ele.interest);
        }
    })   
}

interest(students)

function countSkill(students) {
    let count = 0;
    students.forEach(element => {
        if (element.skill > 5) {
            count++;
        }
        
    });
    console.log(count);
}
countSkill(students)

function averageSkill(students) {
    let topskilled = [];
    let cumSkill = 0;
    let count = 0;
    students.forEach(element => {
        if (element.skill > 5) {
            topskilled.push(element)
            cumSkill += parseInt(element.skill);
            count++;
        }
        
    });

   let average = cumSkill/ count
    console.log(average);
}
averageSkill(students)

function namesWithE(students) {
    let student = [];
    students.filter(ele => {
        if(ele.name.startsWith('E')){
            student.push(ele);
        }
    })   
    console.log(student)
}

namesWithE(students)

function readingStd(students) {
        let reading = [];
        students.filter(ele => {
            if(ele.interest.includes("Reading")){
                reading.push({name: ele.name, address: ele.address});
            }
        })   
        console.log(reading)
    }
    
    readingStd(students)



