import { useCallback } from 'react';
import theme from '../../styles/theme';
import { css } from '@emotion/react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  disabled?: boolean;
  size?: 'xm' | 'sm' | 'm' | 'l' | 'xl';
  variant?: 'primaryBlack' | 'primaryPink' | 'gray' | 'none';
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  width?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
}

const conditionalStyle = (condition: string | undefined, style: string) =>
  condition ? style : '';

const Button = ({
  onClick,
  children,
  disabled = false,
  variant = 'none',
  size = 'm',
  borderRadius,
  backgroundColor,
  color,
  borderColor,
  width,
  paddingHorizontal,
  paddingVertical,
  ...props
}: ButtonProps) => {
  const getButtonBasicStyle = useCallback(() => {
    switch (variant) {
      case 'primaryBlack':
        return css`
          background-color: ${theme.colors.primary.vingleBlack};
          color: ${theme.colors.white};
        `;
      case 'primaryPink':
        return css`
          background-color: ${theme.colors.status.like};
          color: ${theme.colors.white};
        `;
      case 'gray':
        return css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.gray[600]};
          border: 1px solid ${theme.colors.gray[600]};
        `;
      case 'none':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary.vingleBlack};
          border: none;
        `;
      /** never reach here */
      default:
        return css`
          background-color: transparent;
          color: ${theme.colors.primary.vingleBlack};
          border: none;
        `;
    }
  }, [variant]);

  const getButtonSizeStyle = useCallback(() => {
    switch (size) {
      case 'xm':
        return css`
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        `;
      case 'sm':
        return css`
          padding: 0.5rem 1rem;
          border-radius: 4px;
        `;
      case 'm':
        return css`
          padding: 0.75rem 2rem;
          border-radius: 6px;
        `;
      case 'l':
        return css`
          padding: 1rem 3rem;
          border-radius: 8px;
        `;
      case 'xl':
        return css`
          padding: 1.25rem 4rem;
          border-radius: 10px;
        `;
      /** never reach here */
      default:
        return css`
          padding: 1rem 2rem;
          border-radius: 8px;
        `;
    }
  }, [size]);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      css={css`
        border: none;
        appearance: none;
        cursor: pointer;
        ${theme.font.subtitle2};
        &:disabled {
          border: 1px solid ${theme.colors.gray[400]};
          background-color: ${theme.colors.gray[400]};
          color: ${theme.colors.white};
        }
        ${getButtonBasicStyle()}
        ${getButtonSizeStyle()}
        ${conditionalStyle(borderRadius, `border-radius: ${borderRadius};`)};
        ${conditionalStyle(
          backgroundColor,
          `background-color: ${backgroundColor};`
        )};
        ${conditionalStyle(color, `color: ${color};`)};
        ${conditionalStyle(borderColor, `border: 1px solid ${borderColor};`)};
        ${conditionalStyle(width, `width: ${width};`)};
        ${conditionalStyle(
          paddingVertical,
          `padding-top: ${paddingVertical}; padding-bottom: ${paddingVertical};`
        )};
        ${conditionalStyle(
          paddingHorizontal,
          `padding-left: ${paddingHorizontal}; padding-right: ${paddingHorizontal};`
        )};
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
