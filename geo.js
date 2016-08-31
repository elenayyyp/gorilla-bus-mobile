navigator.geolocation.getCurrentPosition(
  position => {
    // let shuttlePos = JSON.stringify(position);
    console.log('shuttlePos:', position);
    // set state
  },
  (error) => alert(error.message),
  {enableHighAccuracy: true, timeout: 15000, maximumAge: 1000}
);
