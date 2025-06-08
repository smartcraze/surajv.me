import Iframe from '@/components/ResponsiveIframe';
import React from 'react';

function Page() {
  return (
    <div className="min-h-screen  px-4 py-6">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">Project Demo Videos</h1>
        <p className="text-lg text-gray-500">A collection of project walkthroughs built using different technologies</p>
      </header>
  
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-bold">Paytm Clone</h1>
        <Iframe
          id="paytm"
          src="https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0"
          title="Tella Video 1"
        />
        <h1 className="text-lg font-bold">RapidServe</h1>
        <Iframe
          src="https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0"
          title="RapidServe"
        />
      </div>
    </div>
  );
}

export default Page;
