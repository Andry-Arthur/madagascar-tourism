import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

export function IconSun(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M21 14.5A7.5 7.5 0 0 1 9.5 3 8.8 8.8 0 1 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M12 21a9 9 0 1 0-7.7-4.3L3 21l4.5-1.2A8.9 8.9 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.8c.3-.7.6-.7 1-.7h.7c.2 0 .4 0 .5.4l.8 2c.1.3 0 .5-.2.7l-.4.5c.7 1.3 1.8 2.3 3.1 3l.5-.4c.2-.2.4-.3.7-.2l2 .8c.3.1.4.3.4.5v.7c0 .4 0 .7-.7 1-1 .8-3.5.4-6.1-2.2S8.4 9.8 9.2 8.8Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
    </svg>
  );
}

export function FlagMG(props: IconProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      {props.title ? <title>{props.title}</title> : null}
      <rect x="0" y="0" width="24" height="16" rx="2" fill="#fff" />
      <rect x="8" y="0" width="16" height="8" fill="#D61F2C" />
      <rect x="8" y="8" width="16" height="8" fill="#007E3A" />
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="14.5"
        rx="1.6"
        stroke="currentColor"
        opacity="0.18"
      />
    </svg>
  );
}

