import { Link } from 'react-router-dom'
import { FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, taste, category, photo } = coffee || {}

    const handelDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)

                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-52 h-72" src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn text-blue-500"><FaEye></FaEye></button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn text-red-500"><FaRegEdit></FaRegEdit></button>
                        </Link>
                        <button onClick={() => handelDelete(_id)}
                            className="btn text-red-800"><FaRegTrashAlt></FaRegTrashAlt></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;