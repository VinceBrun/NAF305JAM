import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";


const activeChain = 'mumbai';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
