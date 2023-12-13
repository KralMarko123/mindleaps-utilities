import { TbFileReport, TbLink } from 'react-icons/tb';
import { GrDocumentPerformance } from 'react-icons/gr';
import { SiBytedance } from 'react-icons/si';
import { VscGraph } from 'react-icons/vsc';
import { URLs } from './URLs';

export const LINKS = [
	{
		title: 'Narrative Report',
		icon: <TbFileReport />,
		url: URLs.NARRATIVE_REPORT
	},

	{
		title: 'Performance Evaluations',
		icon: <GrDocumentPerformance />,
		url: URLs.QUARTERLY_PERFORMANCE_EVALUATIONS
	},
	{
		title: 'MindLeaps website',
		icon: <TbLink />,
		url: URLs.MINDLEAPS_WEBSITE
	},
	{
		title: 'Foundational skills',
		icon: <SiBytedance />,
		url: URLs.FOUNDATIONAL_SKILLS
	},
	{
		title: 'MindLeaps Tracker',
		icon: <VscGraph />,
		url: URLs.MINDLEAPS_TRACKER
	}
];
