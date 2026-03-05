import styled from 'styled-components'

export const AppContainer = styled.div`
	min-height: 100vh;
	background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%);
	padding: 20px;
`

export const Header = styled.header`
	text-align: center;
	margin-bottom: 32px;
	position: relative;
	padding: 20px;
	background: rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	border: 3px solid rgba(0, 0, 0, 0.2);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
`

export const AvatarContainer = styled.div`
	position: absolute;
	top: 0;
	right: 20px;

	a {
		display: block;
		transition: transform 0.2s ease;
		cursor: pointer;

		&:hover {
			transform: translateY(-3px);
		}

		&:active {
			transform: translateY(-1px);
		}
	}
`

export const HeaderBadge = styled.div`
	display: inline-block;
	padding: 4px 12px;
	font-family: 'Source Code Pro', monospace;
	font-size: 11px;
	font-weight: 700;
	background: #fbbf24;
	color: #000;
	border: 2px solid #000;
	box-shadow: 2px 2px 0 #000;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 12px;
`

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	margin-bottom: 12px;
	flex-wrap: wrap;
`

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`

export const TitleIcon = styled.span`
	font-size: 44px;
	filter: drop-shadow(3px 3px 0 #000);
	animation: flicker 3s ease-in-out infinite;

	@keyframes flicker {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
	}
`

export const Title = styled.h1`
	font-family: 'Source Code Pro', monospace;
	font-size: 40px;
	font-weight: 900;
	color: #fff;
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-shadow:
		4px 4px 0 #000,
		-2px -2px 0 rgba(0, 0, 0, 0.2);
	line-height: 1.1;

	@media (max-width: 768px) {
		font-size: 28px;
		letter-spacing: 1px;
	}
`

export const HelpButton = styled.button`
	padding: 10px 20px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 700;
	background: #fff;
	color: #000;
	border: 3px solid #000;
	box-shadow: 3px 3px 0 #000;
	cursor: pointer;
	transition: all 0.15s ease;
	display: flex;
	align-items: center;
	gap: 6px;
	text-transform: uppercase;
	letter-spacing: 0.5px;

	&:hover {
		transform: translate(-2px, -2px);
		box-shadow: 5px 5px 0 #000;
		background: #f0f0f0;
	}

	&:active {
		transform: translate(0, 0);
		box-shadow: 2px 2px 0 #000;
	}
`

export const SubtitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 700px;
	margin: 0 auto;
`

export const Subtitle = styled.p`
	font-family: 'Source Code Pro', monospace;
	font-size: 16px;
	font-weight: 700;
	color: #fff;
	margin: 0;
	text-shadow: 2px 2px 0 #000;
	line-height: 1.3;
`

export const Tagline = styled.p`
	font-family: 'Source Code Pro', monospace;
	font-size: 13px;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.85);
	margin: 0;
	text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
	line-height: 1.4;
	font-style: italic;
`

export const Content = styled.div`
	max-width: 900px;
	margin: 0 auto;
`

export const TabContainer = styled.div`
	display: flex;
	gap: 12px;
	margin-bottom: 24px;
`

export const Tab = styled.button<{ $active: boolean }>`
	flex: 1;
	padding: 16px;
	font-family: 'Source Code Pro', monospace;
	font-size: 16px;
	font-weight: 700;
	background: ${(props) => (props.$active ? '#fff' : '#e0e0e0')};
	color: #000;
	border: 4px solid #000;
	box-shadow: ${(props) =>
		props.$active ? '6px 6px 0 #000' : '4px 4px 0 #000'};
	cursor: pointer;
	transition: all 0.2s ease;
	text-transform: uppercase;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 6px 6px 0 #000;
	}

	&:active {
		transform: translateY(0);
		box-shadow: 3px 3px 0 #000;
	}
`

export const TaskSection = styled.div`
	margin-bottom: 32px;
`

export const SectionTitle = styled.h2`
	font-family: 'Source Code Pro', monospace;
	font-size: 20px;
	font-weight: 700;
	color: #fff;
	margin: 0 0 16px 0;
	text-shadow: 2px 2px 0 #000;
`

export const EmptyState = styled.div`
	background: #fff;
	border: 4px solid #000;
	box-shadow: 6px 6px 0 #000;
	padding: 60px 40px;
	text-align: center;
	font-family: 'Source Code Pro', monospace;
`

export const EmptyStateIcon = styled.div`
	font-size: 64px;
	margin-bottom: 16px;
`

export const EmptyStateText = styled.p`
	font-size: 18px;
	color: #666;
	margin: 0;
`

export const Stats = styled.div`
	background: #fff;
	border: 4px solid #000;
	box-shadow: 6px 6px 0 #000;
	padding: 20px;
	margin-bottom: 24px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 20px;
`

export const StatItem = styled.div`
	text-align: center;
`

export const StatValue = styled.div`
	font-family: 'Source Code Pro', monospace;
	font-size: 36px;
	font-weight: 900;
	color: #000;
	margin-bottom: 4px;
`

export const StatLabel = styled.div`
	font-family: 'Source Code Pro', monospace;
	font-size: 12px;
	font-weight: 700;
	color: #666;
	text-transform: uppercase;
`

export const FilterContainer = styled.div`
	background: #fff;
	border: 4px solid #000;
	box-shadow: 6px 6px 0 #000;
	padding: 20px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
`

export const FilterLabel = styled.div`
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 700;
	color: #000;
	text-transform: uppercase;
`

export const CheckboxGroup = styled.div`
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
`

export const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 8px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 600;
	color: #000;
	cursor: pointer;

	span {
		user-select: none;
	}
`

export const ClearButton = styled.button`
	width: 100%;
	padding: 12px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 700;
	background: #ff4444;
	color: white;
	border: 3px solid #000;
	box-shadow: 4px 4px 0 #000;
	cursor: pointer;
	transition: all 0.2s ease;
	text-transform: uppercase;
	margin-top: 16px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 6px 6px 0 #000;
	}

	&:active {
		transform: translateY(0);
		box-shadow: 2px 2px 0 #000;
	}
`
export const HelpContent = styled.div`
	font-family: 'Source Code Pro', monospace;
	max-height: 70vh;
	overflow-y: auto;
`

export const HelpSection = styled.div`
	margin-bottom: 24px;

	&:last-child {
		margin-bottom: 0;
	}
`

export const HelpTitle = styled.h3`
	font-size: 18px;
	font-weight: 900;
	color: #000;
	margin: 0 0 12px 0;
	text-transform: uppercase;
`

export const HelpText = styled.p`
	font-size: 14px;
	line-height: 1.6;
	color: #333;
	margin: 0 0 12px 0;

	strong {
		font-weight: 700;
		color: #000;
	}
`

export const HelpList = styled.ul`
	font-size: 14px;
	line-height: 1.8;
	color: #333;
	margin: 0;
	padding-left: 24px;

	li {
		margin-bottom: 8px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	strong {
		font-weight: 700;
		color: #000;
	}
`
