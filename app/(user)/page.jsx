import { createClient } from "@/utils/supabase/server";
import postLongUrl from "./actions";
import Link from "next/link";

export default async function Home() {

  const supabase = createClient();

  let { data: link } = await supabase
  .from('link')
  .select('*')


  return (
    <div className="container">
        <h1>link kısaltma sayfası</h1>
        <form>
            <input type="text" id="long_url" name="long_url" placeholder="kısaltmak istediğin URL"/>

            <button formAction={postLongUrl}>Linki Kısalt</button>
        </form>
        {link.map(x => 
          <div className="url">
            <Link href={`/${x.short_url}`}>{x.short_url}</Link>
          </div>
        )}
    </div>
  );
}