import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({
  auth,
  totalDataAnak,
  persentasiLakiLaki,
  persentasiPerempuan,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex grid grid-cols-3 gap-2">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg ">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-400 text-lg font-semibold">
                Jumlah Anak
              </h3>
              <p className="text-xl mt-4 text-gray-900 dark:text-gray-100">
                <span className="mr-2">{totalDataAnak}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg ">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 text-lg font-semibold">
                Jumlah Anak Laki-laki
              </h3>
              <p className="text-xl mt-4 text-blue-500 dark:text-gray-100">
                <span className="mr-2">{persentasiLakiLaki}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg ">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-pink-500 text-lg font-semibold">
                Jumlah Anak Perempuan
              </h3>
              <p className="text-xl mt-4 text-pink-500 dark:text-gray-100">
                <span className="mr-2">{persentasiPerempuan}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
