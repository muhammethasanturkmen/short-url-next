
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { signOut } from "./actions";

export default async function UserLayout({ children }){
  const supabase = createClient();
  const {data : { user }, error} = await supabase.auth.getUser();
  return(
      <div className="header">
          {user ? <form className="signout" action={signOut}><button>sign out</button></form> : <Link className="login-link" href="/login">login</Link>}
          {children}
      </div>
  )
}