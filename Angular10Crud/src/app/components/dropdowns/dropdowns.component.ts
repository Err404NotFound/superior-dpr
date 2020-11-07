import { Component, OnInit } from '@angular/core';



var majorRequiredCoreClasses = 
  [   
    "BIO 1110 - Life Science (2) (B2)",
    "BIO 1110L - Life Science Laboratory (1) (B3)",
    "CS 1300 - Discrete Structures (3)",
    "CS 1400 - Introduction to Programming and Problem Solving (4)",
    "CS 2400 - Data Structures and Advanced Programming (4)",
    "CS 2640 - Computer Organization and Assembly Programming (3)",
    "CS 3110 - Formal Languages and Automata (3)",
    "CS 3310 - Design and Analysis of Algorithms (4)",
    "CS 3650 - Computer Architecture (4)",
    "CS 3750 - Computers and Society (3) (B5 or D4)",
    "CS 4080 - Concepts of Programming Languages (3)",
    "CS 4310 - Operating Systems (3)",
    "CS 4630 - Undergraduate Seminar (1)",
    "CS 4800 - Software Engineering (3)",
    "MAT 1140 - Calculus I (4) (B4)",
    "MAT 1150 - Calculus II (4) (B4)",
    "MAT 2250 - Linear Algebra with Applications to Differential Equations (4)",
    "PHY 1510 - Introduction to Newtonian Mechanics (3) (B1)",
    "PHY 1510L - Newtonian Mechanics Laboratory (1) (B3)",
    "PHY 1520 - Introduction to Electromagnetism and Circuits (3)",
    "PHY 1520L - Introductory Laboratory on Electromagnetism and Circuits (1)",
    "STA 2260 - Probability and Statistics for Computer Scientists and Engineers (3)"
  ];
var majorElectivesAtLeast12 =
  [
    "CS 3010 - Numerical Methods (3)",
    "CS 3520 - Symbolic Programming (3)",
    "CS 3560 - Object-Oriented Design and Programming (3)",
    "CS 3700 - Parallel Processing (3)",
    "CS 3800 - Computer Networks (3)",
    "CS 4110 - Compilers and Interpreters (3)",
    "CS 4200 - Artificial Intelligence (3)",
    "CS 4350 - Database Systems (3)",
    "CS 4450 - Computer Graphics (3)",
    "CS 4500 - Computability (3)",
    "CS 4600 - Cryptography and Information Security (3)",
    "CS 4650 - Big Data Analytics and Cloud Computing (3)",
    "CS 4700 - Game Development (3)",
    "CS 4810 - Software Engineering Practice (3)",
    "CS 4990 - Special Topics for Upper Division Students (1-3)"
  ];
var majorElectivesNoMoreThan3 =
  [
    "CS 2450 - Programming Graphical User Interfaces (3)",
    "CS 2560 - C++ Programming (3)",
    "CS 2600 - Unix and Scripting (3)",
    "CS 2990 - Special Topics for Lower Division Students (1-3)"
  ];
var majorElectivesNoMoreThan4 =
  [
    "CS 2000 - Special Study for Lower Division Students (1-3)",
    "CS 4000 - Special Study for Upper Division Students (1-3)",
    "CS 4410 - Internship in Computer Science (1-2)",
    "CS 4610 - Senior Project (1)",
    "CS 4620 - Senior Project (1)",
    "MAT 3470 - Combinatorics (3)",
    "MAT 3800 - Mathematics of Operations Research I (3)",
    "MAT 3810 - Mathematics of Operations Research II (3)",
    "MAT 4020 - Introduction to Numerical Analysis II (3)",
    "MAT 4750 - Graph Theory (3)",
    "MAT 4800 - Mathematical Programming (3)",
    "MAT 4850 - Introduction to Mathematical Modeling I (3)",
    "MAT 4860 - Introduction to Mathematical Modeling II (3)"
  ];

/* for dropdown menu style 1
// toggles dropdown menu 
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// filters through text; used for search bar
function filterFunction() {
  var input, filter, a, i;
  input = document.getElementById("userInput"); // looks for input with userInput 
  filter = input.value.toUpperCase();           // casts inputs to uppercase
  div = document.getElementById("menu");        // looks for div with menu 
  a = div.getElementsByTagName("a");            // finds the a tag in div

  // searches through the text content in the a tags w/in div
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;    // grab text from a
    if (txtValue.toUpperCase().indexOf(filter) > -1)  // if the input is found in a... 
    {
      a[i].style.display = "";
    } 
    else 
    {
      a[i].style.display = "none";
    }
  }
}
*/

// populates dropdown menu
// var select = document.getElementById("list");
// var options = majorRequiredCoreClasses;
// for(var i = 0; i < options.length; i++) 
// {
//   var opt = options[i];
//   var el = document.createElement("option");
//   el.textContent = opt;
//   el.value = opt;
//   select.appendChild(el);
// }





@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.populateDropdownMenu(majorRequiredCoreClasses);
  }

  // i want this to be used for all dropdowns so i don't need to write 20 diff ones...
// need to figure out how to stuff the arrays in a diff file and connect it with this one
// also need to integrate this with the search function
populateDropdownMenu(options)
{
  var select = document.getElementById("list");
  for(var i = 0; i < options.length; i++) 
  {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

}
