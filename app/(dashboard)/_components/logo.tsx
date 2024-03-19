import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={30}
      width={30}
      alt="logo"
      src="/logo.svg"
    />
  )
}