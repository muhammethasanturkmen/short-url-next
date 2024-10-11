
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { signOut } from "./actions";

export default async function UserLayout({ children }){
  const supabase = createClient();
  const {data : { user }, error} = await supabase.auth.getUser();
  return(
      <div>
          {user ? <form action={signOut}><button>sign out</button></form> : <Link href="/login">login</Link>}
          {children}
      </div>
  )
}