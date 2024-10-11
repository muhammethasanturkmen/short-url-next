"use server"
import { makeid } from "@/utils/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut()
    redirect("/login")
}

export default async function postLongUrl(formData) {
    const supabase = createClient();
    const short_url = makeid(6);
    const { data: { user } } = await supabase.auth.getUser();
    const { error: insertError } = await supabase
    .from('link')
    .insert([
        { 
            long_url: formData.get("long_url"),
            short_url: short_url,
            user_id: user?.id
        }
    ]);
    redirect('/')
}