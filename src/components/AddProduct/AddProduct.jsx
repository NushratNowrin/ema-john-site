import React from "react";
import Swal from "sweetalert2";
import "./AddProduct.css";

const AddProduct = () => {
	const handleform = (event) => {
		event.preventDefault();
		const form = event.target;
		const category = form.category.value;
		const name = form.name.value;
		const seller = form.sellerName.value;
		const price = form.price.value;
		const stock = form.price.stock;
		const rating = form.rating.value;
		const ratingsCount = form.ratingsCount.value;
		const image = form.image.value;
		const shipping = form.shipping.value;
		const quantity = form.quantity.value;
		const product = {
			category,
			name,
			seller,
			price,
			stock,
			rating,
			ratingsCount,
			image,
			shipping,
			quantity,
		};
		console.log(product);
		// form.reset();
		fetch("http://localhost:5000/products", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success",
						text: "product added Successfully",
						icon: "success",
						confirmButtonText: "Okay",
					});

					form.reset();
				}
			});
	};
	return (
		<div className='mt-[100px]'>
			<div className='hero min-h-screen bg-base-200 w-full'>
				<div className='hero-content flex-col lg:flex-column'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl text-center font-bold'>Add a Product!</h1>
						<p className='py-6 text-center'>
							Please fill the input field with your product information and have
							a good deal with Ema John !!!
						</p>
					</div>
					<div className='card w-full flex justify-center items-center shadow-2xl bg-base-100'>
						<form className='card-body' onSubmit={handleform}>
							{/* Category */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Category</span>
								</label>
								<select
									name='products'
									id='category'
									className='input input-bordered'
									required>
									<option value=''>Choose the Category</option>
									<option value='lipstick'>Men's Sneaker</option>
									<option value='makeupbox'>Men's Pants</option>
									<option value='mirror'>Men's Boot</option>
									<option value='comb'>Men's Sneaker</option>
									<option value='comb'>Bag</option>
									<option value='comb'>Cap</option>
									<option value='comb'>Earphones</option>
									<option value='comb'>Bottle</option>
									<option value='comb'>Others</option>
								</select>
							</div>

							{/* Name */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Name of your product'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Seller */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Seller</span>
								</label>
								<input
									type='text'
									name='sellerName'
									id='sellerName'
									placeholder='Name of the Seller'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Price */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Price</span>
								</label>
								<input
									type='number'
									name='price'
									id='price'
									min='0'
									placeholder='Price in BDT'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Stock */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Stock</span>
								</label>
								<input
									type='number'
									name='stock'
									id='stock'
									min='0'
									placeholder='In Stock'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Rating */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Rating</span>
								</label>
								<input
									type='number'
									min='0'
									max='5'
									step='0.1'
									name='rating'
									id='rating'
									placeholder='rating'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Rating Count */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>ratingsCount</span>
								</label>
								<input
									type='number'
									name='ratingsCount'
									id='ratingsCount'
									min='0'
									placeholder='Ratings Count You Have'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Image */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Image</span>
								</label>
								<input
									type='file'
									accept='.png, .jpg'
									name='image'
									id='image'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Shipping */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Shipping</span>
								</label>
								<input
									type='number'
									name='shipping'
									id='shipping'
									min='0'
									placeholder='Shipping'
									className='input input-bordered'
									required
								/>
							</div>

							{/* Quantity */}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Quantity</span>
								</label>
								<input
									type='number'
									name='quantity'
									id='quantity'
									min='0'
									placeholder='Ratings Count You Have'
									className='input input-bordered'
									required
								/>
							</div>

							<div className='form-control mt-6 flex items-center justify-center'>
								<button className='btn bg-[#ffe0b2] hover:bg-[#ffa500] transition-all ease-in-out duration-75 uppercase px-10 font-semibold'>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
