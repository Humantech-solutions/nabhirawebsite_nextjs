import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Admin – Nabhira",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
