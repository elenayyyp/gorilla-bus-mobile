import Matrix from './Matrix.js';

let distBusToTram = '';
let timeBusToTram = '';
let distStopToTram = '';
let timeStopToTram = '';
let distBusToSew = '';
let timeBusToSew = '';
let distStopToBus = '';
let timeStopToBus = '';
let distStopToSew = '';
let timeStopToSew = '';
let estETA = '';

const eta = function(data){
  Matrix.busSeward(data).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK'){
      distBusToSew = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeBusToSew = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.busStop(data).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK') {
      distStopToBus = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeStopToBus = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.stopSeward(data).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK') {
      distStopToSew = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeStopToSew = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.stopTram(data).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK') {
      distStopToTram = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeStopToTram = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.busTram(data).then(function(res){

    if (res.data.rows[0].elements[0].status === 'OK') {
      distBusToTram = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeBusToTram = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  if (distBusToSew > distStopToSew && data.toSeward === true) {
    estETA = timeStopToBus;
  };

  if (distBusToSew < distStopToSew && data.toSeward === true) {
    estETA = timeBusToSew + timeStopToSew;
  };

  if (distBusToSew > distStopToSew && data.toSeward === false) {
    estETA = timeBusToTram + timeStopToTram;
  };

  if (distBusToSew < distStopToSew && data.toSeward === false) {
    estETA = timeStopToBus
  };
  return estETA
}

export default eta;
