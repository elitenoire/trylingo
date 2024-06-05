import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)'])
const isPublicRoute = createRouteMatcher(['/', '/buttons'])

export default clerkMiddleware(
  (auth, req) => {
    // strategy to protect all routes except public routes
    if (isPublicRoute(req)) return // if it's a public route, do nothing

    // Restrict admin route to users with specific role
    if (isAdminRoute(req)) auth().protect({ role: 'org:admin' })

    auth().protect() // for any other route, require auth
  },
  { debug: process.env.NODE_ENV !== 'production' }
)

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
