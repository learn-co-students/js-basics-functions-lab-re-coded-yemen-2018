// Code your solution in this file!
function distanceFromHqInBlocks(passengerLocation){
  const hqPosition = 42;
  if(passengerLocation < hqPosition){
    return (passengerLocation - hqPosition) * -1;
  }
  return  passengerLocation - hqPosition;
};

function distanceFromHqInFeet(passengerLocation){
  return (distanceFromHqInBlocks(passengerLocation) * 264);
};

function distanceTravelledInFeet(startLocation, endLocation){
  return distanceFromHqInFeet(endLocation) - distanceFromHqInFeet(startLocation)
};

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if( distanceInFeet <= 2000){
    if(distanceInFeet <= 400){
      return 0;
    }
    return (distanceInFeet -= 400) * .02;
  }
  else if( distanceInFeet >= 2500){
    return `cannot travel that far`;
  }
  else
    return 25;
}
