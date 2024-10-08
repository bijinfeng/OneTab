import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSetting = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd">
      <path d="M14 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
      <path d="M14 19c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5m10.974-5.69a1.45 1.45 0 0 0-1.102-1.284l-.848-.212a1.77 1.77 0 0 1-1.212-1.065 1.76 1.76 0 0 1 .115-1.584l.444-.74a1.46 1.46 0 0 0-.153-1.72 11 11 0 0 0-.923-.923 1.46 1.46 0 0 0-1.72-.153l-.74.444a1.77 1.77 0 0 1-1.6.108 1.77 1.77 0 0 1-1.049-1.205l-.212-.848a1.45 1.45 0 0 0-1.284-1.102 9 9 0 0 0-1.38 0 1.45 1.45 0 0 0-1.284 1.102l-.212.848a1.77 1.77 0 0 1-1.065 1.212 1.77 1.77 0 0 1-1.584-.115l-.74-.444a1.46 1.46 0 0 0-1.72.153q-.49.434-.923.923a1.46 1.46 0 0 0-.153 1.72l.444.74a1.76 1.76 0 0 1 .108 1.6 1.77 1.77 0 0 1-1.205 1.049l-.848.212a1.45 1.45 0 0 0-1.102 1.284 9 9 0 0 0 0 1.38 1.45 1.45 0 0 0 1.102 1.284l.848.212a1.77 1.77 0 0 1 1.212 1.065 1.76 1.76 0 0 1-.115 1.584l-.444.74a1.46 1.46 0 0 0 .153 1.72q.434.488.923.923c.475.422 1.175.48 1.72.153l.74-.444a1.76 1.76 0 0 1 1.6-.108c.522.213.912.658 1.049 1.205l.212.848c.15.603.665 1.057 1.284 1.102a9 9 0 0 0 1.38 0 1.45 1.45 0 0 0 1.284-1.102l.212-.848a1.77 1.77 0 0 1 1.065-1.212 1.76 1.76 0 0 1 1.584.115l.74.444a1.46 1.46 0 0 0 1.72-.153q.49-.434.923-.923c.422-.476.48-1.175.153-1.72l-.444-.74a1.76 1.76 0 0 1-.108-1.6 1.77 1.77 0 0 1 1.205-1.049l.848-.212a1.45 1.45 0 0 0 1.102-1.284 9 9 0 0 0 0-1.38" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSetting);
export default ForwardRef;
