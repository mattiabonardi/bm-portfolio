import { Icon } from "../components/Icon";
import styles from "../styles/pages/Index.module.css";
import { createRef, useEffect, useState } from "react";
import * as THREE from "three";
import SplineLoader from "@splinetool/loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Intro } from "../components/Intro";

interface HomeProps {
  introAlreadyLoaded: boolean;
}

export default function Home(props: HomeProps) {
  const pc = createRef<HTMLDivElement>();
  const titleWrapper = createRef<HTMLDivElement>();

  useEffect(() => {
    const n = window.innerWidth > 1000 ? 1.8 : 1.1;
    // camera
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -n,
      window.innerWidth / n,
      window.innerHeight / n,
      window.innerHeight / -n,
      -50000,
      50000
    );
    camera.position.set(0, 1, 100);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    // scene
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    scene.background = textureLoader.load("textures/background.png");

    // spline scene
    const loader = new SplineLoader();
    loader.load("3d/pc.splinecode", (splineScene) => {
      scene.add(splineScene);
    });

    // renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    renderer.setClearColor(0x000000, 0);
    pc.current?.appendChild(renderer.domElement);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    renderer.setClearAlpha(1);

    // orbit controls
    const controls = new OrbitControls(
      camera,
      titleWrapper.current as HTMLDivElement
    );
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;
    controls.rotateSpeed = 0.4;
    controls.panSpeed = 0.4;
    controls.autoRotate = true;

    window.addEventListener("resize", onWindowResize);
    function onWindowResize() {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      renderer.render(scene, camera);
      controls.update();
    }
  }, []);

  return (
    <>
      <Intro></Intro>
      <div ref={pc} className={styles.threeContainer}></div>
      <div ref={titleWrapper} className={styles.titleWrapper}>
        <h2 className={styles.subtitle}>I'm Mattia, a full stack</h2>
        <h1 className={styles.title}>DEVELOPER</h1>
      </div>
      <footer className={styles.footer}>
        <span className={styles.social}>
          <Icon
            iconName="instagram"
            size="20"
            onClickEvent={toInstagram}
          ></Icon>
        </span>
        <span className={styles.social}>
          <Icon iconName="github" size="20" onClickEvent={toGitHub}></Icon>
        </span>
        <span className={styles.social}>
          <Icon iconName="linkedin" size="20" onClickEvent={toLinkedin}></Icon>
        </span>
        <span className={styles.social}>
          <Icon iconName="mail" size="20" onClickEvent={toMail}></Icon>
        </span>
      </footer>
    </>
  );
}

const toLinkedin = () =>
  window.open(
    "https://www.linkedin.com/in/mattia-bonardi-099b02235/",
    "_blank"
  );
const toInstagram = () =>
  window.open("https://www.instagram.com/mattiaabonardi/", "_blank");
const toGitHub = () =>
  window.open("https://github.com/mattiabonardi", "_blank");
const toMail = () => window.open("mailto:mattiabonardi99@gmail.com");
