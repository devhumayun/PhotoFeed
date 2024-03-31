import PhotoCard from "./PhotoCard"

const PhotoList = ({ photos }) => {
    return (
        <div className="img-grid container mx-auto py-6">
            {
                photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))
            }
        </div>
    )
}

export default PhotoList
