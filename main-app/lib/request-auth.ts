import "dotenv/config";
import { verify } from "jsonwebtoken";

const privyAppId = process.env.PRIVY_APP_ID || "";
const privyVerificationKey = process.env.PRIVY_VERIFICATION_KEY || "";

export const getPrivyTokenInfo = async (accessToken: string) => {
	const decoded = verify(accessToken, privyVerificationKey, {
		issuer: "privy.io",
		audience: privyAppId,
	});
	return decoded;
};