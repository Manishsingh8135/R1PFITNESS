import TrainersPage from "@/components/Trainers/trainers";

export default function AllTrainers(){
    return (
        <div className="h-screen flex flex-col items-center pt-32 gap-8">
            
            <div className="flex justify-center items-center ">
                <TrainersPage/>
            </div>
           
        </div>
    )
}