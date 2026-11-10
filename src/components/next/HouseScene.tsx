import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, RoundedBox, CameraControls } from '@react-three/drei';
import { Group, PointLight, Vector3, PCFShadowMap, CanvasTexture, RepeatWrapping, MeshStandardMaterial } from 'three';
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

function Plant({ at, scale=1 }: { at:[number,number,number]; scale?:number }) {
 return <group position={at} scale={scale}><mesh position={[0,.23,0]} castShadow><cylinderGeometry args={[.23,.17,.46,24]}/><meshStandardMaterial color="#b2a18b" roughness={.9}/></mesh>{Array.from({length:9},(_,i)=><group key={i} rotation={[0,i*2.4,0]}><mesh position={[.1,.65+i*.035,0]} rotation={[0,0,-.4]}><cylinderGeometry args={[.012,.018,.85,5]}/><meshStandardMaterial color="#4c6042"/></mesh><mesh position={[.2,.9+i*.035,0]} rotation={[0,0,-.7]} scale={[.12,.33,.075]} castShadow><sphereGeometry args={[1,10,8]}/><meshStandardMaterial color={i%2?'#506b47':'#738568'} roughness={.75}/><group/></mesh></group>)}</group>;
}
function OakFloor({width,depth}:{width:number;depth:number}) {
 const texture=useMemo(()=>{const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;const c=canvas.getContext('2d')!;c.fillStyle='#9f805a';c.fillRect(0,0,512,512);let seed=18;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};for(let row=0;row<8;row++){const y=row*64;c.fillStyle=['#a98b67','#a08461','#b29771','#ad9069'][row%4];c.fillRect(0,y,512,63);for(let i=0;i<110;i++){c.strokeStyle='rgba(63,39,18,'+(random()*.12)+')';c.lineWidth=random()*1.3;c.beginPath();const yy=y+random()*62;c.moveTo(0,yy);c.bezierCurveTo(150,yy+random()*4,350,yy-3,512,yy+2);c.stroke();}c.fillStyle='#786040';c.fillRect((row%3)*160,y,1,64);}const t=new CanvasTexture(canvas);t.wrapS=t.wrapT=RepeatWrapping;t.repeat.set(width/3,depth/3);return t;},[width,depth]);useEffect(()=>()=>texture.dispose(),[texture]);return <mesh position={[0,.052,0]} rotation={[-Math.PI/2,0,0]} receiveShadow><planeGeometry args={[width,depth]}/><meshStandardMaterial map={texture} roughness={.62}/></mesh>;
}
function Pendant({at,level}:{at:[number,number,number];level:number}) {return <group position={at}><mesh position={[0,.3,0]}><cylinderGeometry args={[.008,.008,.6,6]}/><meshStandardMaterial color="#34342f"/></mesh><mesh castShadow><cylinderGeometry args={[.08,.29,.22,24,1,true]}/><meshStandardMaterial color="#b08c53" metalness={.65} roughness={.34} side={2}/></mesh><mesh rotation={[-Math.PI/2,0,0]} position={[0,-.105,0]}><circleGeometry args={[.25,24]}/><meshStandardMaterial color="#ffe0a1" emissive="#ffbd62" emissiveIntensity={level/100*3}/></mesh></group>;}
function Decor({id,hotel,level}:{id:RoomId;hotel?:boolean;level:number}) {return <group>
{hotel||id==='dormitorio'?<>
{Array.from({length:19},(_,i)=><Block key={i} at={[-1.42+i*.16,.82,-1.13]} size={[.045,1.55,.04]} color="#8e7254"/>)}
{[-1.28,1.28].map(x=><Pendant key={x} at={[x,1.5,-.7]} level={level}/>)}
<group position={[.5,.76,.2]} rotation={[0,0,.1]}><Block at={[0,0,0]} size={[.42,.07,.6]} color="#6a493c"/><Block at={[0,.04,0]} size={[.37,.03,.56]} color="#d6cbb8"/></group>
<Plant at={[1.5,.1,.9]} scale={.5}/>
</>:id==='sala'?<>
<Plant at={[-1.2,.1,-2.3]} scale={.7}/>
<group position={[1.6,.74,.2]}><Block at={[0,0,0]} size={[.12,.74,1.45]} color="#101c20"/><Block at={[-.07,0,0]} size={[.005,.64,1.32]} color="#263d42"/></group>
<Block at={[1.52,.2,.2]} size={[.6,.25,2.45]} color="#77563d"/>
<mesh position={[.67,.53,.15]} rotation={[-Math.PI/2,0,0]}><cylinderGeometry args={[.19,.19,.035,24]}/><meshStandardMaterial color="#b59d75" metalness={.4} roughness={.4}/></mesh>
<Block at={[.6,.52,-.2]} size={[.42,.035,.35]} color="#d2c4a8"/><Block at={[.62,.56,-.2]} size={[.4,.035,.34]} color="#474e44"/>
<Pendant at={[.1,2.4,.2]} level={level}/>
</>:<>
{[-1.1,-.4,.3].map(x=><Pendant key={x} at={[x,2.25,.3]} level={level}/>)}
{[-1.25,-.65,-.05,.55].map(x=><Block key={x} at={[x,.44,-.665]} size={[.015,.74,.012]} color="#6b5038"/>)}
<Block at={[-.6,.983,-1]} size={[.65,.015,.42]} color="#303b3a"/>
{[-.77,-.44].map(x=><mesh key={x} position={[x,.995,-1]} rotation={[-Math.PI/2,0,0]}><ringGeometry args={[.07,.085,20]}/><meshStandardMaterial color="#8c9998"/></mesh>)}
<Block at={[.3,.988,-1]} size={[.48,.018,.34]} color="#6e7672"/>
<mesh position={[.3,1.12,-1.15]}><torusGeometry args={[.12,.015,8,16,Math.PI]}/><meshStandardMaterial color="#bca16d" metalness={.8} roughness={.2}/></mesh>
<Plant at={[.15,.99,.3]} scale={.22}/>
</>}
</group>;}

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
  const light = useRef<PointLight>(null); const strip=useRef<MeshStandardMaterial>(null);
  const size: [number, number] = hotel ? [3.45, 4.4] : id === 'sala' ? [3.7, 6.2] : [3.9, 3];
  useFrame((_, delta) => { if(strip.current) strip.current.emissiveIntensity=settings[id].light/100*3; if (light.current) { const target = settings[id].light / 100 * 13; light.current.intensity = reducedMotion ? target : light.current.intensity + (target - light.current.intensity) * (1 - Math.exp(-delta * 4)); } });
  return <group position={p}>
    <mesh position={[0, -.03, 0]} receiveShadow onClick={e => { e.stopPropagation(); onSelect(id); }}><boxGeometry args={[size[0], .15, size[1]]} /><meshStandardMaterial color={id === 'cocina' && !hotel ? '#c5c4b4' : '#b69c78'} /></mesh>
    <OakFloor width={size[0]} depth={size[1]}/><Decor id={id} hotel={hotel} level={settings[id].light}/>{hotel ? <Bed /> : id === 'sala' ? <Sofa /> : id === 'dormitorio' ? <Bed /> : <Kitchen />}
    <Block at={[0,-.18,0]} size={[size[0]+.18,.22,size[1]+.18]} color="#343d39"/><Block at={[0, 1.04, -size[1] / 2]} size={[size[0] + .12, 2.2, .12]} color="#ddd5c4" />
    <Block at={[-size[0] / 2, .5, 0]} size={[.12, 1.1, size[1]]} color="#ddd5c4" />
    <Block at={[0, 1, -size[1] / 2 + .08]} size={[size[0] * .8, 1.65, .025]} color="#90a7a1" />
    <Curtain at={[0, 1, -size[1] / 2 + .15]} width={size[0] * .8} open={settings[id].curtains} reducedMotion={reducedMotion} />
    <Block at={[size[0] / 2 - .15, .92, -size[1] / 2 + .18]} size={[.16, .26, .06]} color="#344c47" />
    <mesh position={[0,1.92,-size[1]/2+.17]}><boxGeometry args={[size[0]*.85,.018,.025]}/><meshStandardMaterial ref={strip} color="#f6cc85" emissive="#ffb45c" emissiveIntensity={2}/></mesh><pointLight ref={light} position={[0, 2, 0]} color="#ffd6a0" distance={6} decay={2} />
    <Html position={[0, .2, size[1] / 2 + .3]} center zIndexRange={[5, 0]}><button className="next-room-pin" onClick={() => onSelect(id)} aria-label={`Explorar ${hotel ? 'habitación ' + (101 + roomIds.indexOf(id)) : roomNames[id]}`}><span /><b>{String(roomIds.indexOf(id)+1).padStart(2,'0')}</b>{hotel ? 'Hab. ' + (101 + roomIds.indexOf(id)) : roomNames[id]}</button></Html>
  </group>;
}
function CameraRig({focus,hotel,reducedMotion}:Pick<Props,'focus'|'hotel'|'reducedMotion'>){
 const controls=useRef<CameraControls>(null);
 useEffect(()=>{const c=focus?(hotel?[roomIds.indexOf(focus)*3.8-3.8,0,0]:centers[focus]):[-.5,0,0];void controls.current?.setLookAt(c[0]+(focus==='sala'?-4.8:focus?5.3:9),focus?5.3:9,c[2]+(focus==='dormitorio'?1.8:focus?6.5:11),c[0],.4,c[2],!reducedMotion);},[focus,hotel,reducedMotion]);
 return <CameraControls ref={controls} makeDefault minDistance={4} maxDistance={24} minPolarAngle={.25} maxPolarAngle={Math.PI*.48} smoothTime={reducedMotion?0:.9} dollySpeed={.4}/>;
}
function Atmosphere({settings,focus}:Pick<Props,'settings'|'focus'>){const sun=useRef<import('three').DirectionalLight>(null);const ambient=useRef<import('three').AmbientLight>(null);useFrame((_,delta)=>{const dim=settings[focus||'sala'].light<40;const k=1-Math.exp(-delta*2);if(sun.current)sun.current.intensity+=( (dim?.25:2.8)-sun.current.intensity)*k;if(ambient.current)ambient.current.intensity+=((dim?.18:.55)-ambient.current.intensity)*k;});return <><ambientLight ref={ambient} intensity={.55}/><hemisphereLight args={['#c9d8de','#80735d',.5]}/><directionalLight ref={sun} position={[-6,12,4]} intensity={2.8} castShadow shadow-mapSize={[2048,2048]} shadow-camera-left={-12} shadow-camera-right={12} shadow-camera-top={10} shadow-camera-bottom={-10} shadow-bias={-.001}/></>;}
export default function HouseScene(props: Props) {
  return <Canvas shadows={{ type: PCFShadowMap }} dpr={[1, 1.25]} camera={{ position: [8.5, 9, 11], fov: 39 }} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }} fallback={<p className="next-canvas-fallback">La vista 3D no está disponible en este dispositivo. Puedes explorar los controles desde el panel.</p>}>
    <Atmosphere settings={props.settings} focus={props.focus}/>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.36, 0]} receiveShadow><planeGeometry args={[200, 200]} /><shadowMaterial transparent opacity={.28} /></mesh>
    {roomIds.map(id => <Room key={id} {...props} id={id} />)}
    <CameraRig {...props} />
  </Canvas>;
}
