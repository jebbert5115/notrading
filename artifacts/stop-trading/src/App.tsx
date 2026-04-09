import { Switch, Route, Router as WouterRouter } from "wouter";
import Nav from "@/components/Nav";
import Home from "@/pages/Home";
import WallOfShame from "@/pages/WallOfShame";

function NotFound() {
  return (
    <div className="min-h-screen rustic-bg text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-black mb-4 glow-red worn-text" style={{ color: '#e01515' }}>404</div>
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-[#666] mb-6">Somehow you ended up somewhere that doesn't exist.</p>
        <a href="/" className="hover:underline" style={{ color: '#e01515' }}>← Go back to the rules</a>
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
      <Nav />
      <Router />
    </WouterRouter>
  );
}

export default App;
