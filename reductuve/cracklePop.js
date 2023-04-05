/** GIVEN REQUIREMENTS
 * Write a program that prints out the numbers 1 to 100 (inclusive). 
 * If the number is divisible by 3, print Crackle instead of the number. 
 * If it's divisible by 5, print Pop. 
 * If it's divisible by both 3 and 5, print CracklePop. 
 * You can use any language. 
*/

/** INTERPRETED REQUIREMENTS
 * Write a program that prints out the numbers 1 to 100 (inclusive). 
 * If the number is divisible by 3, print Crackle instead of the number. 
 * If it's divisible by 5, print Pop [instead of the number]. 
 * If it's divisible by both 3 and 5, print CracklePop [instead of Crackle or Pop]. 
 * You can use any language. 
*/

(function cracklePop(){
  for(let i = 1; i <= 100; i++){
    let log = '';
    if(i%3 === 0)log += 'Crackle';
    if(i%5 === 0)log += 'Pop'
    log = log || i;
    console.log(log);
  }
})();

/** LITERAL REQUIREMENTS (Just incase)
 * Assumptions made: Went with a literal interpretation of requirements
 * - Print "Crackle" instead of number 
 *    - But not 'Pop' INSTEAD of number 
 *    - But not 'CracklePop' INSTEAD of number
 *    - And not 'CracklePop' INSTEAD of 'Crackle' or 'Pop'
 */

(function(){
  for(let i = 1; i <= 100; i++){
    if(i%3 === 0){
      console.log('Crackle');
    } else console.log(i)
    if(i%5 === 0) console.log('Pop')
    if((i%5 === 0)&&(i%3===0)) console.log('CracklePop')
  }
})();