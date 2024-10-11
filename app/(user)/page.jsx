import postLongUrl from "./actions";

export default async function Home() {
  return (
    <div className="container">
        <h1>link kısaltma sayfası</h1>
        <form>
            <input type="text" id="long_url" name="long_url" placeholder="kısaltmak istediğin URL"/>

            <button formAction={postLongUrl}>Linki Kısalt</button>
        </form>
    </div>
  );
}