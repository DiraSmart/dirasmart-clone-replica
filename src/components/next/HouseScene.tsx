import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import { Group, PointLight, Vector3, PCFShadowMap } from 'three';
import { HouseSettings, RoomId, roomIds, roomNames } from './experience';

type Props = { settings: HouseSettings; focus: RoomId | null; onSelect: (id: RoomId) => void; hotel?: boolean; reducedMotion: boolean };
const centers: Record<RoomId, [number, number, number]> = { sala: [-3, 0, 0], dormitorio: [1, 0, -1.6], cocina: [1, 0, 1.6] };
function Block({ at, size, color, radius = .035 }: { at: [number, number, number]; size: [number, number, number]; color: string; radius?: number }) {
  return <RoundedBox position={at} args={size} radius={radius} smoothness={1} castShadow receiveShadow><meshStandardMaterial color={color} roughness={.78} /></RoundedBox>;
}
function Bed() { return <group>
  <Block at={[0, .25, 0]} size={[1.9, .4, 2]} color="#746252" />
  <Block at={[0, .56, 0]} size={[1.92, .28, 1.98]} color="#f3efe5" radius={.1} />
  <Block at={[0, .75, -.58]} size={[1.7, .15, .45]} color="#e5e0d5" radius={.1} />
  <Block at={[0, .73, .55]} size={[1.93, .08, .65]} color="#485c59" />
  <Block at={[0, .65, -1.03]} size={[2.5, 1.1, .15]} color="#b2a18a" />
  {[-1.3, 1.3].map(x => <group key={x}><Block at={[x, .35, -.7]} size={[.48, .6, .5]} color="#9a7957" /><Block at={[x, .82, -.7]} size={[.3, .32, .3]} color="#e9d7b1" radius={.12} /></group>)}
  <Block at={[0, .05, .2]} size={[2.9, .04, 2.9]} color="#c7bbaa" />
 </group>; }
function Sofa() { return <group>
  <Block at={[-.8, .35, .2]} size={[1.25, .55, 2.4]} color="#d0c8b6" radius={.16} />
  <Block at={[-1.29, .75, .2]} size={[.3, .7, 2.4]} color="#bdb5a3" radius={.13} />
  {[-.77, 1.17].map(z => <Block key={z} at={[-.8, .7, z]} size={[1.3, .45, .3]} color="#bdb5a3" radius={.12} />)}
  <Block at={[-.9, .75, -.4]} size={[.65, .15, .55]} color="#5a7068" radius={.08} />
  <Block at={[.65, .4, .2]} size={[1.05, .14, 1.5]} color="#8e7152" radius={.18} />
  <Block at={[.65, .2, .2]} size={[.35, .4, .65]} color="#3b4442" />
  <Block at={[.3, .05, .2]} size={[2.9, .04, 3.35]} color="#a8a390" />
  <Block at={[1.6, .68, .2]} size={[.16, 1.35, 2.1]} color="#414a47" />
 </group>; }
function Kitchen() { return <group>
  <Block at={[0, .45, -1]} size={[3.2, .85, .6]} color="#b7a185" />
  <Block at={[0, .92, -1]} size={[3.25, .1, .68]} color="#e1ded3" />
  <Block at={[1.3, 1, -1]} size={[.5, 1.95, .65]} color="#878f8a" />
  <Block at={[-.4, .45, .3]} size={[2, .85, .9]} color="#8a725a" />
  <Block at={[-.4, .93, .3]} size={[2.1, .1, 1]} color="#e2dfd3" />
  {[-.95, .2].map(x => <group key={x}><Block at={[x, .53, 1.18]} size={[.42, .1, .42]} color="#4a5b53" radius={.12} /><Block at={[x, .25, 1.18]} size={[.1, .5, .1]} color="#77736b" /></group>)}
 </group>; }
function Curtain({ open, width, at, reducedMotion }: { open: number; width: number; at: [number, number, number]; reducedMotion: boolean }) {
  const left = useRef<Group>(null), right = useRef<Group>(null);
  useFrame((_, delta) => {
    const scale = .06 + (1 - open / 100) * .94;
    for (const g of [left.current, right.current]) if (g) g.scale.x = reducedMotion ? scale : g.scale.x + (scale - g.scale.x) * (1 - Math.exp(-delta * 3));
  });
  return <group position={at}>
    <group position={[-width / 2, 0, 0]} ref={left}><Block at={[width / 4, 0, 0]} size={[width / 2, 1.6, .065]} color="#e6ded0" radius={.01} />{Array.from({ length: 12 }, (_, i) => <Block key={i} at={[(i + .5) * width / 24, 0, -.035]} size={[.035, 1.6, .07]} color={i % 2 ? '#c6bba9' : '#ddd3c1'} radius={.008} />)}</group>
    <group position={[width / 2, 0, 0]} ref={right}><Block at={[-width / 4, 0, 0]} size={[width / 2, 1.6, .065]} color="#e6ded0" radius={.01} />{Array.from({ length: 12 }, (_, i) => <Block key={i} at={[-(i + .5) * width / 24, 0, -.035]} size={[.035, 1.6, .07]} color={i % 2 ? '#c6bba9' : '#ddd3c1'} radius={.008} />)}</group>
  </group>;
}
function Room({ id, settings, onSelect, hotel, reducedMotion }: Omit<Props, 'focus'> & { id: RoomId }) {
  const p: [number, number, number] = hotel ? [roomIds.indexOf(id) * 3.8 - 3.8, 0, 0] : centers[id];
  const light = useRef<PointLight>(null);
  const size: [number, number] = hotel ? [3.45, 4.4] : id === 'sala' ? [3.7, 6.2] : [3.9, 3];
  useFrame((_, delta) => { if (light.current) { const target = settings[id].light / 100 * 13; light.current.intensity = reducedMotion ? target : light.current.intensity + (target - light.current.intensity) * (1 - Math.exp(-delta * 4)); } });
  return <group position={p}>
    <mesh position={[0, -.03, 0]} receiveShadow onClick={e => { e.stopPropagation(); onSelect(id); }}><boxGeometry args={[size[0], .15, size[1]]} /><meshStandardMaterial color={id === 'cocina' && !hotel ? '#c5c4b4' : '#b69c78'} /></mesh>
    {hotel ? <Bed /> : id === 'sala' ? <Sofa /> : id === 'dormitorio' ? <Bed /> : <Kitchen />}
    <Block at={[0, 1.04, -size[1] / 2]} size={[size[0] + .12, 2.2, .12]} color="#ddd5c4" />
    <Block at={[-size[0] / 2, .5, 0]} size={[.12, 1.1, size[1]]} color="#ddd5c4" />
    <Block at={[0, 1, -size[1] / 2 + .08]} size={[size[0] * .8, 1.65, .025]} color="#90a7a1" />
    <Curtain at={[0, 1, -size[1] / 2 + .15]} width={size[0] * .8} open={settings[id].curtains} reducedMotion={reducedMotion} />
    <Block at={[size[0] / 2 - .15, .92, -size[1] / 2 + .18]} size={[.16, .26, .06]} color="#344c47" />
    <pointLight ref={light} position={[0, 2, 0]} color="#ffd6a0" distance={6} decay={2} />
    <Html position={[0, .2, size[1] / 2 + .3]} center zIndexRange={[5, 0]}><button className="next-room-pin" onClick={() => onSelect(id)} aria-label={`Explorar ${hotel ? 'habitación ' + (101 + roomIds.indexOf(id)) : roomNames[id]}`}><span />{hotel ? 'Hab. ' + (101 + roomIds.indexOf(id)) : roomNames[id]}</button></Html>
  </group>;
}
function CameraRig({ focus, hotel, reducedMotion }: Pick<Props, 'focus' | 'hotel' | 'reducedMotion'>) {
  const target = useRef(new Vector3(-.5, 0, 0));
  const desired = new Vector3();
  useFrame(({ camera }, delta) => {
    const c = focus ? hotel ? [roomIds.indexOf(focus) * 3.8 - 3.8, 0, 0] : centers[focus] : [-.5, 0, 0];
    desired.set(c[0], .25, c[2]);
    const damping = reducedMotion ? 1 : 1 - Math.exp(-delta * 2.5);
    target.current.lerp(desired, damping);
    desired.set(c[0] + (focus ? 4.4 : 10), focus ? 6 : 10.5, c[2] + (focus ? 6.8 : 12));
    camera.position.lerp(desired, damping); camera.lookAt(target.current);
  });
  return null;
}
export default function HouseScene(props: Props) {
  return <Canvas shadows={{ type: PCFShadowMap }} dpr={[1, 1.25]} camera={{ position: [9.5, 10.5, 12], fov: 39 }} gl={{ antialias: true, powerPreference: 'low-power' }} fallback={<p className="next-canvas-fallback">La vista 3D no está disponible en este dispositivo. Puedes explorar los controles desde el panel.</p>}>
    <color attach="background" args={['#e8e7de']} />
    <ambientLight intensity={.65} /><hemisphereLight args={['#f7f4e8', '#8a938a', 1]} />
    <directionalLight position={[-6, 12, 4]} intensity={2} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-left={-12} shadow-camera-right={12} shadow-camera-top={10} shadow-camera-bottom={-10} shadow-bias={-.001} />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.3, 0]} receiveShadow><planeGeometry args={[200, 200]} /><meshStandardMaterial color="#e8e7de" roughness={1} /></mesh>
    {roomIds.map(id => <Room key={id} {...props} id={id} />)}
    <CameraRig {...props} />
  </Canvas>;
}
