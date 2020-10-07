/* yes, I add an excessive amount of comments because I barely know what I'm doing,
 *  and I need all the help I can get
 */
var majorRequiredClasses = 
  [   
    "BIO 1110 - Life Science (2) (B2)",
    "BIO 1110L - Life Science Laboratory (1) (B3)",
    "CS 1300 - Discrete Structures (3)",
    "CS 1400 - Introduction to Programming and Problem Solving (4)",
    "CS 2400 - Data Structures and Advanced Programming (4)",
    "CS 2600 - Systems Programming (3)",
    "CS 2640 - Computer Organization and Assembly Programming (3)",
    "CS 3010 - Numerical Methods (3)",
    "CS 3110 - Formal Languages and Automata (3)",
    "CS 3310 - Design and Analysis of Algorithms (4)",
    "CS 3560 - Object-Oriented Design and Programming (3)",
    "CS 3650 - Computer Architecture (4)",
    "CS 3750 - Computers and Society (3) (B5 or D4)",
    "CS 4080 - Concepts of Programming Languages (3)",
    "CS 4310 - Operating Systems (3)",
    "CS 4630 - Undergraduate Seminar (1)",
    "CS 4800 - Software Engineering (3)",
    "MAT 1140 - Calculus I (4) (B4)",
    "MAT 1150 - Calculus II (4) (B4)",
    "PHY 1510 - Introduction to Newtonian Mechanics (3) (B1)",
    "PHY 1510L - Newtonian Mechanics Laboratory (1) (B3)",
    "STA 2260 - Probability and Statistics for Computer Scientists and Engineers (3)"
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


