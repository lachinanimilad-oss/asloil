import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { StoreProvider } from "@/lib/store";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-gold">404</h1>
        <p className="mt-4 text-muted-foreground">This page has drifted away.</p>
        <a href="/" className="mt-6 inline-block rounded-full btn-solid-gold px-6 py-3 text-xs uppercase tracking-[0.2em]">Return home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-serif text-2xl text-foreground">Something went wrong</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full btn-solid-gold px-6 py-3 text-xs uppercase tracking-[0.2em]">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ASLOIL® — Premium Care for Healthy Hair & Beautiful Skin" },
      { name: "description", content: "Luxury argan-based skincare. Face cream, body lotion, toner, lip balm and pure argan oil — nature in your hands." },
      { name: "author", content: "ASLOIL" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "ASLOIL® — Premium Care for Healthy Hair & Beautiful Skin" },
      { name: "twitter:title", content: "ASLOIL® — Premium Care for Healthy Hair & Beautiful Skin" },
      { property: "og:description", content: "Luxury argan-based skincare. Face cream, body lotion, toner, lip balm and pure argan oil — nature in your hands." },
      { name: "twitter:description", content: "Luxury argan-based skincare. Face cream, body lotion, toner, lip balm and pure argan oil — nature in your hands." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e31b43e2-f68e-4fc8-9538-740e74765c4e/id-preview-b1a58953--6fff913b-4601-40e2-9299-dbf9fec15b4d.lovable.app-1784723626734.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e31b43e2-f68e-4fc8-9538-740e74765c4e/id-preview-b1a58953--6fff913b-4601-40e2-9299-dbf9fec15b4d.lovable.app-1784723626734.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@200;300;400;500&display=swap" },
      
    
    ],
    
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
     <head>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-E9K66V1C8X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E9K66V1C8X');
</script>
</head>
      <body>
        {children}
        <Scripts />
       <Analytics />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Nav />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </StoreProvider>
    </QueryClientProvider>
  );
}
