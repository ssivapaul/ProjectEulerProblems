

let  addOrUpdateValue = (obj, key, value) => {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      obj[key].push(value);
    } else {
      obj[key] = [obj[key], value];
    }
  } else {
    obj[key] = [value];
  }
}

let myObject = {};


let sortD = (a) => {
    let b = String(a).split('')
    let c = b.sort((x, y) => (x - y)).join('')
    return c
}

let MyOb = {

}

count = 0
MyOb['3'] = [40] 
MyOb[4] = [30]
MyOb[4].push(50)
if (Object.hasOwn(MyOb, 5)) {
    MyOb[5].push(10)
} else {
    MyOb[5] = 10
    count++
}

console.log(MyOb)
console.log(count)
