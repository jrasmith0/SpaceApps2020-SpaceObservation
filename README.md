# OrbitalView  
### Project solution for the 2020 Space Apps Hackathon challenge: Orbital Sky

** Note: Deployed variant on Heroku does NOT have access to the data source due to limitations **

#### High level summary:
Using a combination of tools we present to you Orbital View, our solution to the Orbital Sky challenge. Orbital View is an application that allows users to interact with the night sky in a whole new way. Users are able to not only see satellites above, but being able to step into the viewpoint of those satellites. This is achieved by dynamically selecting a given satellite from the night sky to see the Earth in its magnificence by leveraging a combination of the satellite's positioning and Nasa's WorldWind. 

#### Describe how our project meets the challenge:
The Orbital Sky challenge tasked us with driving user engagement, enthusiasm, and exploration in the broad spectrum of satellites, bringing the understanding closer to home and easier to see. Building on this core principle we decided to leverage a web-based planetarium with a custom user interface that allows users to change the time, date, and location of their view perspective. Users can look up at the stars above them knowing what satellites are passing over. Further, the satellites can be hovered over, and clicked on to redirect users to a viewport of the Earth from the Satellite's perspective through Nasa's WorldWind. We hope that by giving users a better way to see clearly what's normally difficult to see it would bring better perspective to the understanding.

#### Describe how we developed the project:
Our project was developed through the combination of a web-based planetarium javascript library called VirtualSky, Nasa's WorldWind, as well as NodeJS, Javascript and PUG for development. The Satellite's data was leveraged from the CSA's data repositories downloaded in a CSV format and read into the application through JSON.

#### How did we use space agency data:
We utilized the space agency data by leveraging the CSA satellite data repositories downloaded as a CSV format and read into the application through JSON. This information was then translated into live markers on the planetarium corresponding to the positioning of the satellites in the night sky above.

#### Demonstration:

#### Data and Resources Used:
VirtualSky Library, NASA's WorldWind, CADC NEOSSAT collection data
