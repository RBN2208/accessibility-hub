export default function Heading({ level, children }) {
  const Heading = level ? level : 'h2';
  return <Heading>{children}</Heading>
}
