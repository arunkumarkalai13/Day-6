var sampleinput = [{name:"John",age:26},{name:"siva",age:27}];
let arr = [];
let befindobject = (sampleinput) => {
for(let i=0;i<sampleinput.length;i++){
arr += sampleinput[i].name;
arr += ' ' ;
}
  return arr;
}

console.log(befindobject(sampleinput));
