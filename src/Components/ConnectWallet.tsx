"use client";
import { useMemo, useState } from "react";
import { getZeroDevSigner, getRPCProviderOwner } from "@zerodevapp/sdk";
import { ZeroDevWeb3AuthWithModal } from "@zerodevapp/web3auth";
import ConnectBtn from "./ConnectBtn";

const ConnectWallet = () => {

    const [address, setAddress] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);

    const setWallet = async (provider: any) => {

        const signer = await getZeroDevSigner({
            projectId: "<your-key>",
            owner: await getRPCProviderOwner(provider),
        });

        setAddress(await signer.getAddress());
    };

    const zeroDevWeb3Auth = useMemo(() => {

        const instance = new ZeroDevWeb3AuthWithModal([
            "<your-key>"
        ]);

        instance.init({
            onConnect: async () => {

                console.log("Console Provider", zeroDevWeb3Auth.provider);

                console.log("I'm Connected")

                setLoading(true);

                setWallet(zeroDevWeb3Auth.provider);

                setLoading(false);
            },
        });

        return instance;

    }, []);

    const disconnect = async () => {

        await zeroDevWeb3Auth.logout();

        setAddress("");
    };

    const handleClick = async () => {

        setLoading(true);

        zeroDevWeb3Auth.connect("social")
            .then((provider: any) => {
                setWallet(provider);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const connected = !!address;

    return (
        <div className="flex flex-col justify-center items-center gap-y-8">
            {connected && (
                <>
                    <h1 className="text-2xl font-medium">
                        Wallet: <span className="text-xl pl-2">{address}</span>
                    </h1>
                </>
            )}
            <>
                {!connected && (
                    <button onClick={handleClick} disabled={loading}>
                        {loading ?
                            <button
                                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-bold rounded-lg text-md px-6 py-3 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                            >
                                Loading ...
                            </button>
                            :
                            <ConnectBtn />
                        }
                    </button>
                )}

                {connected && (
                    <button
                        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-bold rounded-lg text-lg px-7 py-3.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                        onClick={disconnect}
                        disabled={loading}
                    >
                        Disconnect
                    </button>
                )}
            </>
        </div>
    )
};

export default ConnectWallet;