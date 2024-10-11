import { createClient } from "@/utils/supabase/server";
import postLongUrl from "./actions";
import Link from "next/link";


export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let registeredUrl = [];
  if(user) {
    let { data: userUrl } = await supabase
    .from('link')
    .select('*')
    .eq("user_id", user?.id)

    registeredUrl = userUrl;
  }

  let { data: anonUrl } = await supabase
  .from('link')
  .select('*')
  .is('user_id', null);

  return (
    <div className="container">
      <h1>Link Kısaltma Sayfası</h1>
      <form className="home-form">
        <input className="home-input" type="text" id="long_url" name="long_url" placeholder="kısaltmak istediğin URL" />

        <button className="home-btn" formAction={postLongUrl}>Linki Kısalt</button>
      </form>
      {user ? 
        registeredUrl.map((x, i) => <div  className="urls"><Link key={i} className="home-link" href={`/${x.short_url}`}>{x.short_url}</Link></div> )
      : 
        anonUrl.map((x, i) => <div  className="urls"><Link key={i} className="home-link" href={`/${x.short_url}`}>{x.short_url}</Link></div> )
      }
    </div>
  );
}