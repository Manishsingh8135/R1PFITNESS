import React from 'react';

type Offering = {
    id: number;
    title: string;
    description: string;
};

const offerings: Offering[] = [
    { id: 1, title: "Open Gym", description: "Access to all gym facilities with state-of-the-art equipment." },
    { id: 2, title: "Cardio Equipment", description: "Wide range of cardio machines to boost your heart health." },
    { id: 3, title: "Bathrooms with Showers", description: "Clean and well-equipped bathrooms for your comfort." },
    { id: 4, title: "Lounge & Coffee Bar", description: "Relax and refresh at our cozy lounge with complimentary coffee." },
    { id: 5, title: "Free WiFi", description: "Stay connected with our high-speed internet access." },
    { id: 6, title: "Free Group Workouts Saturdays 9AM & 11AM", description: "Join our community for fun and engaging group workouts." },
    { id: 7, title: "Personal Training Packages", description: "Tailored personal training sessions to meet your fitness goals." },
    { id: 8, title: "12-Week Transformation Program", description: "Comprehensive program designed for total fitness transformation." },
    { id: 9, title: "Monthly Community Events", description: "Be a part of our vibrant community through regular events." },
    { id: 10, title: "Salsa & Bachata Dance Lessons", description: "Learn and enjoy Salsa and Bachata with our expert instructors." },
    { id: 11, title: "Friendly & Welcoming Environment", description: "A supportive and positive atmosphere for all members." },
    { id: 12, title: "Positive Vibes & Energy", description: "A place where positivity and energy thrive." }
];


const OfferingsSection = () => {
    return (
        <div className="bg-black p-4 text-white">
            <h2 className="text-6xl md:text-8xl  font-bold text-center mb-12 md:mb-16 bg-clip-text text-maincolor">What We Offer</h2>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-8">
                {offerings.map((offering) => (
                    <div key={offering.id} className="p-4 text-center bg-b-gradient text-white rounded-full">
                        <h3 className="text-2xl md:text-3xl font-bold">{offering.title}</h3>
                       {/* <p className="text-m mb:text-lg  ">{offering.description}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferingsSection;




// import React from 'react';

// type Offering = {
//     id: number;
//     title: string;
//     description: string;
// };

// const offerings: Offering[] = [
//     { id: 1, title: "Yoga Classes", description: "Experience tranquility and strength..." },
//     { id: 2, title: "Weight Training", description: "Build strength and endurance with our state-of-the-art equipment." },
//     { id: 3, title: "Cardio Sessions", description: "Boost your heart health and stamina with our varied cardio routines." },
//     { id: 4, title: "Personal Training", description: "Get personalized workouts tailored to your fitness goals." },
//     { id: 5, title: "Nutrition Advice", description: "Professional nutrition advice to complement your training." },
//     { id: 6, title: "Swimming Pool Access", description: "Enjoy and relax in our Olympic-sized swimming pool." },
//     // Add more offerings here
// ];

// const OfferingsGridSection = () => {
//     return (
//         <div className="mx-4 my-8 p-4 rounded-lg bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800">
//             <div className="grid gap-4 md:grid-cols-2">
//                 {offerings.map((offering) => (
//                     <div key={offering.id} className="flex items-start gap-2">
//                         <span className="text-white text-2xl">✔️</span>
//                         <div>
//                             <h3 className="text-4xl font-bold">{offering.title}</h3>
//                             <p className="font-bold">{offering.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OfferingsGridSection;

