import Html from './Html.astro';
import AstroIcon from './AstroIcon.astro';
import React from './React.astro';
import Javascript from './Javascript.astro';
import Typescript from './Typescript.astro';
import Css from './Css.astro';
import Laravel from './Laravel.astro';
import Kotlin from './Kotlin.astro';
import Compose from './Compose.astro';
import Supabase from './Supabase.astro';
import Firebase from './Firebase.astro';
import Postgre from './Postgre.astro';
import Git from './Git.astro';
import Figma from './Figma.astro';
import Tailwind from './Tailwind.astro';
import Bootstrap from './Bootstrap.astro';

export const icons = {
  Html, AstroIcon, React, Javascript, Typescript, 
  Css, Laravel, Kotlin, Compose, Supabase, Firebase, 
  Postgre, Git, Tailwind, Bootstrap, Figma
}

export type IconName = keyof typeof icons