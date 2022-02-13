import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Head from 'next/head'

function signin({ providers }) {
    return (
        <>
            <Head>
                <title>Sign In</title>
                <meta name="description" content="Instagram Clone in Next JS" />
                <link rel="icon" href="/InstagramLogo.png" />
            </Head>

            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SignIntoProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default signin