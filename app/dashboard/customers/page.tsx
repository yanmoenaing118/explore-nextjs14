import { unstable_noStore } from "next/cache";

const delay = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(true);
  }, 3000),
);
export default async function CustomersPage() {
  // unstable_noStore();
  // await delay;
  return <div>Customers Page</div>;
}
