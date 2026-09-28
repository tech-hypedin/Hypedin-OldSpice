import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        console.error('CLIENT ERROR REPORT:', {
            timestamp: new Date().toISOString(),
            ...body,
        });

        return NextResponse.json({ ok: true });
    } catch(err: unknown) {
        console.error(err)

        return NextResponse.json({ ok: false }, { status: 500 });
    }
}