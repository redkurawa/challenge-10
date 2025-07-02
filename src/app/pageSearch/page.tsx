import PageSearch from '@/components/pages/pageSearch/page';

export default function PageSearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query ?? '';

  return <PageSearch query={query} />;
}
