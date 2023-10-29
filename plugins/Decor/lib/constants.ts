export const API_URL = "https://decor.fieryflames.dev/api";
export const CDN_URL = "https://decorcdn.fieryflames.dev";

export const AUTHORIZE_URL = API_URL + "/authorize";

export const CLIENT_ID = "1096966363416899624";
export const SKU_ID = "100101099111114"; // decor in ascii numbers
export const RAW_SKU_ID = "11497119"; // raw in ascii numbers

export const GUILD_ID = "1096357702931841148";
export const INVITE_KEY = "dXp2SdxDcP";

export const DISCORD_OAUTH_URL = `https://discord.com/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&scope=identify&redirect_uri=${encodeURIComponent(AUTHORIZE_URL)}`;
