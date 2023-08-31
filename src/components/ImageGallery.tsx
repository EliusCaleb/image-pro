const ImageGallery = () => {
  return (
    <div className="grid md:grid-cols-3 justify-center mt-10 gap-4">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p>Upload by:</p>
           <span>Created on:</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
