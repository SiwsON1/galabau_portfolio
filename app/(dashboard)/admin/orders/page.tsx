import { getOrders } from '@/actions/get-orders';
import React from 'react'
import { DataTable } from './data-table';
import { orderColumns } from './columns';
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default async function Page() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  const data = await getOrders();

  return (
    <section className='py-22'>
<div className='container'>
<h1 className='text-4xl font-bold mt-5'> All Orders</h1>
<div className="flex-1 p-8 pt-6">
<DataTable columns={orderColumns} data={data} />
</div>

</div>
    </section>

  )
}
