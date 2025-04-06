
import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Log the 404 error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Check if this is a direct page load (refresh) of a valid route
    const validRoutes = [
      "/contact",
      "/case-studies",
      "/tools/product-discovery-tools-map",
      "/reports/mwc-2025",
      "/case-studies/streamlining-product-portfolio",
      "/case-studies/re-designing-large-cloud-service-specs",
      "/case-studies/engineering-production-systems-2",
      "/case-studies/engineering-production-systems-3",
      "/case-studies/new-product-prototype",
      "/case-studies/household-helper-ai-agent"
    ];

    // If it's a valid route that was directly loaded, redirect to it
    if (validRoutes.includes(location.pathname)) {
      // This is a known route, we should redirect to the app and let React Router handle it
      setShouldRedirect(true);
    }
  }, [location.pathname]);

  // If this is a valid route that was directly loaded (refreshed), redirect to it
  if (shouldRedirect) {
    return <Navigate to={location.pathname} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild size="lg">
            <Link to="/" className="font-medium">
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
