let user_input = prompt("enter a number")
if(isNaN(Number(user_input))){
    console.log("enter an actual number")
    process.exit()
}else{
    user_input = Number(user_input)
}
if(Number(user_input) < 0){
    console.log("must not be negative")
    process.exit()

}
const digits_list = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eigtheen",
    "nineteen",
]
const tens_list = [
    "ten",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eigthy",
    "ninety"
]
const thousands_list = [
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion"
]
user_input = "0".repeat((3-(user_input.toString().length %3))%3 )+user_input
let output_string = ""


if(Number(user_input) <=20){
    output_string = digits_list[Number(user_input)-1]
    if(Number(user_input) == 0){
        output_string = "zero"
    }
}else{
    for(let i=user_input.toString().length;i> 0;i=i-3){
        //console.log(`${user_input.toString()[i-3]}${user_input.toString()[i-2]}${user_input.toString()[i-1]}`, i)
        output_string =process_hundreds(`${user_input.toString()[i-3]}${user_input.toString()[i-2]}${user_input.toString()[i-1]}`, i)+ output_string
    }
    function process_hundreds(three_digit_string,number_of_thousands){
        if(three_digit_string !=="000"){
            if(Number(three_digit_string) > 99){
                //console.log((user_input.toString().length/3)-((number_of_thousands/3)-1)-1 ,"thing")
                let append= ""
                if((user_input.toString().length/3)-((number_of_thousands/3)-1)-1 > 0 &&number_of_thousands%3==0 ){
                    append = thousands_list[(user_input.toString().length/3)-((number_of_thousands/3)-1)-2]
                }
                //console.log(number_of_thousands,"n of thou")
                if((user_input.toString().length/3)-((number_of_thousands/3)-1)-1 == 0){
                    return `${digits_list[three_digit_string[0]-1]} hundred and ${process_tens(three_digit_string.substring(1))}`
                }else{
                    return `${digits_list[three_digit_string[0]-1]} hundred ${process_tens(three_digit_string.substring(1))} ${append} `
                }
            }else{
                //console.log((user_input.toString().length/3)-((number_of_thousands/3)-1)-2)
                if((user_input.toString().length/3)-((number_of_thousands/3)-1)-2 >= 0 &&number_of_thousands%3==0 ){
                    return `${process_tens(three_digit_string.substring(1))} ${thousands_list[(user_input.toString().length/3)-((number_of_thousands/3)-1)-2]} `
                }else{
                    return `${process_tens(three_digit_string.substring(1))} `
                }
            }
        }else{
            return ""
        }
    }
    function process_tens(two_digit_number){
        if(Number(two_digit_number)<=20){
            return digits_list[Number(two_digit_number)-1]
        }else{
            if(Number(two_digit_number[1]) == 0){
                return `${tens_list[Number(two_digit_number[0])-1]}`
            }else{
                return `${tens_list[Number(two_digit_number[0])-1]} ${digits_list[Number(two_digit_number[1])-1]} `
            }
        }
    }
}
output_string = output_string.trim()
output_string = output_string.replace(/\s\s/g," ")
console.log(`in string form your number is ${output_string}`)

console.log(`it's length is ${output_string.length}`)
