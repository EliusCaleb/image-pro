import ImageGallery from "../components/ImageGallery"
import Navbar from "../components/Navbar"
import UploadForm from "../components/UploadForm"


const Home = () => {
  return (
    <div className="max-w-4xl mx-auto mt-4">
        <Navbar/>
        <UploadForm/>
        <ImageGallery/>
    </div>
  )
}

export default Home