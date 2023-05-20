import { NextRequest, NextResponse } from 'next/server';
import { middleware } from '@/app/middleware';
import { comments } from '@/app/data/comments';

export async function GET() {
    const response = NextResponse.json(comments);
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.set('Access-Control-Max-Age', '86400')
    return response
}

export async function POST(req: NextRequest) {

    const body = await req.json()

    //const comment = request.body?.comment
    const newComment = {
        id: Date.now(),
        text: body.comment
    }
    comments.push(newComment)
    const response = NextResponse.next()
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.set('Access-Control-Max-Age', '86400')
    return response
}

export async function OPTIONS() {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.set('Access-Control-Max-Age', '86400')
    return response
}