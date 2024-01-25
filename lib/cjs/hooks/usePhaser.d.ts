import { RefObject } from 'react';
import Phaser from 'phaser';
export default function usePhaser(config: Phaser.Types.Core.GameConfig): [RefObject<HTMLCanvasElement>, Phaser.Game | undefined];
