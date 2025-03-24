import Head from "next/head";
import Header from "../components/Header";
import Article from "../components/Article";
import Sidebar from "../components/MathChallenge";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Divider />
      <main className={styles.main}>
        <div className={styles.content}>

          <Article
            title=" "
            text=" " 
            imageSrc="/images/imagemcrianca.png"/>
          
          <Divider />
          
          <Article 
            author="Prof. Cleiton"
            date="24 Fev 25"
            time="16:40"
            title="Para ser muito bom amanhã é preciso começar a praticar hoje"
            text="São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :(" />

          <Article
            title="  "
            text="Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas operações básicas;" />
          
          <Divider />

          <Article 
            author="Prof. Cleiton"
            date="24 Fev 25"
            time="16:40"
            title="Matemática: O Alicerce para o Sucesso Escolar!"
            text="Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico e aprendem as quatro operações essenciais: adição, subtração, multiplicação e divisão. 
Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada! 
Aqui, você encontra exercícios divertidos e educativos para ajudar seu filho a dominar as operações básicas e desenvolver confiança na matemática. 💡" />
          
          <Article
            title="  "
            text="Vamos juntos fortalecer essa base e transformar desafios em conquistas!
#MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásicas #AprendizadoDivertido #FundamentosEscolares #MatemáticaFácil #ConfiançaNosNúmeros"/>
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}