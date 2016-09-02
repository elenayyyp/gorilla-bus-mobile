BE Ruby-On-Rails deployment: https://serene-sierra-23458.herokuapp.com/

(Sourcing found at the bottom)

###Gorilla Bus###
by Nathan Smith, Elena Peng and Daniel Yochum

Gorilla Bus is a React Native focused app designed specifically for a transportation service in Girdwood, Alaska. This application is in demand and we aimed to create it! The shuttle is open random pickups and additional stops, therefore it is frequently off schedule. Currently, the only way to find the exact location of the shuttle is to call the driver. What a pain! We designed the app to make things easier for passengers and drivers with hopes to pitch it to Glacier City Transit.

###Gorilla Bus Logic/Tech###

Our main priority is to view the current shuttle location with regular updates without map re-rendering. Estimated time of arrival is the extra flavor and complexity that comes with the React Native mobile app!

At regular intervals, current shuttle coordinates update the former coordinates in the Rails backend. This data originates from geolocation data on the shuttle in motion (or for demonstration purposes, an array of coordinates along the route). The latest data is then pulled from the database and displayed on the user's phone.

One difficult challenge was development of distance and time logic, which requires shuttle direction, destination and the relative positioning of the selected stop and shuttle location. The application makes client-side calls to the server, which returns regular bus updates (driver name, shuttle number), exact location of the shuttle in question, and ETA.

FE Tech:
React
React-Router
axios
Radium
Bootstrap

Mobile Tech:
React-Native
axios
side-menu


Sources:
About Icon:
https://www.iconfinder.com/icons/1396823/circle_info_information_letter_icon#size=128
by Kirill Kazachek under the CC license (https://creativecommons.org/licenses/by/3.0/)

Contact Icon:
http://www.flaticon.com/
No attribution required.

Bug Icon:
https://www.iconfinder.com
No attribution required.

Gorilla Icon:
https://icons8.com/
No attribution required.


###Screen shots of mobile
![image1]
(assets/gorilla_screen/sc1.png?raw=true)

![image2]
(assets/gorilla_screen/sc2.png?raw=true)
![image3]
(assets/gorilla_screen/sc3.png?raw=true)
![image4]
(assets/gorilla_screen/sc4.png?raw=true)
![image5]
(assets/gorilla_screen/sc5.png?raw=true)
![image6]
(assets/gorilla_screen/sc6.png?raw=true)
