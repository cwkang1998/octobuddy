import { type ReactNode, createContext, useContext, useState } from "react";
import type { Bill } from "../types/bill"; // Make sure the file path is correct and the file exists

interface BillContextType {
	bills: Bill[];
	addBill: (bill: Bill) => void;
}
const BillContext = createContext<BillContextType>({
	bills: [],
	addBill: () => {},
});

export const BillProvider = ({ children }: { children: ReactNode }) => {
	const [bills, setBills] = useState<Bill[]>([]);

	const addBill = (bill: Bill) => {
		setBills([...bills, bill]);
	};

	return (
		<BillContext.Provider value={{ bills, addBill }}>
			{children}
		</BillContext.Provider>
	);
};

export const useBillContext = () => useContext(BillContext);
