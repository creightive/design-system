export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      type="button"
      {...other}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
