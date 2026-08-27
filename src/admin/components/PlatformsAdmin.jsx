import { useFormik } from "formik";

import { PlatformPost } from "../../api/Platform";

function PlatformsAdmin() {

    const formik = useFormik({
        initialValues: {
            name: "",
        },

        onSubmit: async (values, { resetForm }) => {
            try {
                const obj = {
                    name: values.name,
                };

                console.log(obj);

                const response = await PlatformPost(obj);

                console.log(response);

                resetForm();
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-2">
                Platforms
            </h2>

            <p className="text-[#8f8f96] mb-8">
                Add a new gaming platform
            </p>

            <form
                onSubmit={formik.handleSubmit}
                className="bg-[#1b1b20] border border-[#29292f] rounded-xl p-6"
            >
                <label className="block text-sm mb-2">
                    Platform name
                </label>

                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="e.g. PC"
                    className="w-full bg-[#25252b] border border-[#35353d] rounded-lg px-4 py-3 outline-none focus:border-white"
                />

                <button
                    type="submit"
                    className="mt-5 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
                >
                    Add Platform
                </button>
            </form>
        </div>
    );
}

export default PlatformsAdmin;
