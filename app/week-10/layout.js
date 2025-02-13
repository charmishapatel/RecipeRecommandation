import { AuthContextProvider } from "./_utils/auth-content";
 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}