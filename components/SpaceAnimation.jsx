// components/SpaceAnimation.jsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

export default function SpaceAnimation() {
    const [mounted, setMounted] = useState(false);

    const sceneRef = useRef(null);
    const shipWrapRef = useRef(null);
    const objRef = useRef(null);
    const shadowRef = useRef(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!mounted) return;

        const scene = sceneRef.current;
        const shipWrap = shipWrapRef.current;
        const obj = objRef.current;
        const shadow = shadowRef.current;

        if (!scene || !shipWrap || !obj || !shadow) return;

        const shipImg = shipWrap.querySelector(".ufoShip");
        const beam = shipWrap.querySelector(".ufoBeam");
        const mist = shipWrap.querySelector(".ufoBeamMist");
        const spark = shipWrap.querySelector(".ufoBeamSpark");

        if (!shipImg || !beam || !mist || !spark) return;

        const ctx = gsap.context(() => {
            gsap.killTweensOf([shipWrap, obj, shadow, beam, mist, spark]);
            gsap.globalTimeline.clear();

            // ✅ base sizes (scale-proof)
            const getBaseObjW = () =>
                obj.offsetWidth || obj.getBoundingClientRect().width;

            // ✅ ship visual width (NOT wrapper width, avoids beam affecting right boundary)
            const getShipVisualW = () => shipImg.getBoundingClientRect().width;

            const getRects = () => {
                const w = window.innerWidth;
                const h = window.innerHeight;

                const shipW = getShipVisualW();
                const objW = getBaseObjW();

                // smaller pad so it can go more right
                const pad = clamp(w * 0.012, 6, 14);

                const leftX = pad;
                const rightX = Math.max(pad, w - shipW - pad);

                const shipY = clamp(h * 0.02, 8, 22);

                const groundY = clamp(h * 0.78, 520, 900);
                const pickupY = clamp(h * 0.18, 130, 240);

                const objLeftX = clamp(w * 0.12, 28, w * 0.35);
                const objRightX = clamp(w * 0.76, w * 0.6, w - objW - 28);

                return {
                    w,
                    h,
                    pad,
                    leftX,
                    rightX,
                    shipY,
                    groundY,
                    pickupY,
                    objLeftX,
                    objRightX,
                };
            };

            // ✅ centerline uses BASE width (scale-proof)
            const shipCenterLineX = () => {
                const shipRect = shipImg.getBoundingClientRect(); // use ship image center
                const objW = getBaseObjW();
                return shipRect.left + shipRect.width * 0.5 - objW * 0.5;
            };

            const bellyPoint = () => {
                const shipRect = shipImg.getBoundingClientRect(); // use ship image center
                const objW = getBaseObjW();
                return {
                    x: shipRect.left + shipRect.width * 0.5 - objW * 0.5,
                    y: shipRect.top + shipRect.height * 0.72,
                };
            };

            const beamOff = () =>
                gsap.set([beam, mist, spark], { opacity: 0, scaleY: 0.65 });

            const beamOn = () => {
                gsap.to([beam, mist], {
                    opacity: 0.38,
                    scaleY: 1,
                    duration: 0.28,
                    ease: "power2.out",
                });
                gsap.to(spark, {
                    opacity: 0.55,
                    duration: 0.18,
                    ease: "power1.out",
                });
            };

            let dims = getRects();

            // ✅ START STATE: ship RIGHT, object RIGHT (so loop ends where it starts)
            gsap.set(shipWrap, {
                x: dims.rightX,
                y: dims.shipY,
                rotateZ: 0,
                scale: 1,
                force3D: true,
                transformPerspective: 1000,
            });

            gsap.set(obj, {
                x: dims.objRightX,
                y: dims.groundY,
                scale: 1,
                rotateZ: 0,
                opacity: 1,
                force3D: true,
                transformPerspective: 1000,
                transformOrigin: "50% 50%",
            });

            gsap.set(shadow, {
                x: dims.objRightX,
                y: dims.groundY + 44,
                scaleX: 1.15,
                opacity: 0.5,
                force3D: true,
            });

            beamOff();

            // hover
            gsap.to(shipWrap, {
                y: "+=6",
                duration: 1.25,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });

            // flicker life
            gsap.to([beam, mist], {
                opacity: 0.28,
                duration: 0.55,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });

            const tl = gsap.timeline({
                repeat: -1,
                defaults: { overwrite: "auto" },
            });

            const glideTo = (side) => {
                dims = getRects();
                const target = side === "RIGHT" ? dims.rightX : dims.leftX;

                tl.to(shipWrap, {
                    x: target,
                    duration: 3.6,
                    ease: "power4.inOut",
                    rotateZ: 0,
                    scale: 1.02,
                }).to(
                    shipWrap,
                    { scale: 1, duration: 0.9, ease: "power3.out" },
                    ">-0.35"
                );

                tl.to({}, { duration: 0.22 });
            };

            const pickup = () => {
                tl.call(beamOn);
                tl.to({}, { duration: 0.12 });

                tl.to(obj, {
                    x: () => shipCenterLineX(),
                    duration: 0.28,
                    ease: "power2.inOut",
                });

                tl.to(
                    shadow,
                    {
                        x: () => shipCenterLineX(),
                        opacity: 0.16,
                        scaleX: 0.55,
                        duration: 0.55,
                        ease: "power2.out",
                    },
                    "<"
                );

                tl.to(
                    obj,
                    {
                        y: () => {
                            dims = getRects();
                            return dims.pickupY;
                        },
                        scale: 0.92,
                        rotateZ: 0,
                        duration: 2.0,
                        ease: "power3.inOut",
                    },
                    "<0.05"
                );

                tl.to({}, { duration: 0.16 });

                tl.to(obj, {
                    x: () => bellyPoint().x,
                    y: () => bellyPoint().y,
                    scale: 0.55,
                    opacity: 0,
                    duration: 0.58,
                    ease: "power2.in",
                });

                tl.call(beamOff, null, ">-0.10");
                tl.to({}, { duration: 0.35 });
            };

            const dropCentered = (finalGroundX) => {
                tl.call(beamOn);
                tl.to({}, { duration: 0.1 });

                tl.set(obj, {
                    x: () => shipCenterLineX(),
                    y: () => {
                        dims = getRects();
                        return dims.pickupY + 10;
                    },
                    scale: 0.86,
                    rotateZ: 0,
                    opacity: 1,
                });

                tl.set(shadow, {
                    x: () => shipCenterLineX(),
                    y: () => {
                        dims = getRects();
                        return dims.groundY + 44;
                    },
                    opacity: 0.12,
                    scaleX: 0.6,
                });

                tl.to(obj, {
                    y: () => {
                        dims = getRects();
                        return dims.groundY;
                    },
                    scale: 1.03,
                    duration: 0.7,
                    ease: "power2.in",
                });

                tl.to(
                    shadow,
                    {
                        opacity: 0.55,
                        scaleX: 1.28,
                        duration: 0.34,
                        ease: "power2.out",
                    },
                    "<"
                );

                // ✅ CHANGE START: reduce bounce ONLY on RIGHT side (keep LEFT same)
                const isRightDrop = finalGroundX > window.innerWidth * 0.5;
                const rightMul = isRightDrop ? 0.65 : 1; // <-- only right side reduced

                const bigBounce = Math.round(78 * rightMul);
                const smallBounce = Math.round(40 * rightMul);

                tl.to(obj, {
                    y: `-=${bigBounce}`,
                    duration: 0.32,
                    ease: "power2.out",
                })
                    .to(obj, {
                        y: `+=${bigBounce}`,
                        duration: 0.22,
                        ease: "power2.in",
                    })
                    .to(obj, {
                        y: `-=${smallBounce}`,
                        duration: 0.2,
                        ease: "power2.out",
                    })
                    .to(obj, {
                        y: `+=${smallBounce}`,
                        duration: 0.16,
                        ease: "power2.in",
                    });
                // ✅ CHANGE END

                // ✅ after bounce, place it EXACTLY at the ground spot for that side
                tl.set(obj, {
                    x: () => finalGroundX,
                    scale: 1,
                    opacity: 1,
                });

                tl.set(shadow, {
                    x: () => finalGroundX,
                    opacity: 0.5,
                    scaleX: 1.15,
                });

                tl.call(beamOff, null, ">-0.20");
                tl.to({}, { duration: 0.65 });
            };

            // ===============================
            // ✅ NEW LOOP (no teleport):
            // Start RIGHT -> pick RIGHT -> go LEFT -> drop LEFT -> pick LEFT -> go RIGHT -> drop RIGHT -> repeat
            // ===============================
            dims = getRects();
            pickup();
            glideTo("LEFT");
            dims = getRects();
            dropCentered(dims.objLeftX);

            pickup();
            glideTo("RIGHT");
            dims = getRects();
            dropCentered(dims.objRightX);

            // ✅ resize rebuild keeps start on RIGHT
            const rebuild = () => {
                dims = getRects();

                gsap.set(shipWrap, {
                    x: dims.rightX,
                    y: dims.shipY,
                    rotateZ: 0,
                    scale: 1,
                });

                gsap.set(obj, {
                    x: dims.objRightX,
                    y: dims.groundY,
                    scale: 1,
                    rotateZ: 0,
                    opacity: 1,
                });

                gsap.set(shadow, {
                    x: dims.objRightX,
                    y: dims.groundY + 44,
                    scaleX: 1.15,
                    opacity: 0.5,
                });

                beamOff();
                tl.restart(true, false);
            };

            window.addEventListener("resize", rebuild);

            const settleTimer = setTimeout(() => rebuild(), 140);

            return () => {
                clearTimeout(settleTimer);
                window.removeEventListener("resize", rebuild);
                tl.kill();
                gsap.killTweensOf([shipWrap, obj, shadow, beam, mist, spark]);
            };
        }, sceneRef);

        return () => ctx.revert();
    }, [mounted]);

    if (!mounted) return null;

    return createPortal(
        <div ref={sceneRef} className="ufoCineScene" aria-hidden="true">
            <div ref={shipWrapRef} className="ufoShipWrap">
                <img
                    className="ufoShip"
                    src="/spaceship.png"
                    alt=""
                    draggable={false}
                />
                <div className="ufoBeam ufoBeamNoise" />
                <div className="ufoBeamMist" />
                <div className="ufoBeamSpark" />
            </div>

            <img
                ref={objRef}
                className="ufoObj"
                src="/laps.png"
                alt=""
                draggable={false}
            />
            <div ref={shadowRef} className="ufoShadow" />
        </div>,
        document.body
    );
}
