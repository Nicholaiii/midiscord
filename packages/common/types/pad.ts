export type colors =
| 'red'
| 'pink'
| 'purple'
| 'deep-purple'
| 'indigo'
| 'blue'
| 'light-blue'
| 'cyan'
| 'teal'
| 'green'
| 'light-green'
| 'lime'
| 'yellow'
| 'amber'
| 'orange'
| 'deep-orange'
| 'brown'
| 'blue-grey'
| 'grey'
| 'shades'

export interface Pad {
  name: string
  file: string
  color: colors
}
