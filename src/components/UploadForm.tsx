

const UploadForm = () => {
  return (
    <div className="text-center mt-8">
        <form className="flex items-center flex-col gap-8">
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <button className="btn gap-4">Upload
          <span>🚀</span>
         </button>
        </form>
    </div>
  )
}

export default UploadForm