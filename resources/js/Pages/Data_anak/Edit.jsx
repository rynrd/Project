import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, data_anak }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: data_anak.nama_data_anak || "",
    nik: data_anak.nik || "",
    tgl_lahir: data_anak.tgl_lahir || "",
    usia: data_anak.usia || "",
    jk: data_anak.jk || "",
    nama_ibu: data_anak.nama_ibu || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("data_anak.update", data_anak.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Edit data Data Anak "{data_anak.nama_anak}"
          </h2>
        </div>
      }
    >
      <Head title="Data Anak" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              {data_anak.image_path && (
                <div className="mb-4">
                  <img src={data_anak.image_path} className="w-64" />
                </div>
              )}
              <div>
                <InputLabel htmlFor="data_anak_image_path" value="Foto Anak" />
                <TextInput
                  id="data_anak_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="data_anak_nama_anak" value="Nama Anak" />

                <TextInput
                  id="data_anak_nama_anak"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="nik"
                  value="Nomor Induk Kependudukan (NIK)"
                />

                <TextInput
                  id="data_anak_nik"
                  type="text"
                  name="nik"
                  value={data.nik}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("nik", e.target.value)}
                />

                <InputError message={errors.nik} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="data_anak_tgl_lahir"
                  value="Tanggal Lahir"
                />

                <TextInput
                  id="data_anak_tgl_lahir"
                  type="date"
                  name="tgl_lahir"
                  value={data.tgl_lahir}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("tgl_lahir", e.target.value)}
                />

                <InputError message={errors.tgl_lahir} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="data_anak_usia" value="Usia Anak" />

                <TextInput
                  id="data_anak_usia"
                  type="text"
                  name="usia"
                  value={data.usia}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("usia", e.target.value)}
                />

                <InputError message={errors.usia} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="data_anak_jk" value="Jenis Kelamin" />

                <SelectInput
                  name="jk"
                  id="data_anak_jk"
                  className="mt-1 block w-full"
                  value={data.jk}
                  onChange={(e) => setData("jk", e.target.value)}
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </SelectInput>

                <InputError message={errors.jk} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="data_anak_nama_ibu" value="Nama Ibu" />

                <TextInput
                  id="data_anak_nama_ibu"
                  type="text"
                  name="nama_ibu"
                  value={data.nama_ibu}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("nama_ibu", e.target.value)}
                />

                <InputError message={errors.nama_ibu} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("data_anak.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Batal
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
