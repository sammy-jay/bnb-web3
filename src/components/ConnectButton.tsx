import React from "react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";

const ConnectButton = () => {
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
    useState(false);
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

  const closeAll = () => {
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };
  return (
    <header className={`w-full lg:w-[600px] lg:mx-auto bg-[#212244]`}>
      <div
        className={styles.backdrop}
        style={{
          opacity: isConnectHighlighted || isNetworkSwitchHighlighted ? 1 : 0,
        }}
      />
      <div className={`${styles.header} lg:w-[600px] lg:mx-auto`}>
        {/* <div className={styles.logo}>
          <h1 className="text-gray-300 text-lg font-semibold">Blockchain</h1>
        </div> */}
        <div
          className={`${styles.buttons} w-full flex flex-row justify-between`}
        >
          <div
            onClick={closeAll}
            className={`${styles.highlight} ${
              isNetworkSwitchHighlighted ? styles.highlightSelected : ``
            }`}
          >
            <w3m-network-button />
          </div>
          <div
            onClick={closeAll}
            className={`${styles.highlight} ${
              isConnectHighlighted ? styles.highlightSelected : ``
            }`}
          >
            <w3m-button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ConnectButton;
