import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])
// const isPublicRoute = createRouteMatcher(['/'])

export default clerkMiddleware((auth, req) => {
  // strategy to protect all routes except public routes
  //   if (isPublicRoute(req)) return // if it's a public route, do nothing
  //   auth().protect() // for any other route, require auth

  // Restrict admin route to users with specific role
  if (isAdminRoute(req)) auth().protect({ role: 'org:admin' })

  // Restrict dashboard routes to signed in users
  if (isDashboardRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
