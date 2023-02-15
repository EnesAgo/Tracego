import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import CityFooter from '../components/city/CityFooter';
import CityHeader from '../components/city/CityHeader';
import CityMain from '../components/city/CityMain';
import CitySectionOne from '../components/city/citySections/CitySectionOne';
import OrderSection from '../components/Order/OrderSection';
import Login from '../components/Order/Login';
import OrderForm from '../components/Order/OrderForm';

function Order() {
    const { cityName } = useParams()

    const [isLogedIn, setIsLogedIn] = useContext(LoginContext)
    console.log(isLogedIn)

    const cityDescriptions = {
        istanbul: "Istanbul, Turkish İstanbul, formerly Constantinople, ancient Byzantium, largest city and principal seaport of Turkey. It was the capital of both the Byzantine Empire and the Ottoman Empire. Istanbul: Blue Mosque Istanbul: Blue Mosque Blue Mosque Blue Mosque The old walled city of Istanbul stands on a triangular peninsula between Europe and Asia. Sometimes as a bridge, sometimes as a barrier, Istanbul for more than 2,500 years has stood between conflicting surges of religion, culture, and imperial power. For most of those years it was one of the most coveted cities in the world.",
        antalya: "The city that is now Antalya was first settled around 200 BC by the Attalid dynasty of Pergamon, which was soon subdued by the Romans. Roman rule saw Antalya thrive, including the construction of several new monuments, such as Hadrian's Gate, and the proliferation of neighboring cities. The city has changed hands several times, including to the Seljuk Sultanate in 1207 and an expanding Ottoman Empire in 1391.[5] Ottoman rule brought relative peace and stability for the next five hundred years. The city was occupied by Italy for three years in the aftermath of World War I, but was recaptured by a newly independent Turkey in the War of Independence. Antalya is Turkey's biggest international sea resort, located on the Turkish Riviera. Large-scale development and governmental funding has promoted tourism. A record 13.6 million tourists passed through the city in 2019.",
        izmir: "Izmir is a metropolitan city in the western extremity of Turkey and the third most populous city in Turkey, after Istanbul and Izmir. Once the ancient city of Smyrna, İzmir is now a modern, developed, and busy commercial center, set around a huge bay and surrounded by mountains. The broad boulevards, glass-fronted buildings and modern shopping centers are dotted with traditional red-tiled roofs, the 18th century market, and old mosques and churches, although the city has an atmosphere more of Mediterranean Europe than traditional Turkey. İzmir owes its position as an economically and socially dynamic city to its location, climate and the fact that it has been a home to many different cultures and religions. Persians, Ancient Greeks, Assyrians, Romans, Byzantines and Ottomans are just a few of the dozens of different civilizations that the city has hosted throughout its long history.",
        tabzon: "Trabzon is one of the major cities of Turkey and the biggest one in the Eastern Black Sea region. Its population is over 808 thousand (2019) living on an area of 4,664 km2. Due to the rainy climate even in the summer months, it has lots of green forests and mountains with many rivers and highlands. There are major roads connecting Trabzon to other cities, a big harbor for international shipping traffic in the Black Sea, and an international airport. The city is famous for its fish, football (soccer) team, and the Sumela Monastery.",
        çanakkale: "Çanakkale is the nearest major urban centre to the ancient city of Troy, which (together with the ancient region of the Troad) is also located inside Çanakkale Province. The wooden horse from the 2004 movie Troy is exhibited on the Çanakkale waterfront. Today Çanakkale is the main base for visits to the ruins of Troy and to the First World War cemeteries at Gallipoli. Particularly around 18 March and 25 April (ANZAC Day) when there are major celebrations of the two different interpretations of the events of the war the town fills with visitors and every hotel room is likely to be booked up for months in advance. Every year Çanakkale is the finishing point for a demanding swim across the Dardanelles from Eceabat. This event reproduces the swim taken by Lord Byron in 1810. Byron himself was reproducing Leander's legendary swim from Sestos to Abydos in the story of Hero and Leander. Çanakkale Airport (CKZ) is 3 km from the city centre. AnadoluJet and Borajet have daily flights from Istanbul and Ankara. Intercity buses run to Bursa, Istanbul and Izmir. In 2022 the 1915 Çanakkale Bridge opened just to the south of Çanakkale to facilitate and speed the crossing of the Dardanelles.",
        bodrum: "Bodrum is a port city in Muğla Province, southwestern Turkey, at the entrance to the Gulf of Gökova. Its population was 35,795 at the 2012 census, with a total of 136,317 inhabitants residing within the district's borders. Known in ancient times as Halicarnassus, the city was once home to the Mausoleum at Halicarnassus, also known as the tomb of Mausolus, one of the Seven Wonders of the Ancient World.",
        yalova: "Yalova is a market-gardening town located in northwestern Turkey on the eastern coast of the Sea of Marmara. The town has a population of 156,838, while the population of the surrounding Yalova Province is 291,001as of 2021. A largely modern town, it is best known for the spa resort at nearby Termal, a popular summer retreat for residents of Istanbul.",
        kapadokya: "Kapadokya, is a historical region in Central Anatolia, Turkey. It is largely in the provinces of Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde. According to Herodotus, in the time of the Ionian Revolt (499 BC), the Cappadocians were reported as occupying a region from Mount Taurus to the vicinity of the Euxine (Black Sea). Cappadocia, in this sense, was bounded in the south by the chain of the Taurus Mountains that separate it from Cilicia, to the east by the upper Euphrates, to the north by Pontus, and to the west by Lycaonia and eastern Galatia. The name, traditionally used in Christian sources throughout history, continues in use as an international tourism concept to define a region of exceptional natural wonders, in particular characterized by fairy chimneys and a unique historical and cultural heritage.",
        mersin: "Mersin is a large city and a port on the Mediterranean coast of southern Turkey. It is the provincial capital of the Mersin (formerly İçel) Province. It is made up of four district governorates, each having its own municipality: Akdeniz, Mezitli, Toroslar and Yenişehir. As urbanisation continues eastward, a larger metropolitan region combining Mersin with Tarsus and Adana (the Adana-Mersin Metropolitan Area) is in the making with more than 3.3 million inhabitants. Mersin lies on the western side of Çukurova, a geographical, economic and cultural region of Turkey. It is an important hub for Turkey's economy, with Turkey's largest seaport located here. The city hosted the 2013 Mediterranean Games."
    }


    


      return (
        <>
            <CityHeader placeName={cityName} />

            <CitySectionOne placeName={cityName} />
            <OrderSection placeName={cityName} cityDesc={cityDescriptions[cityName]} />

            {isLogedIn ? <OrderForm setIsLogedIn={setIsLogedIn} /> : <Login setIsLogedIn={setIsLogedIn} />}
            

            <CityFooter />
        </>
      )
  }


export default Order;