import Image from "next/image";
import {Box, Typography} from "@mui/material";
import {HomeBlueBanner, HomePkgBox, HomePkgsBox, HomePkgsInBox,} from "../../components/mui/HomePkgs";
import {
    AboutContainer,
    AboutImgContainer,
    AboutItem,
    AboutItemDetail,
    AboutItemHeading,
    AboutItemSection,
} from "../../components/mui/AboutPkgs";
import {ServicesItemHeading} from "../../components/mui/ServicesPkgs";

export default function Autos() {
  return (
    <>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          Autos
        </Typography>
      </HomeBlueBanner>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AboutContainer>
          <AboutItem>
            <AboutItemHeading>
              Auto Exterieurreiniging - Fast Clean Service
            </AboutItemHeading>
            <AboutItemSection>
              <ServicesItemHeading>AUTO EXTERIEURREINIGING</ServicesItemHeading>
              <AboutItemDetail>
                Op zoek naar een professionele auto exterierureiniging? Fast
                Clean Service reinigt uw vervoermiddel met stoom en vakmanschap.
                Het handmatig werken met onze stoomtechnieken voorkomt krassen
                in uw lak en zorgt ervoor dat uw voertuig er na de
                stoombehandeling weer uit ziet als stralend nieuw!
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              <ServicesItemHeading>OPTIES</ServicesItemHeading>
              <AboutItemDetail>
                Bij Fast Clean Service bieden wij een uitgebreide selectie aan
                opties voor uw auto exterierureiniging:
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              <ServicesItemHeading>AFSPRAAK MAKEN</ServicesItemHeading>
              <AboutItemDetail>
                Het inplannen van een afspraak is gemakkelijk en snel via onze
                agenda op de website. Hierdoor bespaart u tijd, energie en
                brandstof naar de wasstraat. Maak nu een afspraak voor uw auto
                exterierureiniging en ervaar het verschil van Fast Clean
                Service.
              </AboutItemDetail>
            </AboutItemSection>
            {/* <Box
                sx={{
                  alignSelf: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <HomeBlueBtn sx={{ mb: 0 }}>Look at the possiblities</HomeBlueBtn>
                <HomeBlueBtn>Contact Us</HomeBlueBtn>
              </Box> */}
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image src="/voor1.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutImgContainer>
              <Image src="/voor2.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
          </AboutItem>
        </AboutContainer>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10rem",
        }}
      >
        <AboutContainer sx={{ flexDirection: "row-reverse" }}>
          <AboutItem>
            {/* <AboutItemHeading>
                Auto Exterieurreiniging - Fast Clean Service
              </AboutItemHeading> */}
            <AboutItemSection>
              <ServicesItemHeading>Verbluffend resultaat</ServicesItemHeading>
              <AboutItemDetail>
                Stoomreiniging voor uw auto Fast Clean Service is dé specialist
                in stoomreiniging van auto’s. Wij maken gebruik van de nieuwste
                technieken en zorgen ervoor dat uw auto er weer als nieuw
                uitziet.
              </AboutItemDetail>
              <AboutItemDetail>
                Efficiënt en duurzaam Met stoomreiniging wordt uw auto op een
                efficiënte en duurzame manier gereinigd. Per schoonmaakbeurt
                verbruiken we slechts 3 liter drinkwater. Bovendien haalt onze
                stoomreiniger een temperatuur tot wel 180°C, waardoor bacteriën
                en hardnekkig vuil geen kans maken. Zelfs de moeilijk bereikbare
                plekken worden schoongemaakt. Zoals uw velgen en bumper.
                Bacteriën worden gedood en nare luchtjes verdwijnen als sneeuw
                voor de zon.
              </AboutItemDetail>
              <AboutItemDetail>
                Verbluffend resultaat Stoomreiniging is niet alleen efficiënt en
                duurzaam, maar ook nog eens milieubewust. En het resultaat mag
                er wezen. Uw auto is weer als nieuw.
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              <ServicesItemHeading>Extra glans met waxen</ServicesItemHeading>
              <AboutItemDetail>
                Om de glans van uw auto te behouden, bieden wij een pakket met
                extra waxlaag aan. Zo geniet u nog langer van uw schone bolide.
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              <ServicesItemHeading>
                Frisse geur met geurbehandeling
              </ServicesItemHeading>
              <AboutItemDetail>
                Na de stoomreiniging en het waxen, kunnen we uw auto voorzien
                van een speciale geurbehandeling. Zo ruikt uw auto weer heerlijk
                fris
              </AboutItemDetail>
              <AboutItemDetail>
                Laat uw auto weer stralen met de stoomreiniging van Fast Clean
                Service.
              </AboutItemDetail>
            </AboutItemSection>
            {/* <Box
                sx={{
                  alignSelf: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <HomeBlueBtn sx={{ mb: 0 }}>Look at the possiblities</HomeBlueBtn>
                <HomeBlueBtn>Contact Us</HomeBlueBtn>
              </Box> */}
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image src="/voor3.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            {/* <AboutImgContainer>
                <Image src="/voor2.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer> */}
          </AboutItem>
        </AboutContainer>
      </Box>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          Lak Polijsten & Verzegelen - Fast Clean Service
        </Typography>
      </HomeBlueBanner>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10rem",
        }}
      >
        <AboutContainer>
          <AboutItem>
            <AboutItemSection>
              {/* <ServicesItemHeading>Verbluffend resultaat</ServicesItemHeading> */}
              <AboutItemDetail>
                Heeft uw auto last van krassen, vliegroest of een doffe kleur?
                Wilt u de lak van uw voertuig een nieuwe boost geven? Bij Fast
                Clean Service bent u aan het juiste adres voor professioneel lak
                polijsten en lakverzegeling voor uw voertuig.
              </AboutItemDetail>
              <AboutItemDetail>
                Met ons polijstpakket wordt het exterieur van uw voertuig
                vakkundig tot in de details gepolijst. Onze vakmensen polijsten
                uw auto en zetten deze in de pro-wax. Ook de velgen worden
                gereinigd en de banden behandeld. Met de extra wax bescherming
                is uw auto extra beschermd tegen vuil.
              </AboutItemDetail>
              <AboutItemDetail>
                Daarnaast bieden wij ook een lakverzegeling aan, waardoor uw lak
                volledig beschermd is tegen dagelijkse invloeden van buitenaf.
                Hierdoor blijft de glans langer behouden en heeft u 3 jaar
                glansgarantie bij de lakverzegeling.
              </AboutItemDetail>
              <AboutItemDetail>
                Geef uw auto weer een nieuwe uitstraling en maak snel en
                eenvoudig een afspraak via onze online agenda. Uw auto zal weer
                stralen alsof hij net uit de showroom komt!
              </AboutItemDetail>
            </AboutItemSection>
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image src="/voor4.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            {/* <AboutImgContainer>
                <Image src="/voor2.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer> */}
          </AboutItem>
        </AboutContainer>
      </Box>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          Hoge kwaliteit glas coating behandelingen voor uw auto bij Fast Clean
          Service!
        </Typography>
      </HomeBlueBanner>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10rem",
        }}
      >
        <AboutContainer>
          <AboutItem>
            <AboutItemSection>
              {/* <ServicesItemHeading>Verbluffend resultaat</ServicesItemHeading> */}
              <AboutItemDetail>
                Onze glas coatings bieden lakbescherming tot wel 5 jaar en
                zorgen ervoor dat uw auto langer schoon blijft. Met minder vaak
                wassen en minder vuil dat aan uw auto hecht, bespaart u niet
                alleen tijd maar ook geld op reinigingsmiddelen. Bovendien maakt
                onze glas coating uw auto krasbestendig en geeft deze een
                prachtige glans. Onze coatings zijn duurzaam, waterafstotend en
                bewezen effectief. Kies voor de beste bescherming voor uw auto
                en maak snel een afspraak via onze website.
              </AboutItemDetail>
            </AboutItemSection>
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image src="/voor5.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            {/* <AboutImgContainer>
                <Image src="/voor2.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer> */}
          </AboutItem>
        </AboutContainer>
      </Box>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          Lakverzegeling en WaxGuard
        </Typography>
      </HomeBlueBanner>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10rem",
        }}
      >
        <AboutContainer>
          <AboutItem>
            <AboutItemSection>
              {/* <ServicesItemHeading>Verbluffend resultaat</ServicesItemHeading> */}
              <AboutItemDetail>
                Bescherming en glans voor uw auto
              </AboutItemDetail>
              <AboutItemDetail>
                Wilt u langdurige glans en bescherming voor uw auto? Fast Clean
                Service biedt diverse lakverzegelingen, waaronder WaxGuard. Met
                deze behandelingen blijft de glans langer behouden en hecht vuil
                minder snel aan de lak.
              </AboutItemDetail>
              <AboutItemDetail>
                WaxGuard biedt maar liefst 3 jaar glansgarantie en beschermt uw
                auto tegen vuil en weersinvloeden. Het resultaat is een diepere
                glans en duurzame beschermlaag. Voor optimale bescherming is
                regelmatig onderhoud met de juiste conditioner van groot belang.
              </AboutItemDetail>
              <AboutItemDetail>
                Naast WaxGuard bieden we ook glas coating als extra optie.
                Hiermee krijgt uw auto de ultieme glans en behoudt deze tot wel
                5 jaar en langer. Kies voor de lakverzegeling van Fast Clean
                Service en geniet langer van de showroom glans van uw auto. Maak
                gemakkelijk een afspraak via onze website.
              </AboutItemDetail>
            </AboutItemSection>
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image src="/voor6.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            {/* <AboutImgContainer>
                <Image src="/voor2.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer> */}
          </AboutItem>
        </AboutContainer>
      </Box>
      <HomeBlueBanner></HomeBlueBanner>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AboutContainer>
          <AboutItem>
            <AboutItemSection>
              <ServicesItemHeading>
                Stoomreiniging voor een fris interieur
              </ServicesItemHeading>
              <AboutItemDetail>
                Stoomreiniging voor een fris interieur
              </AboutItemDetail>
              <AboutItemDetail>
                Vieze geuren, schimmel, en dierenharen zijn verleden tijd met
                stoomreiniging van Fast Clean Service. Onze duurzame en
                efficiënte methode bestrijdt bacteriën en verwijdert vlekken en
                nare geuren uit bekleding.
              </AboutItemDetail>
              <AboutItemDetail>
                Efficiënt en grondig Met stoomreiniging worden zelfs de kleinste
                hoekjes bereikt en gedesinfecteerd. De stoom bereikt
                temperaturen tot 180°C, wat zorgt voor een neutralisatie van
                geuren en een hygiënische reiniging. Na de behandeling is uw
                interieur meteen weer in gebruik te nemen.
              </AboutItemDetail>
              <AboutItemDetail>
                Eenvoudig en snel Het reinigen van stoffen en lederen interieurs
                is met stoomreiniging eenvoudig en snel. Onze medewerkers zijn
                gespecialiseerd in het reinigen van vloermatten, dorpels en
                deurstijlen, dashboard, middenconsole, stoelbekleding en
                kofferbak.
              </AboutItemDetail>
              <AboutItemDetail>
                Uw auto, ons visitekaartje Bij Fast Clean Service staat uw
                schone auto centraal. Onze stoomreiniging zorgt voor een fris
                interieur en laat uw auto weer stralen.
              </AboutItemDetail>
            </AboutItemSection>
          </AboutItem>

          <AboutItem>
            <Box
              sx={{
                display: "flex",
                flexBasis: "calc(50% - 2rem)",
                gap: "2rem",
              }}
            >
              <AboutImgContainer>
                <Image src="/voor7.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer>
              <AboutImgContainer>
                <Image src="/voor8.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexBasis: "calc(50% - 2rem)",
                gap: "2rem",
              }}
            >
              <AboutImgContainer>
                <Image src="/voor9.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer>
              <AboutImgContainer>
                <Image src="/voor10.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer>
            </Box>
            {/* <AboutImgContainer>
                <Image src="/voor2.jpg" alt="img" height={500} width={500} />
              </AboutImgContainer> */}
          </AboutItem>
        </AboutContainer>
      </Box>
      <HomePkgsBox>
        <HomePkgsInBox>
          <HomePkgBox>
            <AboutImgContainer>
              <Image src="/voor11.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutItem>
              <AboutItemSection>
                <ServicesItemHeading>VLOERMATTEN </ServicesItemHeading>
                <AboutItemDetail>
                  De vloermatten in een voertuig staan het meest in contact met
                  vuil en bacteriën. Stoom is daarvoor de meest effectieve vorm
                  van reiniging: Zelfs de meest hardnekkige vieze plekken worden
                  verwijderd en bacteriën worden gedood. Uw vloermatten zien er
                  na de behandeling weer brandschoon uit!
                </AboutItemDetail>
              </AboutItemSection>
            </AboutItem>
          </HomePkgBox>
          <HomePkgBox>
            <AboutImgContainer>
              <Image src="/voor12.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutItem>
              <AboutItemSection>
                <ServicesItemHeading>DORPELS</ServicesItemHeading>
                <AboutItemDetail>
                  Waar traditionele wasstraten ophouden, gaat het stomen door.
                  De dorpels en deurstijlen van een voertuig zijn altijd lastig
                  schoon te maken. De stoomreiniger bereikt uitstekend moeilijk
                  bereikbare plaatsen. Als u instapt, heeft u datzelfde frisse
                  gevoel als toen u de auto aangeschafte!
                </AboutItemDetail>
              </AboutItemSection>
            </AboutItem>
          </HomePkgBox>
          <HomePkgBox>
            <AboutImgContainer>
              <Image src="/voor13.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutItem>
              <AboutItemSection>
                <ServicesItemHeading>DASHBOARD</ServicesItemHeading>
                <AboutItemDetail>
                  Uw dashboard kan ontzettend vies en stoffig zijn. In de
                  console, waar u misschien ook uw koffiebeker plaatst, blijft
                  bij regulier schoonmaken vaak stof achter. Met stoomreinigen
                  worden de kleinste plekjes bereikt en bacteriën gedood. Uw
                  riemen vettig en vies? Met stoomreinigen worden deze weer
                  glanzend schoon. Zonder de vieze luchtjes.
                </AboutItemDetail>
              </AboutItemSection>
            </AboutItem>
          </HomePkgBox>
          <HomePkgBox>
            <AboutImgContainer>
              <Image src="/voor14.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutItem>
              <AboutItemSection>
                <ServicesItemHeading>STOELBEKLEDING</ServicesItemHeading>
                <AboutItemDetail>
                  Stoelbekleding, leder of stof? Plakkerige etensresten, modder,
                  vuil en viezigheid worden met stoomreinigen professioneel
                  verwijderd. Door handmatig op 180 °C te stomen, komen we bij
                  de kleinste hoekjes en gaten van uw voertuig. Vuil wordt
                  vakkundig verwijderd en bacteriën gedood. Hierdoor worden ook
                  geuren geneutraliseerd. Uw auto ziet er ook van binnen weer
                  piekfijn uit en ruikt heerlijk fris!
                </AboutItemDetail>
              </AboutItemSection>
            </AboutItem>
          </HomePkgBox>
          <HomePkgBox>
            <AboutImgContainer>
              <Image src="/voor15.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutItem>
              <AboutItemSection>
                <ServicesItemHeading>KOFFERBAK</ServicesItemHeading>
                <AboutItemDetail>
                  Uw kofferbak heeft soms heel wat te verduren. Boodschappen,
                  huisdieren vervoeren, tuinspullen en vele andere zaken. Met
                  stoomreinigen worden vuilresten, haren en geuren op vakkundige
                  wijze verwijderd en bacteriën gedood. Ook uw kofferbak is
                  geheel gereinigd en ontdaan van alle vieze resten, haren en
                  vieze luchtjes na onze professionele stoombehandeling. Uw
                  kofferbak is weer heerlijk schoon en ruikt fris.
                </AboutItemDetail>
              </AboutItemSection>
            </AboutItem>
          </HomePkgBox>
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
}
