
import { useFormik } from "formik";

import { EventsPost } from "../../api/Event";

function EventsAdmin() {

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

                const response = await EventsPost(obj);

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
                Events
            </h2>

            <p className="text-[#8f8f96] mb-8">
                Add a new event
            </p>

            <form
                onSubmit={formik.handleSubmit}
                className="bg-[#1b1b20] border border-[#29292f] rounded-xl p-6"
            >
                <label className="block text-sm mb-2">
                    Event name
                </label>

                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="e.g. Summer Sale"
                    className="w-full bg-[#25252b] border border-[#35353d] rounded-lg px-4 py-3 outline-none focus:border-white"
                />

                <button
                    type="submit"
                    className="mt-5 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
                >
                    Add Event
                </button>
            </form>
        </div>
    );
}

export default EventsAdmin;
