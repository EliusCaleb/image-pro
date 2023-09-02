import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
    const {docs: images, isLoading} = useFirestore('images');

    if(isLoading){
      return (
        <div className="text-center mt-10">
          <progress className="progress w-56"></progress>
        </div>
      )
    }
    
  return (
    <div className="grid md:grid-cols-3 justify-center mt-10 gap-4">
     {images.map((image)=>(
        <div key={image.imageUrl}   className="card card-compact w-full bg-white shadow-xl rounded-lg">
        <figure className="max-h-[15rem] ">
          <img
            src={image.imageUrl}
            alt="Shoes"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body p-4">
          <p className="text-gray-600">Upload by: {image.userEmail}:</p>
           <span>Created on: {image.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
     ))}
    </div>
  );
};

export default ImageGallery;
