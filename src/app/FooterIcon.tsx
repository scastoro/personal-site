import * as React from 'react';
import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={764} height={868} fill='none' {...props}>
    <path
      fill='url(#a)'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M594.5 0 0 868h1189L594.5 0Zm501.06 858.506H93.435L594.5 755.628l501.06 102.878ZM73.278 852.955 594.5 745.938l521.22 107.017L594.5 674.593 73.278 852.955ZM594.5 593.707 76.853 841.701 594.5 664.562l517.65 177.139L594.5 593.707ZM81.376 829.015 594.5 583.188l513.12 245.827L594.5 512.951 81.376 829.015ZM594.5 432.305 86.698 814.598 594.5 501.812l507.8 312.786-507.8-382.293ZM92.682 798.225 594.5 420.438l501.82 377.787L594.5 351.749 92.682 798.225ZM594.5 271.267 99.209 779.732 594.5 339.062l495.29 440.67L594.5 271.267ZM106.176 759 594.5 257.688l488.32 501.311L594.5 190.846 106.176 759ZM594.5 97.083 98.364 753.555 594.5 176.312l496.14 577.244L594.5 97.083ZM122.426 706.009 594.5 81.375l472.07 624.634L594.5 16.758 122.426 706.009Z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient id='a' x1={594.5} x2={594.5} y1={0} y2={868} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F8F8F8' />
        <stop offset={1} stopColor='#F8F8F8' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
