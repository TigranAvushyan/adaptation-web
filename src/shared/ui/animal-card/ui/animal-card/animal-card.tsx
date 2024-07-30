import { FC } from 'react';
import { AnimalCardProps } from '../../types/animal-card-types';
import { Card } from '@/shared/ui/card';

export const AnimalCard: FC<AnimalCardProps> = ({ children }) => {
	return <Card className="p-4 w-[300px] aspect-3/4">{children}</Card>;
};
