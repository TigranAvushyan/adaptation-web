import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export const Login = () => {
	const { t: authT } = useTranslation('auth/translation');
	const { t } = useTranslation();

	return (
		<div className="md:w-[400px] w-[300px] space flex-col">
			<h3 className="capitalize">{authT('authorization')}</h3>
			<Input className="placeholder:capitalize" placeholder={authT('email')} />
			<Input
				type="password"
				className="placeholder:capitalize"
				placeholder={authT('password')}
			/>
			<Button>{t('send')}</Button>
		</div>
	);
};
