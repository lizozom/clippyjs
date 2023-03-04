import { AgentWrapper } from '../../types';
import { agent } from './agent';
import { soundMp3 } from './sounds-mp3';
import { soundOgg } from './sounds-ogg';

export const F1: AgentWrapper = {
    name: 'F1',
    config: agent,
    soundMp3,
    soundOgg,
}