"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client"; //import the auth client

interface SocialProvidersProps {
  className?: string;
}

export default function SocialProviders({ className = "" }: SocialProvidersProps) {
  const signin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
      errorCallbackURL: "/signin",
      newUserCallbackURL: "/",
      // disableRedirect: true,
    });
  }

  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      <Button
        onClick={signin}
        variant="outline"
        className="h-11 w-full bg-white text-black hover:bg-white/95 hover:text-black">
        <div className="mr-2 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
              fill="#EA4335"
            />
            <path
              d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
              fill="#4285F4"
            />
            <path
              d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
              fill="#FBBC05"
            />
            <path
              d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z"
              fill="#34A853"
            />
          </svg>
        </div>
        Google
      </Button>
      <Button
        variant="outline"
        className="h-11 w-full bg-white text-black hover:bg-white/95 hover:text-black">
        <div className="mr-2 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M17.0511 12.4311C17.0157 9.4 19.6246 8.0462 19.7329 7.98641C18.3347 5.9356 16.1673 5.6569 15.4153 5.6309C13.5404 5.44389 11.7315 6.71567 10.7896 6.71567C9.82986 6.71567 8.37083 5.64855 6.77016 5.68242C4.74225 5.71549 2.85227 6.84422 1.82209 8.59258C-0.295807 12.1511 1.23893 17.5189 3.27565 20.4728C4.29693 21.9282 5.49161 23.5687 7.05927 23.506C8.58662 23.437 9.15155 22.5214 11.0007 22.5214C12.8263 22.5214 13.3557 23.506 14.9529 23.4662C16.601 23.437 17.6337 21.9836 18.6211 20.5141C19.8051 18.8381 20.2853 17.1929 20.3071 17.1132C20.2636 17.0972 17.091 15.7893 17.0511 12.4311Z"
              fill='black'
            />
            <path
              d="M14.7831 3.7998C15.6036 2.79293 16.1609 1.3957 16.0167 0C14.7941 0.0531471 13.2823 0.80246 12.4251 1.77934C11.6647 2.64275 10.9917 4.09948 11.156 5.44931C12.5334 5.55289 13.9313 4.79225 14.7831 3.7998Z"
              fill='black'
            />
          </svg>
        </div>
        Apple
      </Button>
    </div>
  );
}