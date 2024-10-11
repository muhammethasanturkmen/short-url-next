"use server"
import { makeid } from "@/utils/link";
import { createClient } from "@/utils/supabase/server";

export async function signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut()
    redirect("/login")
}

export default async function postLongUrl(formData) {
    const supabase = createClient();
    const short_url = makeid(6);

    const { error: insertError } = await supabase
    .from('link')
    .insert([
        { 
            long_url: formData.get("long_url"),
            short_url: short_url
        }
    ]);

    console.log(formData.get("long_url"))
}