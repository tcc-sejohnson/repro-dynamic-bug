export const dynamic = 'auto';
export default function DynamicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}