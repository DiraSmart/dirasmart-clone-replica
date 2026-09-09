import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;

  // 2D simplex noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.06;

    // Three flowing color blobs
    float n1 = snoise(uv * 1.8 + vec2(t, t * 0.7));
    float n2 = snoise(uv * 2.4 - vec2(t * 0.9, t));
    float n3 = snoise(uv * 3.2 + vec2(-t * 0.5, t * 1.1));

    vec3 base   = vec3(0.024, 0.031, 0.059);   // deep navy
    vec3 cyan   = vec3(0.110, 0.722, 0.859);   // brand cyan
    vec3 violet = vec3(0.298, 0.196, 0.580);   // deep violet glow
    vec3 emer   = vec3(0.235, 0.808, 0.624);   // brand emerald

    vec3 col = base;
    col = mix(col, cyan,   smoothstep(-0.4, 0.7, n1) * 0.55);
    col = mix(col, violet, smoothstep(-0.2, 0.8, n2) * 0.32);
    col = mix(col, emer,   smoothstep( 0.1, 0.9, n3) * 0.18);

    // Top-right vignette to bias the glow
    vec2 p = uv - vec2(0.85, 0.15);
    float vign = smoothstep(0.6, 0.0, length(p) * 1.6);
    col += cyan * vign * 0.18;

    // Subtle bottom darkening
    col *= 0.7 + 0.3 * (1.0 - smoothstep(0.7, 1.0, uv.y));

    // Film grain
    float grain = fract(sin(dot(uv * uResolution, vec2(12.9898, 78.233))) * 43758.5453);
    col += (grain - 0.5) * 0.018;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const GradientMesh = () => {
  const ref = useRef<THREE.ShaderMaterial>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={ref}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(1920, 1080) },
        }}
      />
    </mesh>
  );
};

const GradientScene = () => (
  <Canvas
    className="!absolute inset-0"
    dpr={[1, 1.5]}
    gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
    camera={{ position: [0, 0, 1], fov: 50 }}
  >
    <GradientMesh />
  </Canvas>
);

export default GradientScene;
