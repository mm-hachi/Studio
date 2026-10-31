export function setRangeValue(range,value){
 const min=Number(range.min),max=Number(range.max);
 if(value<min)range.min=String(value);
 if(value>max)range.max=String(value);
 range.step='any';
 range.value=String(value);
}
