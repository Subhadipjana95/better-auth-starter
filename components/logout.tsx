"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Logout() {
    const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    try {
      await authClient.signOut();

      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
    setLoading(false);
  };
  return (
    <Button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-2"
    >
        {loading ? <Loader2 className="size-4 animate-spin" /> : <><LogOut className="size-4" aria-hidden="true" /><span> Logout</span></>}
      
    </Button>
  );
}
