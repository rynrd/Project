import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import TableHeading from "@/Components/TableHeading";
import { Link, router } from "@inertiajs/react";

export default function StatistikTable({ statistik, queryParams }) {
  const searchFieldChanged = (nama_anak, value) => {
    if (value) {
      queryParams[nama_anak] = value;
    } else {
      delete queryParams[nama_anak];
    }
    router.get(route("statistik.index"), queryParams);
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
    router.get(route("statistik.index"), queryParams);
  };

  return (
    <>
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
              <th className="px-3 py-3"></th>
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
                  onBlur={(e) => searchFieldChanged("nik", e.target.value)}
                  onKeyPress={(e) => onKeyPress("nik", e)}
                />
              </th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">
                <SelectInput
                  className="w-full"
                  defaultValue={queryParams.jk}
                  onChange={(e) => searchFieldChanged("jk", e.target.value)}
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
            {statistik.data.map((statistik) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-7000">
                <td className="px-3 py-2">{statistik.id}</td>
                <th className="px-3 py-2 text-gray-100 tetx-nowrap hover:underline">
                  <Link href={route("statistik.show", statistik.id)}>
                    {statistik.nama_anak}
                  </Link>
                </th>
                <td className="px-3 py-2">{statistik.nik}</td>
                <td className="px-3 py-2">{statistik.tgl_lahir}</td>
                <td className="px-3 py-2">{statistik.usia}</td>
                <td className="px-3 py-2">{statistik.jk}</td>
                <td className="px-3 py-2">{statistik.nama_ibu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination links={statistik.meta.links} />
    </>
  );
}
