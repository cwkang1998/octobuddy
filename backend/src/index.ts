import express from "express";
import cors from "cors";

import { getPrivyTokenInfo } from "./request-auth";
import { db } from "./db";
import { expense_users, expenses, user_contacts, users } from "./schema";
import { eq } from "drizzle-orm";

type UserCreateData = {
	privyToken: string;
	name: string;
	accountAddress: string;
	accountAddressChainId: string;
};

const main = async () => {
	const app = express();

	app.use(express.json());
	app.use(cors());

	app.post("/user", async (req, res) => {
		const data = req.body as UserCreateData;

		if (!data.privyToken) {
			return res.status(400).json({ message: "token not provided" });
		}

		try {
			const privyData = getPrivyTokenInfo(data.privyToken);

			const existing = await db
				.select()
				.from(users)
				.where(eq(users.id, privyData.userId));
			if (existing) {
				return res.status(400).json({ message: "user already created" });
			}

			await db.insert(users).values({
				id: privyData.userId,
				account_address: data.accountAddress,
				account_address_chainid: data.accountAddressChainId,
				name: data.name,
			});

			return res.status(200).json({ message: "user successfully registered" });
		} catch (err: unknown) {
			console.error(err);
			return res.status(400).json({ message: "token invalid" });
		}
	});

	app.get("/expenses", async (req, res) => {
	})
};

main()
	.then(() => console.log("Server running at port 30303"))
	.catch((err) => console.error(err));
