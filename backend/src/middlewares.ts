import type { NextFunction, Request, Response } from "express";
import { getPrivyTokenInfo } from "./request-auth";
import { db } from "./db";
import { users } from "./schema";
import { eq } from "drizzle-orm";

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authorizationHeaderArr = req.headers.authorization?.split(" ");
	let authToken = "";
	if (authorizationHeaderArr && authorizationHeaderArr.length === 2) {
		authToken = authorizationHeaderArr[1];
	}

	try {
		const privyData = getPrivyTokenInfo(authToken);
		const isUserExist = await db
			.select()
			.from(users)
			.where(eq(users.id, privyData.userId));

		if (isUserExist) {
			req.user = privyData.userId;
			
			return next();
		}
		return next(new Error("Unauthorized`"));
	} catch (err) {
		return next(err);
	}
};
