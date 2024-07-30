import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export const Login = () => {
	return (
		<div className="md:w-[400px] w-[300px] space flex-col">
			<div>Login</div>
			<Input placeholder="Email" />
			<Input placeholder="Password" />
			<Button>Login</Button>
		</div>
	);
};
