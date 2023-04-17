const { flux } = shelter;
import { decode3y3, has3y3 } from "./3y3";

// TODO: See below
/*
    There are a few glaring issues here:

    1. The color regex is applied to the decoded bio, meaning the plugin could be "tricked" into using non-3y3 colours
    2. Discord appear to cache the result of this dispatch, meaning the plugin *technically* does not unload correctly
    3. Replacing the 3y3 in bio should be configurable

    1 and 3 also apply to link's Vendetta version, so ¯\_(ツ)_/¯
*/

const colorRegex = /\[(\#[0-9a-fA-F]{6})\s*,\s*(\#[0-9a-fA-F]{6})\]/;
const globalColorRegex = new RegExp(colorRegex, "g");

export const onUnload = flux.intercept((dispatch) => {
    if (dispatch.type !== "USER_PROFILE_FETCH_SUCCESS") return;

    try {
        if (!has3y3(dispatch.user_profile.bio)) return;
        const decoded = decode3y3(dispatch.user_profile.bio);
        const colors = decoded.match(colorRegex);
        if (!colors) return;

        colors.shift();

        dispatch.user_profile.theme_colors = colors.map((c) => parseInt("0x" + c.slice(1)));
        dispatch.premium_type = 2;
        dispatch.bio.replaceAll(globalColorRegex, "");
    } catch {};
});