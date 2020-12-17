import Typography from "typography"
import kubrick from "typography-theme-wordpress-kubrick"
kubrick.baseFontSize = "15px"

const typography = new Typography(kubrick)

export const { rhythm, scale, options } = typography
export default typography
