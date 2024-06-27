import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
      voluptatibus veritatis perferendis nesciunt, vel possimus id unde ipsum
      quas suscipit dolorum ab consectetur aliquid totam vitae repellendus
      expedita iusto. Eius.
    </Descricao>
  </Card>
)

export default Product
