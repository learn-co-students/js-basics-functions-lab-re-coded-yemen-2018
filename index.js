// Code your solution in this file!
function distanceFromHqInBlocks(destination)
{
  if(destination > 42){
    return (destination - 42);  
  }
  else{
    return (destination - 42)*-1;  
  }
  
  
}

function distanceFromHqInFeet(begin, destination){
  return distanceFromHqInBlocks(begin, destination)*264;
}

function distanceTravelledInFeet(begin, destination){
  if(destination>begin){
    return (destination-begin)*264;
  }
  else{
    return (destination-begin)*264*-1;
  }
}

function calculatesFarePrice(start, destination){
  let totalDistanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (totalDistanceInFeet > 2500){
    return "cannot travel that far";
  }
  else if (totalDistanceInFeet > 2000){
    return 25;
    
  }
  else if (totalDistanceInFeet > 400 && totalDistanceInFeet < 2000){
    return (totalDistanceInFeet-400)*0.02;
    
  }
  else if (totalDistanceInFeet < 400){
    return 0;
    
  }
}