import { Button } from "@/components/ui/button";
import { SiX, SiDiscord, SiGithub, SiMedium } from "react-icons/si";

export function Footer() {
  const links = {
    product: [
      { label: "Marketplace", href: "#marketplace" },
      { label: "Live Auctions", href: "#auctions" },
      { label: "Race Viewer", href: "#race" },
      { label: "Tokenomics", href: "#tokenomics" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Whitepaper", href: "#" },
      { label: "API", href: "#" },
      { label: "Help Center", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socials = [
    { Icon: SiX, href: "#", label: "Twitter" },
    { Icon: SiDiscord, href: "#", label: "Discord" },
    { Icon: SiGithub, href: "#", label: "GitHub" },
    { Icon: SiMedium, href: "#", label: "Medium" },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-wider mb-4">
              <span className="text-primary">TURBO</span>
              <span className="text-foreground">TRADEX</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The decentralized F1 GameFi exchange where racing meets the blockchain economy.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <a href={href} aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 TurboTradeX. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built on</span>
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
              Ethereum
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
