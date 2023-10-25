import { NextRequest, NextResponse, userAgent } from 'next/server'

// Set pathname where middleware will be executed
export const config = {
  matcher: ['/milestones','/about'],
}

export function middleware(req) {
  // Parse user agent
  const { device } = userAgent(req)

  // Check the viewport
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  
  // Update the expected url
  req.nextUrl.pathname = `${req.nextUrl.pathname}/${viewport}`

  // Return rewrited response
  return NextResponse.rewrite(req.nextUrl)
}