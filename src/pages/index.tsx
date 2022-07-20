import * as S from '@/styles/pages/Home'
import Head from 'next/head'

const Home = () => {
  return (
    <S.Container>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <h1>Simple NextJS Boilerplate</h1>
      <p>NextJS - Styled Components - Prettier - Eslint</p>
      <div className="social-row">  
        <a href="https://www.instagram.com/pedro.phd/" target="_blank">Instagram</a>
        <a href="https://twitter.com/pedrophd_" target="_blank">Twitter</a>
      </div>
    </S.Container>
  )
}
export default Home