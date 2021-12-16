import { Project } from '../data-types';

const projectList: Array<Project> = [
  {
    id: 'project_3',
    title: 'More Movie Metadata - React Client',
    link: 'MoreMovieMetadata_React',
    subtitle: 'Movie Browser Client',
    description: "Welcome to the React user client for my MORE MOVIE METADATA API. This fully responsive single page application will provide you graphically appealing with access to information about different movies, directors, and genres stored on a MongoDB database. It's possible to sign up to create a unique list of favorite movies.",
    functionality: ['Allows new users to register (username, password, email, birthday)', 'Log in with a username and password', 'Returns a list of all movies (each listed item with an image, title, genres, directors, actors and description)', 'Sorting and filtering', 'Ability to select a movie for more details', 'Returns data (description, genres, directors, actors, image) about a single movie', 'Add or remove movie to list of favorites', 'Returns data about a genre or director, with a name and description/bio', 'Displays example movies', 'Update user info (username, password, email, date of birth)', 'User deregistration', 'Display and alter list of favorite movies', 'Allow users to see which actors star in which movies'],
    technologies: ['JavaScript', 'HTML', 'SCSS', 'React', 'Redux', 'Bootstrap', 'axios', 'parcel'],
    sampleImage: '../assets/MMM_React_example.jpg',
    githubUrl: 'https://github.com/hannesdonel/MMM-client-React',
    appUrl: 'https://more-movie-metadata.netlify.app/',
  },
  {
    id: 'project_2',
    title: 'More Movie Metadata - Angular Client',
    link: 'MoreMovieMetadata_Angular',
    subtitle: 'Movie Browser Client',
    description: "Welcome to the Angular user client for my MORE MOVIE METADATA API. This fully responsive single page application will provide you graphically appealing with access to information about different movies, directors, and genres stored on a MongoDB database. The design is following the Material Design Guidelines from Google. It's possible to sign up to create a unique list of favorite movies.",
    functionality: ['Allows new users to register (username, password, email, birthday)', 'Log in with a username and password', 'Returns a list of all movies (each listed item with an image, title, genres, directors, actors and description)', 'Sorting and filtering', 'Ability to select a movie for more details', 'Returns data (description, genres, directors, actors, image) about a single movie', 'Add or remove movie to list of favorites', 'Returns data about a genre or director, with a name and description/bio', 'Displays example movies', 'Update user info (username, password, email, date of birth)', 'User deregistration', 'Display and alter list of favorite movies', 'Allow users to see which actors star in which movies'],
    technologies: ['TypeScript', 'HTML', 'SCSS', 'Angular', 'RxJS'],
    sampleImage: '../assets/MMM_Angular_example.jpg',
    githubUrl: 'https://github.com/hannesdonel/MMM-client-Angular',
    appUrl: 'https://hannesdonel.github.io/MMM-client-Angular',
    caseStudy: 'more-movie-metadata',
  },
  {
    id: 'project_1',
    title: 'More Movie Metadata',
    link: 'MoreMovieMetadata_API',
    subtitle: 'Movie Browser API',
    description: 'This is MORE MOVIE METADATA backend. This RESTful API provides all necessary endpoints to access the movie, genre, director and user collections stored within a MongoDB database which I also crafted by myself.',
    functionality: ['Return a list of all movies to the user', 'Return a list of movies by genre or/and actor', 'Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user', 'Return a list of all genres', 'Return data about a genre (description) by name/title (e.g., “Thriller”)', 'Return a list of all directors', 'Return data about a director (bio, birth year, death year) by name', 'Allow new users to register', 'Allow existing users to deregister', 'Get information about a user by name', 'Allow users to update their user info (username, password, email, date of birth)', 'Allow users to add a movie to their list of favorites', 'Allow users to remove a movie from their list of favorites'],
    technologies: ['node.js', 'express', 'mongoose', 'dotenv', 'bcrypt', 'cors', 'express-validator', 'jsonwebtoken', 'passport', 'xss'],
    sampleImage: '../assets/MMM_example.jpg',
    githubUrl: 'https://github.com/hannesdonel/MMM',
    appUrl: 'https://more-movie-metadata.herokuapp.com',
  },
  {
    id: 'project_4',
    title: 'Meet',
    link: 'Meet',
    subtitle: 'Event Calendar',
    description: 'This is a serverless PWA that provides information on coding events in a specific town taken from a fictitious Google event calendar. All data is visualized with two beautiful, clickable charts. This app won\'t alter any of your calendars nor take or read any information off your calendar.',
    functionality: ['Filter events by city', 'Show/hide event details', 'Specify number of events', 'Use the app when offline', 'Add an app shortcut to the home screen', 'View a chart showing the number of upcoming events by city', 'Charts can be hidden', 'Charts are fully responsive and clickable to filter through events'],
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Google Calendar API', 'OAuth2', 'AWS Lambda', 'Serverless', 'Recharts', 'axios'],
    sampleImage: '../assets/Meet_example.jpg',
    githubUrl: 'https://github.com/hannesdonel/Meet',
    appUrl: 'https://hannesdonel.github.io/Meet/',
  },
  {
    id: 'project_5',
    title: 'Simple Chat',
    link: 'SimpleChat',
    subtitle: 'Mobile Chat App',
    description: 'This is a real-time chat app for mobile devices (iOS and Android) built with React Native. The app will provide users with a chat interface, offline function and options to share images and location.',
    functionality: ['Select custom background color and chat name', 'Send a pic', 'Take a pic and share it', 'Share your location', 'Ask for OS\'s permissions to browse data, use camera and mic', 'Fully compatible with screen readers', 'Reread chat timeline offline', 'Data gets stored on- and offline to provide all time access'],
    technologies: ['JavaScript', 'React Native', 'Google Firebase', 'expo', 'Gifted Chat library'],
    sampleImage: '../assets/Simple_Chat_example.jpg',
    githubUrl: 'https://github.com/hannesdonel/Simple-Chat',
    appUrl: 'https://vimeo.com/manage/videos/647875608?embedded=false&source=video_title&owner=20281206',
  },
  {
    id: 'project_6',
    title: 'Pokédex',
    link: 'Pokedex',
    subtitle: 'Pokémon Browser',
    description: 'This is a little, fully responsive application that fetches data about Pokémon from the RESTful PokéAPI and then displays it in a searchable list. Have fun.',
    functionality: ['Load data from an external API', 'View a list of items', 'On user action (e.g., by clicking on a list item), view details for that item', 'Search through all items with a search input'],
    technologies: ['JavaScript', 'HTML', 'CSS', 'parcel'],
    sampleImage: '../assets/Pokedex_example.jpg',
    githubUrl: 'https://github.com/hannesdonel/Pokedex',
    appUrl: 'https://hannesdonel.github.io/Pokedex/',
  },
  {
    id: 'project_7',
    title: 'ToDo list',
    link: 'ToDoList',
    subtitle: 'Note app',
    description: 'A little, fully responsive ToDo list written in jQuery.',
    functionality: ['Add new items', 'Remove items', 'Mark items as done', 'Move them around (touch support given)'],
    technologies: ['jQuery', 'HTML', 'CSS', 'parcel'],
    sampleImage: '../assets/ToDo_example.jpg',
    githubUrl: 'https://github.com/hannesdonel/ToDo-List',
    appUrl: 'https://hannesdonel.github.io/ToDo-List/',
  },
  {
    id: 'project_8',
    title: 'Upcoming: Data Visualizer',
    link: 'DataVisualizer',
    subtitle: 'Data Dashboard',
    description: 'The objective is to build a Vue.js App that fetches data from the OECD API and displays it as charts in a beautifully arranged dashboard. The app should be completely accessible, responsive and ready to use out of the box without any further requirements than a browser.',
    functionality: ['Filter charts by topic', 'Get detailed information on data points by hovering them', 'Browse all available topics'],
    technologies: ['Vue.js', 'HTML', 'CSS', 'OECD API'],
    sampleImage: '../assets/DataVisualizer_example.jpg',
  },
];

export default projectList;
