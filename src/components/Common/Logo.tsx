import logo from 'assets/images/logoNCC01.png'

interface LogoProps {
  src?: string,
}

export const Logo = ({ src }: LogoProps) => <img className="content-img" src={src || logo} alt="" />
