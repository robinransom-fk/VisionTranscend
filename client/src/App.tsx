import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import OurStory from "@/pages/OurStory";
import LegacyCollection from "@/pages/LegacyCollection";
import ProjectDetails from "@/pages/ProjectDetails";
import HundredXAdvantage from "@/pages/HundredXAdvantage";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/our-story" component={OurStory} />
            <Route path="/legacy-collection" component={LegacyCollection} />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/advantage" component={HundredXAdvantage} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
