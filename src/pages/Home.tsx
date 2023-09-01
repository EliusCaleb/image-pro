import ImageGallery from "../components/ImageGallery"
import Navbar from "../components/Navbar"
import UploadForm from "../components/UploadForm"
import { useAuth } from "../hooks/useAuth"



const Home = () => {
  
   const { user, isLoading } = useAuth()
   console.log(user)
   console.log(isLoading)
  return (
    <div className="max-w-4xl mx-auto mt-4">
        <Navbar/>
        <UploadForm/>
        <ImageGallery/>
    </div>
  )
}

export default Home