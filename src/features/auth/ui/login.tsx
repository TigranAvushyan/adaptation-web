import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export const Login = () => {
	const { t: authT } = useTranslation('auth/translation');
	const { t } = useTranslation();

	return (
		<div className="md:w-[400px] w-[300px] space flex-col">
			<div>{authT('Authorization')}</div>
			<Input placeholder={authT('Email')} />
			<Input placeholder={authT('Password')} />
			<Button>{t('Send')}</Button>
		</div>
	);
};
