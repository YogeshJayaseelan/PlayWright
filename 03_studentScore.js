/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score)
{
    
        switch (score) {
            case score>=90:
                
            console.log("Grade is: A");
            break;
        
            case score>=80 && score<90:   
            console.log("Grade is: B");
            break;
            
            case score>=50 && score<80:   
            console.log("Grade is: P");
            break;
            default:
                console.log("Grade is: F");
        
        
        }
}

let score = 80;
calculateGrade(score);