// components/GymComparisonTable.tsx
import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { gyms } from "@/data/gyms";
import { Gym } from "@/types/gym";
import { Badge } from '@/ /ui/badge';

export function GymComparisonTable() {
    return (
        <div className=''>
            <Table className='w-full bg-yellow-100 '>
                
                <TableHeader >
                    <TableRow >
                        <TableHead ></TableHead>
                        <TableHead className='font-bold '>Gym Name</TableHead>
                        <TableHead className='font-bold'>Type</TableHead>
                        <TableHead className='font-bold'>Facilities</TableHead>
                        <TableHead className='font-bold'>Membership Plans</TableHead>
                        <TableHead className='font-bold'>Class Offerings</TableHead>
                        <TableHead className='font-bold'>Cleanliness</TableHead>
                        <TableHead className='font-bold'>Community</TableHead>
                        <TableHead className='font-bold'>Customer Reviews</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {gyms.map((gym: Gym) => (
                        <TableRow key={gym.id} className={gym.id === "1" ? "bg-b-gradient text-bold text-white text-md": ""}>
                            <TableCell>
                                {gym.logoUrl ? <Avatar>
                                    <AvatarImage src={gym.logoUrl} alt={gym.name} />
                                </Avatar> : 'No Logo'}
                            </TableCell>
                            <TableCell className="font-bold">{gym.name}</TableCell>
                            <TableCell>{gym.type}</TableCell>
                            <TableCell>
                                {gym.facilities.map((facility, index) => (
                                    <Badge key={index} className="mr-2 mb-2  px-1 text-center">{facility}</Badge>
                                ))}
                            </TableCell>
                            <TableCell>{gym.membershipPlans}</TableCell>
                            <TableCell>{gym.classOfferings}</TableCell>
                            <TableCell>{gym.cleanliness}</TableCell>
                            <TableCell>{gym.community}</TableCell>
                            <TableCell className='text-yellow'>{gym.customerReviews}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
