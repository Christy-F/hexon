import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, firstName, lastName, email, phone, preferredDate } = body;

    // Basic validation
    if (!service || !firstName || !lastName || !email || !phone || !preferredDate) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const appointment = await prisma.appointment.create({
      data: {
        service,
        firstName,
        lastName,
        email,
        phone,
        preferredDate: new Date(preferredDate),
      },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error: any) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment', details: error.message },
      { status: 500 }
    );
  }
}
