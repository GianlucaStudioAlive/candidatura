/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

import Avatar from "@mui/material/Avatar";

const About = () => {
  return (
    <div>
      <h1 className="about text-end pt-md-5 pt-3" data-aos="fade-up">
        ABOUT ME
      </h1>
      <div className="row d-flex align-items-center ">
        <div className="col-md-4 col-4">
            <p  className="text-center" >hoverMe &darr;</p>
          <Image
            src={"/glf.jpg"}
            width={1000}
            height={1000}
            alt="Giovanni Luca Felli"
            className="imgAbout"
          />
        </div>
        <div className="col-md-8 mt-4 mt-md-0 text-end">
          <p className="aboutText">
            Sono uno sviluppatore web appassionato e qualificato, il cui
            percorso nel mondo digitale è stato guidato da una profonda
            fascinazione per l'arte della codifica e del design. Con solide basi
            in HTML, CSS e JavaScript, ho affinato le mie competenze attraverso
            l'esperienza pratica e l'apprendimento continuo. La mia padronanza
            di React e Next.js mi ha permesso di sviluppare applicazioni web
            dinamiche, efficienti e user-friendly, che non solo soddisfano, ma
            spesso superano le aspettative dei clienti. <br/> <br/>
            Nel panorama in costante
            evoluzione dello sviluppo mobile, ho abbracciato le sfide e le
            opportunità offerte da React Native. Questo mi ha permesso di
            espandere il mio set di competenze e adattare le mie conoscenze di
            sviluppo web per creare applicazioni mobili senza interruzioni e
            cross-platform. La capacità di costruire sia applicazioni web che
            mobili mi posiziona in modo unico nel settore tecnologico, offrendo
            una soluzione completa alle esigenze di sviluppo digitale.<br/> <br/>
            Ciò che mi distingue non sono solo le mie competenze tecniche, ma anche il
            mio spirito collaborativo e la mentalità orientata alla risoluzione
            dei problemi. Mi realizzo in ambienti dove l'innovazione è
            incoraggiata e dove posso contribuire al successo del team
            attraverso una comunicazione chiara, adattabilità e un impegno per
            la qualità. Il mio obiettivo è sfruttare la mia conoscenza delle
            tecnologie all'avanguardia per creare esperienze digitali impattanti
            che risuonino con gli utenti e guidino il successo aziendale. <br/> <br/>
            Mentre cerco nuove opportunità per crescere e avere un impatto
            significativo nel campo dello sviluppo web e mobile, sono entusiasta
            di portare la mia combinazione di competenza tecnica, pensiero
            creativo e approccio collaborativo al Vostro team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
