import { ParallaxScrollSecondDemo } from "@/components/ImageSection/ParallaxComponent";
import { InfiniteMovingCardsDemo } from "@/components/Testimonial/Testimonial";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

export default function NewGallery(){
    return(
        <div className="h-screen flex flex-col items-center pt-32 gap-8">
            <h1 className="text-7xl text-maincolor font-bold">R1PFITNESS Gallery</h1>
            <div className="flex justify-center items-center ">
                <ParallaxScrollSecondDemo/>
            </div>
           
        </div>
    )
}