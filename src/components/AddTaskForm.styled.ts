import styled from 'styled-components'

export const FormContainer = styled.form`
	background: #fff;
	border: 4px solid #000;
	box-shadow: 8px 8px 0 #000;
	padding: 24px;
	margin-bottom: 32px;
`

export const FormTitle = styled.h2`
	margin: 0 0 20px 0;
	font-family: 'Source Code Pro', monospace;
	font-size: 24px;
	font-weight: 700;
	color: #000;
`

export const FormGroup = styled.div`
	margin-bottom: 20px;
`

export const Label = styled.label`
	display: block;
	margin-bottom: 8px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 700;
	color: #000;
`

export const Textarea = styled.textarea`
	width: 100%;
	padding: 12px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	border: 3px solid #000;
	background: #fff;
	resize: vertical;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #000;
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
	}

	&:disabled {
		background: #f5f5f5;
		color: #999;
		cursor: not-allowed;
	}

	&::placeholder {
		color: #999;
	}
`

export const WarningBox = styled.div`
	background: #ff4444;
	color: white;
	padding: 12px 16px;
	border: 3px solid #000;
	margin-bottom: 20px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 700;
`
