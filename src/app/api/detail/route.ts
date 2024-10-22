import { getPostDetail } from '@/app/service/getRequest'
import { getCookie } from '@/app/utils/setToken'
import { NextResponse } from 'next/server'

export async function GET(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') || ''
  console.log(id, '서버로 요청하는 아이디');
  
  let accessToken = getCookie(req, 'accessToken') 
  const data = await getPostDetail('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZW1haWwiOiJtaW5qYWVAZ21haWwuY29tIiwiZXhwIjoxNzI5NTU4MjY5fQ.QVZ2UXFSScjSQYkH1sdmQ18HutcLPgrF1NcgKPBltFk', id)
  
  return NextResponse.json(data)
}