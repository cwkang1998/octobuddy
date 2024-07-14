import cors from "cors";
import express from "express";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { getPrivyTokenInfo } from "./request-auth";
import { expense_users, expenses, user_contacts, users } from "./schema";
import { authMiddleware } from "./middlewares";

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

	app.get("/expenses", authMiddleware, async (req, res) => {
		
	});

	app.post("/expenses", authMiddleware, async (req, res) => {

	});

	return app.listen(30303, () => {
		console.log("Server running at port 30303");
	});
};

main().catch((err) => console.error(err));
