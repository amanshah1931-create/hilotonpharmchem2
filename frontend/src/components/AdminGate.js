import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Loader2 } from "lucide-react";
import { login } from "@/lib/adminAuth";

/**
 * Wrap any admin-only page with <AdminGate>...</AdminGate>.
 * Shows a password prompt until a valid session token is obtained,
 * then renders the protected children.
 */
export default function AdminGate({ children, authed, onAuthed }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (authed) return children;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(password);
      onAuthed();
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Incorrect password.");
      } else if (err.response && err.response.status === 503) {
        setError("Admin login isn't configured on the server yet.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4" data-testid="admin-login-gate">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-emerald-900 flex items-center justify-center mb-5">
          <Lock className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-emerald-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Admin Access
        </h1>
        <p className="mt-1 text-sm text-stone-500">Enter the admin password to continue.</p>
        <div className="mt-6">
          <Label htmlFor="admin-password" className="text-sm font-medium text-stone-700">Password</Label>
          <Input
            id="admin-password"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="admin-password-input"
            className="mt-1.5"
          />
        </div>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <Button
          type="submit"
          disabled={loading || !password}
          data-testid="admin-login-submit"
          className="mt-6 w-full bg-emerald-900 hover:bg-emerald-800 text-white"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Log In"}
        </Button>
      </form>
    </div>
  );
}
