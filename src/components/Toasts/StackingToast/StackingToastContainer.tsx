interface errorProps {
  errorMessage?: string;
}

export default function SimpleCardLoader({ errorMessage }: errorProps) {
  return <div>I'm a toast</div>;
}
