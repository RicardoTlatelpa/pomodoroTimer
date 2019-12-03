export function single(num){
    let string = num.toString().length
    if(string > 1){
      return num
    }
    return `0${num}`
  
  }