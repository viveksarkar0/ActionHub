
import Sidebar from '@/components/global/siderbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout =  async ({ children, params }: Props) => {
  // Ensure `params.slug` is resolved and valid
  const { slug } = await params;

  return (
    <div className="p-3 ">
      <Sidebar slug={slug} />
      {children}
      
    </div>
  );
};

export default Layout;
