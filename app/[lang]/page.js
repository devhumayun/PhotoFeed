import { getDictionary } from "./disctionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <h1 className="underline">{dict.followers}</h1>
    </>
  );
}
