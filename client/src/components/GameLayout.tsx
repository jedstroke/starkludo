import React, { useEffect, useState } from "react";
import { BackgroundPlaceholder } from "../blur-placeholder";
import { loadFromCache } from "../hooks/utils";

interface ComponentsProps {
    children: React.ReactNode;
}

const GameLayout: React.FC<ComponentsProps> = ({ children }) => {
    const [isGameAssetsSet, setGameAssets] = useState({ status: false, bgURL: "" });

    const init = async () => {
        const bgImageBlob = await loadFromCache("/game-assets/images/bg.png");
        const bgImageUrl = URL.createObjectURL(bgImageBlob);
        const fontBlob = await loadFromCache("/game-assets/fonts/Rowdies/Rowdies-Regular.ttf");
        const fontUrl = URL.createObjectURL(fontBlob);
        const fontFace = new FontFace("Rowdies", `url(${fontUrl})`);
        await fontFace.load();
        document.fonts.add(fontFace);
        setGameAssets({ status: true, bgURL: bgImageUrl });
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div
            style={{
                fontFamily: "Rowdies, 'Trebuchet MS', sans-serif",
                backgroundImage: `url(${isGameAssetsSet.status ? isGameAssetsSet.bgURL : BackgroundPlaceholder})`,
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100vw",
                height: "100vh",
            }}
        >
            {children}
        </div>
    );
};

export default GameLayout;
