import Image from "next/image";
import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";

// NEXT AUTH
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn as signInToProvider,
} from "next-auth/react";

// COMPONENTS
import Header from "../../components/Header";

// TS INTERFACES
interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const SignIn: React.FC<Props> = (props) => {
  const { providers } = props;

  if (!providers) {
    throw new Error("No providers found");
  }

  return (
    <div>
      <Header />
      <div className="grid place-items-center p-2">
        <div className="relative w-80 h-32 cursor-pointer mt-16">
          <Image src="/full-logo.webp" layout="fill" objectFit="contain" />
        </div>
        <div className="mt-16">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="">
              <button
                onClick={() =>
                  signInToProvider(provider.id, { callbackUrl: "/" })
                }
                className="p-3 bg-blue-500 rounded-lg text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
