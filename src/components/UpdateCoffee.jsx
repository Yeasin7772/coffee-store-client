
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';
const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee || {}

    const handelUpdateCoffee = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateCoffee);

        // send data to the server
        fetch(`https://coffee-store-server-afhntddnj-yeasin-mollas-projects.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold text-center mb-8 underline">Update A Coffee</h1>

            <form onSubmit={handelUpdateCoffee}>
                {/* name and Quantity*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* form Category and Details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" defaultValue={category} placeholder="Coffee Category"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" defaultValue={details}
                                placeholder="Details"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* form photo url row */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URl</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C]" />


            </form>
        </div>
    );
};

export default UpdateCoffee;