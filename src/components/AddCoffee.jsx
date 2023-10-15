import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handelAddCoffee = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
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
            <h1 className="text-3xl font-extrabold text-center mb-8 underline">Add A Coffee</h1>

            <form onSubmit={handelAddCoffee}>
                {/* name and Quantity*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Coffee Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available Quantity"
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

                            <input type="text" name="supplier" placeholder="Supplier Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" placeholder="Taste"
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

                            <input type="text" name="category" placeholder="Coffee Category"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details"
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

                            <input type="text" name="photo" placeholder="Photo URL"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C]" />


            </form>
        </div>
    );
};

export default AddCoffee;