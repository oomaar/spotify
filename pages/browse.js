import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Browse = () => {
  // This screen supposed to be Private
  const { data: session, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) {
      router.push("/");
    }
  }, [session]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>browse screen</h1>

      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Browse;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
