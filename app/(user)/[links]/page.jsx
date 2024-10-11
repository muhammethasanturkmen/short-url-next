import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DynamicURLPage ({ params }) {
    const { links } = params;
    const supabase = createClient();

    let { data: link, error } = await supabase
    .from('link')
    .select('*');

    const matchingUrl = link.find(x => x.short_url === links);
    redirect(matchingUrl.long_url)
}