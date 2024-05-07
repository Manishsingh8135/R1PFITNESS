import { InfiniteMovingCardsDemo } from "@/components/Testimonial/Testimonial";

export default function NewTestimonials(){
    return(
        <div className="h-screen flex flex-col items-center pt-32 gap-8">
            <h1 className="text-4xl md:text-6xl text-maincolor font-bold text-center">R1PFITNESS TESTIMONIALS</h1>
            <div className="flex justify-center items-center ">
                <InfiniteMovingCardsDemo/>
            </div>
           
        </div>
    )
}