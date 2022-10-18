import React from 'react';
import Article from '../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';
import ai from '../assets/ai.png';
import './header.css';
import Feature from '../components/feature/Feature';

const Home = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Hacker Vaillant, Rien d&apos; impossible
        </h1>
        <p>
          « le Hacking est la compétence la plus importante du 21ème siècle »
          <br />
          <i>Occupy The Web</i>
        </p>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>

    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature
            title="Hacking Processus"
            text="Il existe des milliers d’excellents outils pour le piratage et la cybersécurité. Rien que dans Kali Linux, il y a des centaines d’outils de piratage. Il y a tellement d’outils de piratage que cela peut être accablant pour le novice hacker. C’est mon conseil professionnel de commencer par ces outils essentiels; maîtrisez-les, puis passez à d'autres outils puissants à votre disposition. De cette façon, vous aurez une base solide pour devenir un maître hacker"
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            Connaître les éléments suivants pour exploiter avec succès un
            système
          </h1>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature
            title="Fingerprinting"
            text="Le Fingerpinting est le processus d’énumération des attributs suivants d’une cible : Users, Network Topologie, Système d'Exploitations, Services. Généralement, notre discipline catégorise ceux-ci comme actifs ou passifs."
          />
          <Feature
            title="Passive Reconnaissance"
            text="La reconnaissance passive est un receuil d'informations sur la cible sans jamais interagir directement avec elle. En d’autres termes, vous pouvez collecter des informations sur la cible à partir de sources tierces, telles que DNS, Shodan, Netcraft, Google, les sites de réseaux sociaux et autres."
          />
          <Feature
            title="Active Reconnaissance"
            text="La reconnaissance active, comme vous l’avez probablement déjà deviné, est une information recueillie tout en interagissant avec la cible. "
          />
          <Feature
            title="Password Cracking"
            text="Le craquage de mot de passe est une spécialité qui, lorsqu’elle réussit, peut apporter des récompenses importantes à l'attaquant. Il peux se passer de l'étape d'exploitation par exemple."
          />
          <Feature
            title="Exploitation"
            text="Si nous avons échoué avec le craquage de mot de passe, l’étape suivante consiste à tenter l’exploitation. Basé sur le informations recueillies dans la phase de reconnaissance, nous pouvons développer une stratégie d’exploitation."
          />
          <Feature
            title="Post Exploitation"
            text="La post-exploitation est ce qui se passe après le piratage, ou l’exploitation. Le piratage amène l’attaquant à l’intérieur du système, mais l’accès n’est généralement que le début, il faut obtenir un accès Root."
          />
          <Feature
            title="Covering Tracks"
            text="Une fois l’exploitation terminée et que les ravages post-exploitation ont été faits (prise ou lecture documents, allumer le microphone, pivoter vers d’autres systèmes, etc.), la tâche finale pour le pirate est de couvrir ses traces."
          />
        </div>
      </div>
    </div>

    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          // date="Sep 26, 2021"
          text="Linux Basics, débuter avec Linux"
          link="linux"
        />
      </div>

      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 26, 2021"
          text="Networks Basics, fondamentaux Réseaux"
          link="network"
        />
        <Article
          imgUrl={blog03}
          date="Sep 26, 2021"
          text="Wifi Hacking"
          link="wifihack"
        />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="SCADA Hacking" />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="Web Hacking,failles & exploits"
          link="webhack"
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="PassiveRecon, Dnsenum, Shodan..."
          link="recon"
        />
      </div>
    </div>
  </div>
);

export default Home;
