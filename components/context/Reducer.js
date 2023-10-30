export default function FarmReducer(state, action) {
   switch (action.type) {
      case "MANAGE_POSTS":
         return {
            ...state,
            posts: action.payload,
         };

      case "MANAGE_USERS":
         return {
            ...state,
            users: action.payload,
         };
   }
}
