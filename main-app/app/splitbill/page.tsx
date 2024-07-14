import { Suspense } from "react";
import SplitBill from "../components/splitBill";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SplitBill />
		</Suspense>
	);
}
