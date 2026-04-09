import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import WallOfShame from "@/pages/WallOfShame";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-[#ff6b1a] text-8xl font-black mb-4">404</div>
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-[#666] mb-6">Somehow you ended up somewhere that doesn't exist.</p>
        <a href="/" className="text-[#ff6b1a] hover:underline">← Go back to the rules</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/wall-of-shame" component={WallOfShame} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
