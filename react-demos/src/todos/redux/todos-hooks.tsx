import { useDispatch } from 'react-redux';
import type { RootDispatch } from './todos-store';

export const useTodosDispatch = useDispatch.withTypes<RootDispatch>();
