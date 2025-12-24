import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-lg mx-auto"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-8xl lg:text-9xl font-bold text-accent mb-4"
            >
              404
            </motion.h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/"><Home className="w-4 h-4 mr-2" />Go Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
