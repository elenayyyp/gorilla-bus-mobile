import axios from 'axios';

const Matrix = {

  busTram: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.lat, lng: data.lng, stopLat: 60.970598, stopLng: -149.096939};
    return axios({
      method: 'POST',
      url: url,
      responseType: 'json',
      data: dataObj
    });
  },

  stopTram: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.selectedStop.lat, lng: data.selectedStop.lng, stopLat: 60.970598, stopLng: -149.096939};
    return axios({
      method: 'POST',
      url: url,
      responseType: 'json',
      data: dataObj
    });
  },

  busStop: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.lat, lng: data.lng, stopLat: data.selectedStop.lat, stopLng: data.selectedStop.lng};
    return axios({
      method: 'POST',
      url: url,
      responseType: 'json',
      data: dataObj
    });
  },

  busSeward: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.lat, lng: data.lng, stopLat: 60.941276, stopLng: -149.172469};
    return axios({
      method: 'POST',
      url: url,
      responseType: 'json',
      data: dataObj
    });
  },

  stopSeward: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.selectedStop.lat, lng: data.selectedStop.lng, stopLat: 60.941276, stopLng: -149.172469};
    return axios({
      method: 'POST',
      url: url,
      responseType: 'json',
      data: dataObj
    });
  }

}

export default Matrix
