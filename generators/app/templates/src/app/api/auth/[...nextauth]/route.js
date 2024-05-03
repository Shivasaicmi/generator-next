import KeycloakProvider from "next-auth/providers/keycloak";
import NextAuth from 'next-auth';
export const authOptions =  {

  secret:'somethingverysecret',
  providers: [
    KeycloakProvider({
      clientId: process.env.OIDC_CLIENT_ID,
      clientSecret:process.env.OIDC_SECRET,
      issuer: process.env.OIDC_AUTHORITY
    })
  ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }