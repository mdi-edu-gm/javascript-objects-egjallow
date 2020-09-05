# JavaScript Objects

An object is simply a dynamically collection of properties ((key-value entries).

Consider the following student object

```js
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
```



Try to do the following operations on the student array of objects

1. Essu Fonny send his object late. Do not add it manually above. Here is his object

   ```js
   {
       name:"Essu Fonny",
       dob: 1995,
       address:"Brikama", 
       skill : 6,
       interest :[ "programming", "research", "Cybersecurity", "Networking", "computer repair", "social Engineer", "workout", "riding"]  
   }
   ```

   Write a program that will add the above object to the students array of objects

2. Write a program that will get all the **names** of the students.

3. Write a program that will get the **interest** of all the students from "Jam City"

4. Write a program that will count how many students have a skill level greater than 5. This will be our top skilled students 

5. Write a program that will compute the average of the top skilled students

6. Write a program that will get all the names of the students that are born after 1990

7. Write a program that will get all the students that names start with "E"

8. Write a program that will get the name and address of students whose interest is "Reading"

**Note**

Solve all the above questions in the main.js file. For now you can use console.log to out the results. Later we will use template strings to output it in the browser.

**Hint**: You might want to solve each question as its own function, if Functional Programming is your style otherwise via OOP. JavaScript is a multi a multi-paradigm language, you can write imperative, object-oriented or functional code, choosing the right tool for the job.