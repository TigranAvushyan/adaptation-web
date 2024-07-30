import { FC } from 'react';

import { Card } from '@/shared/ui/card';

import { AnimalCardProps } from '../../types/animal-card-types';

export const AnimalCard: FC<AnimalCardProps> = ({ children }) => {
	return <Card className="p-4 w-[300px] aspect-3/4">{children}</Card>;
};
