import { getCustomers } from '@/actions/get-customers';
import React from 'react'
import { DataTable } from './data-table';
import { customerColumns } from './columns';
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default async function Page() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
     const data = await getCustomers();

  return (
    <section className='py-22'>
<div className='container'>
<h1 className='text-4xl font-bold'> All Clients</h1>
<DataTable columns={customerColumns} data={data} />
</div>
    </section>

  )
}
