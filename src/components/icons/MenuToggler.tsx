import * as React from 'react'

function SvgMenuToggler(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25.186 16.562"
      {...props}
    >
      <g data-name="Group 3" fill="#fff">
        <path d="M.781 1.562h23.436a.781.781 0 100-1.562H.781a.781.781 0 000 1.562z" />
        <path
          data-name="Path"
          d="M24.217 8H.781a.781.781 0 000 1.562h23.436a.781.781 0 100-1.562zM24.4 15H8.781a.781.781 0 000 1.562H24.4a.781.781 0 000-1.562z"
        />
      </g>
    </svg>
  )
}

export default SvgMenuToggler
