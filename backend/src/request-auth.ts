import "dotenv/config";
import { verify } from "jsonwebtoken";

const privyAppId = process.env.PRIVY_APP_ID || "";
const privyVerificationKey = process.env.PRIVY_VERIFICATION_KEY || "";

export type PrivyTokenData = {
	appId: string;
	userId: string;
	issuer: string;
	issuedAt: string;
	expiration: string;
	sessionId: string;
};

export const getPrivyTokenInfo = (accessToken: string): PrivyTokenData => {
	const decoded = verify(accessToken, privyVerificationKey, {
		issuer: "privy.io",
		audience: privyAppId,
	});
	return decoded as PrivyTokenData;
};
