"use client";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { Icons } from "@/components/icons";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";


// import createSupabaseClientClient from "@/lib/supabase/client";

export async function signInWithOAuthGitHub() {
  // const supabase = await createSupabaseClientClient();
  // const result = await supabase.auth.signInWithOAuth({
  //   provider: "github",
  //   options: {
  //     redirectTo: `${location.origin}/auth/callback`,
  //   },
  // });
  // return result;
}

export default function OAuthForm() {



  async function loginWithGithub() {
    console.log('loginWithGithub')
//       const result = await signInWithOAuthGitHub();
//       const { error } = result;

//       if (error?.message) {
//         console.log(error.message);
//         toast.error("Login Failed");
// }
//        else {
//         console.log("succes");
//         toast.success("Login Success");
        
//       }
  }

  return (
    <Button className="w-full" onClick={loginWithGithub}>
      Login With Github
			<Icons.gitHub className="h-6 w-6 mx-3"/>
    </Button>
  );
}
