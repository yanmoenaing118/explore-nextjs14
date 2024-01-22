import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { Suspense } from 'react';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Suspense key={id} fallback={<div>Loading....</div>}>
        <Form invoiceId={id} />
      </Suspense>
    </main>
  );
}
