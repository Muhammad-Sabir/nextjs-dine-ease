export default function RestaurantDetails({
	params,
}: {
	params: { name: string };
}) {
	return <div>Restaurant Details = {params.name}</div>;
}
