import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

// Correct the function signature to accept props as a single object
export default function Index({
  auth,
  Data_anak,
  queryParams = null,
  success,
}) {
  queryParams = queryParams || {};
  const searchFieldChanged = (nama_anak, value) => {
    if (value) {
      queryParams[nama_anak] = value;
    } else {
      delete queryParams[nama_anak];
    }
    router.get(route("data_anak.index"), queryParams);
  };

  const onKeyPress = (nama_anak, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(nama_anak, e.target.value);
  };

  const sortChanged = (nama_anak) => {
    if (nama_anak === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = nama_anak;
      queryParams.sort_direction = "asc";
    }
    router.get(route("data_anak.index"), queryParams);
  };

  const deleteDataAnak = (data_anak) => {
    if (!window.confirm("Are you sure you want to delete the Data?")) {
      return;
    }
    router.delete(route("data_anak.destroy", data_anak.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className=" flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Data Anak
          </h2>
          <Link
            href={route("data_anak.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Tambah Data
          </Link>
        </div>
      }
    >
      <Head title="Data Anak" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {success && (
            <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              {success}
            </div>
          )}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-200">
                    <tr className="no-wrap">
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        ID
                      </TableHeading>

                      <TableHeading
                        name="nama_anak"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Nama Anak
                      </TableHeading>

                      <th className="px-3 py-3">NIK</th>
                      <th className="px-3 py-3">Tanggal Lahir</th>
                      <th className="px-3 py-3">Usia</th>
                      <th className="px-3 py-3">JK</th>
                      <th className="px-3 py-3">Nama Ibu</th>
                      <th className="px-3 py-3 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-200">
                    <tr className="no-wrap">
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.nama_anak}
                          placeholder="Cari Nama Anak"
                          onBlur={(e) =>
                            searchFieldChanged("nama_anak", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("nama_anak", e)}
                        />
                      </th>
                      <th className="px-6 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.nik}
                          placeholder="NIK"
                          onBlur={(e) =>
                            searchFieldChanged("nik", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("nik", e)}
                        />
                      </th>
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3">
                        <SelectInput
                          className="w-full"
                          defaultValue={queryParams.jk}
                          onChange={(e) =>
                            searchFieldChanged("jk", e.target.value)
                          }
                        >
                          <option value="">Pilih Jenis Kelamin</option>
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </SelectInput>
                      </th>
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data_anak.data.map((data_anak) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-7000">
                        <td className="px-3 py-2">{data_anak.id}</td>
                        <td className="px-3 py-2">{data_anak.nama_anak}</td>
                        <td className="px-3 py-2">{data_anak.nik}</td>
                        <td className="px-3 py-2">{data_anak.tgl_lahir}</td>
                        <td className="px-3 py-2">{data_anak.usia}</td>
                        <td className="px-3 py-2">{data_anak.jk}</td>
                        <td className="px-3 py-2">{data_anak.nama_ibu}</td>
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("data_anak.edit", data_anak.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={(e) => deleteDataAnak(data_anak)}
                            href={route("data_anak.destroy", data_anak.id)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={Data_anak.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
