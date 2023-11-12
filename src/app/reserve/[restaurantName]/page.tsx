export default function Reserve({
	params,
}: {
	params: { restaurantName: string };
}) {
	return <div>Reserve at = {params.restaurantName}</div>;
}
