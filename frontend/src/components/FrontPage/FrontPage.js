import FrontPageCard from './FrontPageCard';
import AccountHeader from './AccountHeader';

import Sport from '../../image/sport.png';
import Shopping from '../../image/shopping.png';
import Group from '../../image/group.png';

function FrontPage({ className }) {
	const cards = [
		{
			title: 'Sports',
			desc: 'Create a new workout plan to keep your body fit and in shape!',
			target: '/areaChoice',
			img: Sport
		},
		{
			title: 'Groups',
			desc: 'Everything is more fun together. Woukout together with your friends and share your progress!',
			target: '/groups',
			img: Group
		},
		{
			title: 'Shopping',
			desc: 'Shop new equipment to discover new training methods!',
			target: '/areaChoice',
			img: Shopping
		}
	];

	return (
		<div className={`${className}`}>
			<AccountHeader className='mt-2' />
			<div className='d-flex justify-content-around align-items-center' style={{ height: '70vh' }}>
				{cards.map(({ title, desc, target, img }, i) => <FrontPageCard className='shadow-lg m-3' key={i} title={title} desc={desc} target={target} img={img} />)}
			</div>
		</div>
	);
}

export default FrontPage;