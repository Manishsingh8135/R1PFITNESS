import { ParallaxScrollSecondDemo } from "@/components/ImageSection/ParallaxComponent";
import { InfiniteMovingCardsDemo } from "@/components/Testimonial/Testimonial";
import { ParallaxScrollSecond } from "@/components/CustomUi/parallax-scroll";

export default function NewGallery(){
    return(
        <div className="h-screen flex flex-col items-center pt-32 gap-8">
            <h1 className="text-4xl md:text-6xl text-maincolor font-bold text-center">R1PFITNESS GALLERY</h1>
            <div className="flex justify-center items-center ">
                <ParallaxScrollSecondDemo/>
            </div>
           
        </div>
    )
}