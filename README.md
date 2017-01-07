

#Gorilla Bus

Gorilla Bus is a React Native focused app designed specifically for a transportation service in Girdwood, Alaska.

The local government of Girdwood expressed interest in a shuttle tracker and we aimed to create it! The shuttle is open random pickups and additional stops, therefore it is frequently off schedule. Currently, the only way to find the exact location of the shuttle is to call the driver. What a pain! We designed the app to make things easier for passengers and drivers to pitch it to Glacier City Transit.

## Logic/Tech

Our main priority is to view the current shuttle location with geolocation coordinates without map re-rendering. Estimated time of arrival is calculated using Google's Distance Matrix API using the route and position coordinates.

At regular intervals, current shuttle coordinates update the former coordinates in the Rails backend. This data originates from geolocation data on the shuttle in motion (or for prototype purposes, an array of coordinates along the route). The latest data is then pulled from the database and displayed on the user's phone.

One difficult challenge was development of distance and time logic, which requires shuttle direction, destination and the relative positioning of the selected stop and shuttle location. The application makes client-side calls to the server, which returns regular bus updates (driver name, shuttle number), exact location of the shuttle in question, and ETA.



###Technology:

- `react-native`
- `side-menu`
- Google Geolocation API
- Google Distance Matrix API
- ROR Backend

### Contributors:

- **Elena Peng** •  GitHub: elenayyyp
- **Daniel Yochum**  •  GitHub: dannersy
- **Nate Smith** •  GitHub: chugachski

### Screenshots:
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

#### Sources:
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
