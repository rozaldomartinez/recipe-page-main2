import Image from "next/image";

export default function Home() {
  return (
	<main className = "flex justify-center items-center min-h-screen">
		<div className = "p-8 bg-white rounded-2xl w-6/12 mt-10 block mb-12">
			<Image 
				src="/image-omelette.jpeg" 
				alt="omelette" 
				layout="responsive"
    			objectFit="cover"
				width={100}
				height={100}
				className = "mb-10 rounded-2xl"
			/>

			<h1 className = "mb-3 text-3xl font-heading">Simple Omelette Recipe</h1>
			<p className="mb-12 font-body text-mentor-darkcharcoal">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
			<article className = "bg-pink-100 p-3 rounded-md mb-12">
				<h3 className="indent-6 font-body text-mentor-darkraspberry font-bold">Preparation time</h3>
				<ul className = "indent-6 list-disc list-inside mb-4 font-body marker:text-mentor-darkraspberry text-mentor-darkcharcoal">
					<li><span className = "relative left-4"><b>Total:</b> Approximately 10 minutes</span></li>
					<li><span className = "relative left-4"><b>Preparation:</b> 5 minutes</span></li>
					<li><span className = "relative left-4"><b>Cooking:</b> 5 minutes</span></li>
				</ul>
			</article>

			<h2 className = "font-heading mb-3 text-xl text-mentor-nutmeg">Ingredients</h2>
			<ul className = "font-body list-disc list-inside mb-12 marker:text-mentor-darkraspberry text-mentor-darkcharcoal">
				<li className = "mb-3"><span className = "ml-3">2-3 large eggs</span></li>
				<li className = "mb-3"><span className = "ml-3">Salt, to taste</span></li>
				<li className = "mb-3"><span className = "ml-3">Pepper, to taste</span></li>
				<li className = "mb-3"><span className = "ml-3">1 tablespoon of butter or oil</span></li>
				<li className = "mb-3"><span className = "ml-3">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
			</ul>

			<hr className = "mb-8"/>

			<h2 className = "font-heading text-xl text-mentor-nutmeg mb-5">Instructions</h2>
			<ol className = "font-body list-decimal list-inside mb-12 marker:text-mentor-nutmeg marker:font-bold text-mentor-darkcharcoal">
				<li className = "mb-3"><span className = "ml-3"><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
				<li className = "mb-3"><span className = "ml-3"><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
				<li className = "mb-3"><span className = " ml-3"><b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
				<li className = "mb-3"><span className = "ml-3"><b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
				<li className = "mb-3"><span className = "ml-3"><b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
				<li className = "mb-3"><span className = "ml-3"><b>Enjoy:</b> Serve hot, with additional salt spaned.</span></li>
			</ol>

			<hr className = "mb-12"/>

			<h2 className = "font-heading mb-3 text-xl text-mentor-nutmeg">Nutrition</h2>
			<p className = "font-body mb-3 text-mentor-darkcharcoal">The table below shows nutritional values per serving without the additional fillings.</p>
			<table className = "w-full table-auto border-collapse font-body">
				<tbody>
					<tr className = "border-b-2">
						<td className = "p-3 text-mentor-darkcharcoal">Calories</td>
						<td className = "text-mentor-nutmeg font-bold p-3">277kcal</td>
					</tr>
					<tr className = "border-b-2">
						<td className = "p-3 text-mentor-darkcharcoal">Carbs</td>
						<td className = "text-mentor-nutmeg font-bold p-3">0g</td>
					</tr>
					<tr className = "border-b-2">
						<td className = "p-3 text-mentor-darkcharcoal">Protein</td>
						<td className = "text-mentor-nutmeg font-bold p-3">20g</td>
					</tr>
					<tr>
						<td className = "p-3 text-mentor-darkcharcoal">Fat</td>
						<td className = "text-mentor-nutmeg font-bold p-3">22g</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>
  );
}
