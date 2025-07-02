// import DetailPage from '@/components/pages/detailpage';

// const Page = async ({ params }: { params: { id: string } }) => {
//   return <DetailPage id={params.id} />;
// };

// export default Page;

// import DetailPage from '@/components/pages/detailpage';

// const Page = ({ params }: { params: { id: string } }) => {
//   return <DetailPage id={params.id} />;
// };

// export default Page;

// import DetailPage from '@/components/pages/detailpage';

// const Page = async ({ params }: { params: { id: string } }) => {
//   const { id } = params; // destructuring tetap aman di sini
//   // Bisa tambahkan fetching data di sini jika dibutuhkan
//   return <DetailPage id={id} />;
// };

// export default Page;

import DetailPage from '@/components/pages/detailpage';

const Page = async ({ params }: { params: { id: string } }) => {
  // Await params to ensure it's fully resolved
  const resolvedParams = await params;
  return <DetailPage id={resolvedParams.id} />;
};

export default Page;
