import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function LandingPage() {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
