import type { Component } from "solid-js";
import OAuthModal from "./modals/OAuthModal";

const { 
    ui: { Button, Text, openModal },
    // @ts-ignore shelter typedefs don't have this
    plugin: { store },
} = shelter;

const Settings: Component = () => (
    <>
        <Text>token set to {store.token}</Text>
        <Button style={{ width: "fit-content" }} onClick={() => openModal(OAuthModal)}>open auth modal</Button>
    </>
);

export default Settings;
