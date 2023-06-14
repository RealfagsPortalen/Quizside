import * as React from "react";

export type IconType = keyof typeof iconlib;

export const iconlib = {
  arrowRight: (
    <path d="M16.528 6.46731C16.2338 6.17573 15.7589 6.17784 15.4673 6.47204C15.1757 6.76624 15.1778 7.24111 15.472 7.53269L17.235 9.28C17.9505 9.98914 18.4413 10.4772 18.7734 10.8907C18.8813 11.0251 18.9655 11.1434 19.0309 11.25L4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L19.0309 12.75C18.9655 12.8566 18.8813 12.9749 18.7734 13.1093C18.4413 13.5228 17.9505 14.0109 17.235 14.72L15.472 16.4673C15.1778 16.7589 15.1757 17.2338 15.4673 17.528C15.7589 17.8222 16.2338 17.8243 16.528 17.5327L18.3227 15.7539C18.9987 15.084 19.5511 14.5364 19.9429 14.0485C20.3504 13.5412 20.6453 13.0263 20.7241 12.4082C20.7414 12.2726 20.75 12.1363 20.75 12C20.75 11.8637 20.7414 11.7274 20.7241 11.5918C20.6453 10.9737 20.3504 10.4588 19.9429 9.95146C19.5511 9.46358 18.9987 8.91604 18.3227 8.24609L16.528 6.46731Z" />
  ),
  chevronRight: (
    <path d="M10.528 6.46731C10.2338 6.17573 9.75889 6.17784 9.46731 6.47204C9.17573 6.76624 9.17784 7.24111 9.47204 7.53269L11.235 9.28C11.9505 9.98914 12.4413 10.4772 12.7734 10.8907C13.096 11.2924 13.2067 11.5504 13.2361 11.7815C13.2546 11.9266 13.2546 12.0734 13.2361 12.2185C13.2067 12.4496 13.096 12.7076 12.7734 13.1093C12.4413 13.5228 11.9505 14.0109 11.235 14.72L9.47204 16.4673C9.17784 16.7589 9.17573 17.2338 9.46731 17.528C9.75889 17.8222 10.2338 17.8243 10.528 17.5327L12.3227 15.7539C12.9987 15.084 13.5511 14.5364 13.9429 14.0485C14.3504 13.5412 14.6453 13.0263 14.7241 12.4082C14.7586 12.1371 14.7586 11.8629 14.7241 11.5918C14.6453 10.9737 14.3504 10.4588 13.9429 9.95146C13.5511 9.46359 12.9987 8.91604 12.3227 8.24609L10.528 6.46731Z" />
  ),
  check: (
    <path d="M20.576 7.48a.75.75 0 1 0-1.152-.96l-5.39 6.469c-1.084 1.3-1.845 2.21-2.506 2.807-.645.583-1.09.768-1.528.768-.437 0-.883-.185-1.528-.768-.66-.597-1.422-1.508-2.505-2.807l-1.39-1.67a.75.75 0 1 0-1.153.961l1.43 1.715c1.034 1.243 1.863 2.238 2.613 2.914.774.7 1.565 1.155 2.533 1.155s1.76-.456 2.533-1.155c.75-.676 1.579-1.671 2.614-2.914l5.43-6.515Z" />
  ),
  close: (
    <path d="M19.5304 5.53033C19.8232 5.23744 19.8232 4.76256 19.5304 4.46967C19.2375 4.17678 18.7626 4.17678 18.4697 4.46967L12 10.9394L5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76257 4.17678 5.23744 4.46967 5.53033L10.9394 12L4.4697 18.4697C4.1768 18.7626 4.1768 19.2374 4.4697 19.5303C4.76259 19.8232 5.23746 19.8232 5.53036 19.5303L12 13.0607L18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L13.0607 12L19.5304 5.53033Z" />
  ),
  question: (
    <>
      <path d="M9.42211 6.86735C10.1114 4.79952 12.8394 4.35682 14.1472 6.10057C14.9133 7.12201 14.8599 8.54029 14.0191 9.50118L12.7823 10.9147C11.6598 12.1976 11.041 13.8443 11.041 15.5489V15.9749C11.041 16.5323 11.4928 16.9841 12.0502 16.9841C12.6075 16.9841 13.0593 16.5323 13.0593 15.9749V15.5489C13.0593 14.3332 13.5006 13.1587 14.3012 12.2438L15.538 10.8302C17.0068 9.15162 17.1002 6.67399 15.7619 4.88959C13.4772 1.84336 8.7115 2.61674 7.50738 6.22911L7.05621 7.58261C6.87996 8.11134 7.16572 8.68285 7.69445 8.85909C8.22319 9.03534 8.79469 8.74959 8.97094 8.22085L9.42211 6.86735Z" />
      <path d="M13.3957 20.0115C13.3957 20.7547 12.7933 21.3571 12.0502 21.3571C11.3071 21.3571 10.7046 20.7547 10.7046 20.0115C10.7046 19.2684 11.3071 18.666 12.0502 18.666C12.7933 18.666 13.3957 19.2684 13.3957 20.0115Z" />
    </>
  ),
  repeat: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.01269 1.00335C4.01454 0.589137 3.68025 0.251856 3.26604 0.250008C2.85183 0.24816 2.51455 0.582445 2.5127 0.996654L2.50365 3.02568C2.50026 3.78057 2.49743 4.41015 2.55271 4.91635C2.61069 5.44728 2.74029 5.93661 3.06926 6.36169C3.14048 6.45372 3.21743 6.54101 3.29962 6.62306C3.38076 6.70408 3.467 6.77998 3.55786 6.85029C3.98294 7.17926 4.47227 7.30886 5.0032 7.36684C5.50939 7.42211 6.13897 7.41929 6.89383 7.4159L8.9229 7.40685C9.3371 7.405 9.67139 7.06772 9.66954 6.65351C9.66769 6.2393 9.33041 5.90501 8.9162 5.90686L6.93049 5.91572C6.12107 5.91933 5.57738 5.92062 5.16604 5.8757C5.13511 5.87232 5.10551 5.86873 5.07717 5.86494C6.77277 3.9531 9.2455 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 12.4142 21.5858 12.75 22 12.75C22.4142 12.75 22.75 12.4142 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C8.84724 1.25 6.01093 2.60807 4.04555 4.76878L4.04385 4.75351C3.99893 4.34217 4.00022 3.79848 4.00383 2.98906L4.01269 1.00335Z"
      />
      <path d="M2.75 12C2.75 11.5858 2.41421 11.25 2 11.25C1.58579 11.25 1.25 11.5858 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C15.1177 22.75 17.926 21.4219 19.8886 19.303C19.9203 19.6969 19.919 20.2078 19.9157 20.9305L19.9069 22.9162C19.905 23.3305 20.2393 23.6677 20.6535 23.6696C21.0677 23.6714 21.405 23.3371 21.4069 22.9229L21.4159 20.8939C21.4193 20.139 21.4221 19.5094 21.3668 19.0032C21.3089 18.4723 21.1793 17.983 20.8503 17.5579C20.7885 17.4781 20.7225 17.4019 20.6524 17.3295C20.5619 17.2361 20.4648 17.1491 20.3617 17.0693C19.9366 16.7403 19.4473 16.6107 18.9164 16.5528C18.4102 16.4975 17.7806 16.5003 17.0257 16.5037L14.9967 16.5127C14.5824 16.5146 14.2482 16.8519 14.25 17.2661C14.2519 17.6803 14.5891 18.0146 15.0034 18.0127L16.9891 18.0039C17.7985 18.0003 18.3422 17.999 18.7535 18.0439C18.8365 18.053 18.91 18.0636 18.9752 18.0755C17.2784 20.0219 14.783 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" />
    </>
  ),
};