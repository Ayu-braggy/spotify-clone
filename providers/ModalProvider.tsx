"use client";
import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal"
import UploadModal from "@/components/UploadModal"


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
        <UploadModal />
        </>
    );
}
export default ModalProvider;