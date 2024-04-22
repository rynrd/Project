import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

import {
  ScaleIcon,
  EyeDropperIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export default function Show({ auth, statistik, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Statistik "${statistik.nama_anak}"`}
        </h2>
      }
    >
      <Head title={`Statistik "${statistik.nama_anak}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <img
                src={statistik.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
              <p className="font-bold text-lg text-center">
                {statistik.nama_anak}
              </p>
              <p className="font-bold text-lg text-center">
                {statistik.tgl_lahir}
              </p>
            </div>

            <div className=" p-6 flex flex-wrap gap-4 mt-4">
              <div className="flex-auto">
                <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                  <ScaleIcon className="w-20 h-20 mx-auto mb-2" />
                  <Link className="font-bold text-lg">Berat Badan</Link>
                </div>
              </div>
              <div className="flex-auto">
                <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                  <EyeDropperIcon className="w-20 h-20 mx-auto mb-2" />
                  <Link className="font-bold text-lg">Imunisasi</Link>
                </div>
              </div>
              <div className="flex-auto">
                <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                  <HeartIcon className="w-20 h-20 mx-auto mb-2" />
                  <Link className="font-bold text-lg">Vitamin</Link>
                </div>
              </div>
              <div className="flex-auto">
                <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                  <MagnifyingGlassIcon className="w-20 h-20 mx-auto mb-2" />
                  <Link className="font-bold text-lg">
                    Pemeriksaan Neonatus
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Link
                onClick={() => window.history.back()}
                className="block text-center mt-4 underline text-blue-500"
              >
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
