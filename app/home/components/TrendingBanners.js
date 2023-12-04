import ImageCarousel from "./ImageCarousel";
import image from "../../../assets/demo-poster-header.jpg";

const images = [image, image, image, image, image];

const Home = () => {
    return (
        <div>
            <h1>Your Next.js Page</h1>
            <ImageCarousel images={images} />
        </div>
    );
};

export default Home;
