"use client";
import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal"


const ModalProvider=()=>{
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }//this side is not rendering durign server side

    return (
        <>
        <AuthModal />
        </>
    );
}
export default ModalProvider;