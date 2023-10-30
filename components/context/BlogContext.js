"use client";
import { createContext, useReducer, useEffect } from "react";
import FarmReducer from "./Reducer";

const BlogContext = createContext();

function BlogContextProvider({ children }) {
   const initialValues = {
      posts: [],
      users: [],
   };

   //for managing global state
   const [state, dispatch] = useReducer(FarmReducer, initialValues);

   // console.log("post", state.posts);
   // console.log("user", state.users);

   //fetches post that is still in pending state
   const fetchPendingPosts = async () => {
      try {
         const res = await fetch(
            `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`
         );
         const posts = await res.json();
         dispatch({ type: "MANAGE_POSTS", payload: posts });
      } catch (err) {
         console.log(err);
      }
   };

   //fetches all the users
   const fetchUsers = async () => {
      try {
         const res = await fetch(
            `${process.env.NEXT_PUBLIC_SITE_URL}/api/users`
         );
         const users = await res.json();
         dispatch({ type: "MANAGE_USERS", payload: users });
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchPendingPosts();
      fetchUsers();
   }, []);

   return (
      <BlogContext.Provider value={{ ...state, fetchPendingPosts, fetchUsers }}>
         {children}
      </BlogContext.Provider>
   );
}

export default BlogContext;
export { BlogContextProvider };
