export const dynamic = 'auto'; // doesn't work here either

export default function DynamicPage({ searchParams }: { searchParams: Record<string, string | undefined> }): JSX.Element {
  searchParams['test'];
  return <div>I am dynamic!</div>
}