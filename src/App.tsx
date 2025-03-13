
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PostList from "./pages/PostList";
// import PostDetails from "./pages/PostDeatils";
// import CreatePost from "./pages/CreatePost";
// import EditPost from "./pages/EditPost";
// import { Container } from "@mui/material";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <AppBar position="sticky">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Мини-Блог
//           </Typography>
//           <Button color="inherit" component={Link} to="/">
//             Главная
//           </Button>
//           <Button color="inherit" component={Link} to="/create">
//             Создать пост
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container sx={{ marginTop: "20px" }}>
//         <Routes>
//           <Route path="/" element={<PostList />} />
//           <Route path="/posts/:id" element={<PostDetails />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/edit/:id" element={<EditPost />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PostList from "./pages/PostList";
// import PostDetails from "./pages/PostDeatils";
// import CreatePost from "./pages/CreatePost";
// import EditPost from "./pages/EditPost";
// import { Container, AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Мини-Блог
//           </Typography>
//           <Box sx={{ display: 'flex' }}>
//             <Button color="inherit" component={Link} to="/" sx={{ marginRight: 2 }}>
//               Главная
//             </Button>
//             <Button color="inherit" component={Link} to="/create">
//               Создать пост
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Container sx={{ marginTop: 3 }}>
//         <Routes>
//           <Route path="/" element={<PostList />} />
//           <Route path="/posts/:id" element={<PostDetails />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/edit/:id" element={<EditPost />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PostList from "./pages/PostList";
// import PostDetails from "./pages/PostDeatils";
// import CreatePost from "./pages/CreatePost";
// import { Link } from "react-router-dom";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <header>
//         <h1>Mini-Reddit</h1>
//         <nav>
//           <Link to="/">Главная</Link>
//           <Link to="/create">Создать пост</Link>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<PostList />} />
//         <Route path="/posts/:id" element={<PostDetails />} />
//         <Route path="/create" element={<CreatePost />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./pages/Header"; // Импортируем Header
// import PostList from "./pages/PostList";
// import PostDetails from "./pages/PostDeatils";
// import CreatePost from "./pages/CreatePost";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header /> 
//       <Routes>
//         <Route path="/" element={<PostList />} />
//         <Route path="/posts/:id" element={<PostDetails />} />
//         <Route path="/create" element={<CreatePost />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header"; // Импортируем Header
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDeatils"; // Исправлен импорт
import CreatePost from "./pages/CreatePost";

const App: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} /> {/* Исправлен путь */}
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
