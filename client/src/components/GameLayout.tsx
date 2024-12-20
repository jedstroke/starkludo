/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect, useState } from 'react'
import { BackgroundPlaceholder } from '../blur-placeholder';
import { loadFromCache } from '../hooks/utils';

interface ComponentsProps {
    children: React.ReactNode
}

const GameLayout: React.FC<ComponentsProps> = ({
    children
}) => {
    const [isGameAssetsSet, setGameAssets] = useState({ status: false, bgURL: "" });
    const init = async () => {
        const bgImageBlob = await loadFromCache('/game-assets/nodice-bg.gif');
        console.log(bgImageBlob, "Background");
        const bgImageUrl = URL.createObjectURL(bgImageBlob);
        console.log(bgImageUrl, "Background URL");
        setGameAssets({ status: true, bgURL: bgImageUrl });
    };

    useEffect(() => {
        init();
    }, []);

        return (
            <div
                style={{
                    background: isGameAssetsSet.status
                        ? `url(${isGameAssetsSet.bgURL}) no-repeat center center`
                        : `url(${BackgroundPlaceholder}) no-repeat center center`,
                    backgroundSize: "100% 100%",
                    // backgroundAttachment:"fixed",
                    // backgroundOrigin:"border-box",
                    width: "100vw",
                    height: "100vh",
                }}
            >
            {children}
            </div>
        );
}

export default GameLayout;