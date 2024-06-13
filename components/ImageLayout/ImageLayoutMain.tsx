import { LayoutGridDemo } from "./LayoutImageGrid";


export default function ImageLayoutMain(){
    return(
        <div className="w-full h-[4000px] md:h-[2400px]  mt-6 mb-64">
            <h1 className="text-3xl md:text-6xl text-maincolor py-12 font-bold text-center ">RIPFITNESS FLAGSHIP COLLECTIONS</h1>
            <LayoutGridDemo/>
        </div>
    )

}