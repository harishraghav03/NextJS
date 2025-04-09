interface Props {
  params: { id: number; photoId: number };
}

export default async function PhotoPage({ params }: Props) {
  const { id, photoId } = await params;

  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
}
