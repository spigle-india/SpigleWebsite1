import { clients, type Client } from "@/content/clients";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

function Wordmark({ name, style }: Client) {
  const styles = {
    sans: "font-medium tracking-tight",
    serif: "font-serif text-lg",
    tracked: "font-medium uppercase tracking-[0.22em] text-[0.82rem]",
  } as const;

  return (
    <span
      className={`whitespace-nowrap text-xl text-faint transition-colors hover:text-ink ${styles[style ?? "sans"]}`}
    >
      {name}
    </span>
  );
}

export function LogoCloud() {
  return (
    <section className="border-y border-line bg-surface/60">
      <Container className="py-12 sm:py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-faint">
          Trusted by teams at
        </p>
        <div className="mt-8">
          <Marquee
            items={clients.map((client) => (
              <Wordmark key={client.name} {...client} />
            ))}
          />
        </div>
      </Container>
    </section>
  );
}
