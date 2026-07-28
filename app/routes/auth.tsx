import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => ([
  { title: "Authentication" },
  { name: "description", content: "Log into your account" },
]);

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = new URLSearchParams(location.search).get("next") ?? "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, navigate, next]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[url('/images/bg-auth.svg')] bg-cover bg-center px-4 py-10 sm:px-6">
      <div className="gradient-border w-full max-w-xl shadow-xl">
        <section className="flex flex-col gap-8 rounded-2xl bg-white p-8 sm:p-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-4xl sm:text-5xl">Welcome</h1>
            <h2 className="text-lg sm:text-xl">
              Log in to analyze your resume with AI-powered insights.
            </h2>
          </div>
          <div className="flex justify-center">
            {isLoading ? (
              <button className="auth-button animate-pulse" disabled>
                <p>Signing you in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>Log Out</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Log In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;