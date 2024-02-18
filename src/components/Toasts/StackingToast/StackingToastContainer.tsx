interface errorProps {
  errorMessage?: string;
}

export default function SimpleCardLoader({ errorMessage }: errorProps) {
  return <div>I&apos;m a toast</div>;
}
