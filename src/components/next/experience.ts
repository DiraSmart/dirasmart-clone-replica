export type RoomId = 'sala' | 'dormitorio' | 'cocina';
export type SceneId = 'bienvenida' | 'descanso' | 'salida';
export type RoomSettings = { light: number; curtains: number; temperature: number; occupied: boolean };
export type HouseSettings = Record<RoomId, RoomSettings>;
export const roomIds: RoomId[] = ['sala', 'dormitorio', 'cocina'];
export const roomNames: Record<RoomId, string> = { sala: 'Sala', dormitorio: 'Dormitorio', cocina: 'Cocina' };
export function createSettings(): HouseSettings {
  return Object.fromEntries(roomIds.map(id => [id, { light: 80, curtains: 100, temperature: 23, occupied: true }])) as HouseSettings;
}
export function updateRoom(state: HouseSettings, room: RoomId, patch: Partial<RoomSettings>): HouseSettings {
  const next = { ...state[room], ...patch };
  next.light = Math.max(0, Math.min(100, next.light));
  next.curtains = Math.max(0, Math.min(100, next.curtains));
  next.temperature = Math.max(18, Math.min(28, next.temperature));
  return { ...state, [room]: next };
}
export function applyScene(state: HouseSettings, room: RoomId, scene: SceneId): HouseSettings {
  const presets: Record<SceneId, Partial<RoomSettings>> = {
    bienvenida: { light: 85, curtains: 100, temperature: 23, occupied: true },
    descanso: { light: 25, curtains: 0, temperature: 24, occupied: true },
    salida: { light: 0, curtains: 25, temperature: 26, occupied: false },
  };
  return updateRoom(state, room, presets[scene]);
}
