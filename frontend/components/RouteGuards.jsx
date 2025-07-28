"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import LoginModal from "@/components/LoginModal";
import { Toaster, toast } from "react-hot-toast";

export default function RouteGuards() {
  const searchParams = useSearchParams();
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("login") === "1") {
      toast("Bitte loggen Sie sich ein, um fortzufahren.", { icon: "🔒" });
      setLoginOpen(true);

      // query paramı temizle (yeniden açılmasın)
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.delete("login");
        window.history.replaceState({}, "", url.toString());
      }
    }
  }, [searchParams]);

  return (
    <>
      {/* Global toaster */}
      <Toaster position="top-center" />
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        openRegisterModal={() => setLoginOpen(false)}
      />
    </>
  );
}
