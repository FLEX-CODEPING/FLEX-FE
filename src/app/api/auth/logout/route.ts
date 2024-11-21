import { postLogout } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response = await postLogout(req);
  console.log(response, '응답');
  
//   if (response.isSuccess) {
//     return NextResponse.redirect(new URL('/', req.url));
//   }

  return NextResponse.json(response);
}