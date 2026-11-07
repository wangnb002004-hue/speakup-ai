import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'SpeakUp AI · Your voice belongs here',description:'A low-pressure English practice space that helps you take the next step into real university conversations.'};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>;}
