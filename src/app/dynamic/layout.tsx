export const dynamic = 'auto'; // doesn't work here

export default function DynamicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}