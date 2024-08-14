// app/api/join/route.ts

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { name, email, country, reason } = await request.json();

    // Validate the input
    if (!name || !email || !country || !reason) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase();

    // Check if an application with this email already exists
    const existingApplication = await db.collection('join_requests').findOne({ email });

    if (existingApplication) {
      return NextResponse.json(
        { error: 'An application with this email already exists', status: 'pending' },
        { status: 409 } // 409 Conflict
      );
    }

    // If no existing application, proceed to insert the new join request
    const result = await db.collection('join_requests').insertOne({
      name,
      email,
      country,
      reason,
      status: 'pending',
      createdAt: new Date()
    });

    // Return a success response
    return NextResponse.json({
      message: 'Join request received successfully',
      id: result.insertedId
    }, { status: 201 });

  } catch (error) {
    console.error('Error processing join request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}