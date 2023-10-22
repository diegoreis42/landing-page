import { Link } from '@/app/components/interfaces';

export interface IImage {
    path: string;
    alt: string;
    size?: number;
    link?: Link;
}