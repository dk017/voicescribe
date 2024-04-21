import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
  '/transformations(.*)',
  '/credits(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  publicRoutes: ['/api/webhooks/clerk']
});


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};