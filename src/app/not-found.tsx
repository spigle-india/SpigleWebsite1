import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          Error 404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-muted">
          The page may have moved, or the address is wrong. Either way, the
          strategy is intact.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="accent" size="lg" withArrow>
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
