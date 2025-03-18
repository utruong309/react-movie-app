# **Movie Finder React App**  
A React movie search application that allows users to discover and browse movies using **The Movie Database (TMDB) API**.

---

## **Features**  
**Search Movies**: Instantly search movies by title.  
**Movie Details**: View ratings, language, and release year.  
**Popular Movies**: Displays trending movies when no search query is entered.  
**Optimized Performance**: Uses React hooks (`useState`, `useEffect`) and handling errors. 

---

## **Technologies Used**  
**Frontend**: React.js, JavaScript (ES6+), Tailwind CSS  
**API**: [TMDB API](https://www.themoviedb.org/) (for fetching movie data)  
**Build Tool**: Vite  

--- 

## Installation & Setup  

### 1. Clone the Repository  
```sh
git clone https://github.com/yourusername/movie-finder.git
cd movie-finder
```
### 2. Install Dependencies 
```sh
npm install
```
### 3. Set up API Key 
Create a .env file in the root directory and add: 
```sh
VITE_TMDB_API_KEY=your_api_key_here 
```
### 4. Start the Development Server 
```sh
npm run dev 
```
The app will be available at http://localhost:5173/. 
