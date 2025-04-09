interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { sortOrder } = await searchParams;

  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
}
