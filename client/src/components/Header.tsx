import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Marketplace", href: "#marketplace" },
    { label: "Live Auctions", href: "#auctions" },
    { label: "Race Viewer", href: "#race" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-primary">TURBO</span>
              <span className="text-foreground">TRADEX</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="default" className="hidden md:flex gap-2" data-testid="button-connect-wallet">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  asChild
                  className="justify-start"
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                </Button>
              ))}
              <Button className="gap-2 mt-2" data-testid="button-mobile-connect-wallet">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
