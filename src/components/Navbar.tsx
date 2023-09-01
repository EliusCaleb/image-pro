import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
const Navbar = () => {

   const handleLogOut = async()=>{
    try{
      await signOut(auth)
    }
    catch(error){
      console.log(error.message)
    }
   }
  return (
      <div className="navbar bg-base-100 justify-between">
        <a className="font-bold normal-case text-xl underline">GalleryPro📷</a>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    
  );
};

export default Navbar;
