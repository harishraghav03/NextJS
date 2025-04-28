// import { NextRequest, NextResponse } from "next/server";
// import middleware from "next-auth/middleware";

export { default } from "next-auth/middleware";
// We are exporting the default object that is imported from the module

// export default function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// The middleware only be executed, when we hit users
// *: Zero or more parameters
// +: One or more
// ?: zero or one
export const config = {
  matcher: ["/users/:id*"],
};

// But in the NextAuth, we already have a middleware that checks if the user has logged in

// export default middleware;
// There is a shorter way we can do it