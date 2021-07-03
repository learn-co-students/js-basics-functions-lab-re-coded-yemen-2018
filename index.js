// Code your solution in this file!
function distanceFromHqInBlocks(location){
  let hq=42;
   let distance;
  if(hq<location){
  distance=location-hq;
  }
  else{
    distance=hq-location;
  }
  return distance;
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));



function distanceFromHqInFeet(location){
  distance=distanceFromHqInBlocks(location)*264;
  return distance;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start,end){
  if(end>start){
  distance=(end -start)*264;
    
  }
  else{
    distance=(start -end)*264;
  }
  return distance;
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start,end){
  let fare
 let dis=distanceTravelledInFeet(start, end);
 if(dis<400)
  fare=0;
  else if(dis>400 &&dis <2000){
    fare=2.56;
    
  }
  else if(dis>2000 &&dis <2500){
    fare=25;
    
  }
  else{
    fare='cannot travel that far';
  }
  return fare;
}
console.log(calculatesFarePrice(34, 32));
