import { NextRequest, NextResponse } from 'next/server';
import setCORSHeaders from '@/app/components/cors';
import { comments } from '@/app/data/comments';

type Params = {
  params: {
    commentId: string
  }
}

export async function GET(req: NextRequest, { params: { commentId } }: Params) {
  const comment = comments.find(comment => comment.id === parseInt(commentId));

  const response = NextResponse.json(comment);
  setCORSHeaders(response);
  return response;
}

export async function DELETE(req: NextRequest, { params: { commentId } }: Params, res: NextResponse) {
  const commentIndex = comments.findIndex(comment => comment.id === parseInt(commentId));

  comments.splice(commentIndex, 1);

  const response = NextResponse.json({ message: 'Comment deleted'});
  setCORSHeaders(response);
  return response;
}

export async function OPTIONS() {
  const response = new Response('');
  setCORSHeaders(response)
  return response;
}