import { Suspense } from "react";
import AddMembers from "../components/addMembers";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<AddMembers />
		</Suspense>
	);
}
