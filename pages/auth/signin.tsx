import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";

import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn as signInToProvider,
} from "next-auth/react";

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
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="">
          <button onClick={() => signInToProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
