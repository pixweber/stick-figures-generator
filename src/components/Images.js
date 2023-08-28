import React from "react";
import ItemImage from "./ItemImage";

import GrandPa01 from './../assets/cutting-elements/grandpa-01.png';
import GrandMa1 from './../assets/cutting-elements/grandma-01.png';
import GrandPa02 from './../assets/cutting-elements/grandpa-02.png';
import GrandMa2 from './../assets/cutting-elements/grandma-02.png';

import Papa01 from './../assets/cutting-elements/papa-01.png';
import Papa02 from './../assets/cutting-elements/papa-02.png';
import Papa03 from './../assets/cutting-elements/papa-03.png';
import Papa04 from './../assets/cutting-elements/papa-04.png';
import Mama01 from './../assets/cutting-elements/mama-01.png';
import Mama02 from './../assets/cutting-elements/mama-02.png';
import Mama03 from './../assets/cutting-elements/mama-03.png';
import Mama04 from './../assets/cutting-elements/mama-04.png';

import Brother01 from './../assets/cutting-elements/brother-01.png';
import Brother02 from './../assets/cutting-elements/brother-02.png';
import Brother03 from './../assets/cutting-elements/brother-03.png';
import Brother04 from './../assets/cutting-elements/brother-04.png';
import Sister01 from './../assets/cutting-elements/sister-01.png';
import Sister02 from './../assets/cutting-elements/sister-02.png';
import Sister03 from './../assets/cutting-elements/sister-03.png';
import Sister04 from './../assets/cutting-elements/sister-04.png';

import BrotherSmall01 from './../assets/cutting-elements/brother-small-01.png';
import BrotherSmall02 from './../assets/cutting-elements/brother-small-02.png';
import BrotherSmall03 from './../assets/cutting-elements/brother-small-03.png';
import SisterSmall01 from './../assets/cutting-elements/sister-small-01.png';
import SisterSmall02 from './../assets/cutting-elements/sister-small-02.png';
import SisterSmall03 from './../assets/cutting-elements/sister-small-03.png';

import Baby01 from './../assets/cutting-elements/baby-01.png';
import BabyBoy01 from './../assets/cutting-elements/baby-boy-01.png';
import BabyGirl01 from './../assets/cutting-elements/baby-girl-01.png';

import Dog01 from './../assets/cutting-elements/dog-01.png';
import Cat01 from './../assets/cutting-elements/cat-01.png';
import Cat02 from './../assets/cutting-elements/cat-02.png';
import Bird01 from './../assets/cutting-elements/bird-01.png';
import Fish01 from './../assets/cutting-elements/fish-01.png';

import DogAlaska from './../assets/dogs/alaskan-malamute.png';
import DogAmericanBully from './../assets/dogs/american-bully.png';
import DogBangkaeo from './../assets/dogs/bangkaeo.png';
import DogBeagle from './../assets/dogs/beagle.png';
import DogBelgianMalinois from './../assets/dogs/belgian-malinois.png';
import DogBulldog from './../assets/dogs/bulldog.png';
import DogChiba from './../assets/dogs/chiba.png';
import DogChihuahua from './../assets/dogs/chihuahua.png';
import DogChowchow from './../assets/dogs/chowchow.png';
import DogCorgi from './../assets/dogs/corgi.png';
import DogDachshund from './../assets/dogs/dachshund.png';
import DogDalmatian from './../assets/dogs/dalmatian.png';
import DogDoberman from './../assets/dogs/doberman.png';
import DogFrenchBulldog from './../assets/dogs/french-bulldog.png';
import DogGermanShepherd from './../assets/dogs/german-shepherd.png';
import DogGoldenRetriever from './../assets/dogs/golden-retriever.png';
import DogGreyhound from './../assets/dogs/greyhound.png';
import DogKomodor from './../assets/dogs/komondor.png';
import DogLabrador from './../assets/dogs/labrador.png';
import DogMaltese from './../assets/dogs/maltese.png';
import DogPitbull from './../assets/dogs/pitbull.png';
import DogPomeranian from './../assets/dogs/pomeranian.png';
import DogPoodle from './../assets/dogs/poodle.png';
import DogPugs from './../assets/dogs/pugs.png';
import DogRottweiler from './../assets/dogs/rottweiler.png';
import DogSamoyed from './../assets/dogs/samoyed.png';
import DogShihtzu from './../assets/dogs/shihtzu.png';
import DogSiberianHusky from './../assets/dogs/siberian-husky.png';
import DogStBernard from './../assets/dogs/st-bernard.png';
import DogYorkShireTerrier from './../assets/dogs/yorkshire-terrier.png';

import {Col, Row} from "react-bootstrap";

const Images = ({items, currentItem, setCurrentItem}) => {
    const sizes = {
        grandpa: 200,
        grandma: 190,
        papa: 200,
        mama: 190,
        brother: 170,
        sister: 160,
        brotherSmall: 145,
        sisterSmall: 138,
        baby: 100,
        animal: 110
    };

    const grandparents = [
        {imagePath: GrandPa01, height: sizes.grandpa, name: 'Papi'},
        {imagePath: GrandPa02, height: sizes.grandpa, name: 'Papi'},
        {imagePath: GrandMa1, height: sizes.grandma, name: 'Mamie'},
        {imagePath: GrandMa2, height: sizes.grandma, name: 'Mamie'},
    ];

    const parents = [
        {imagePath: Papa01, height: sizes.papa, name: 'Papa'},
        {imagePath: Papa02, height: sizes.papa, name: 'Papa'},
        {imagePath: Papa03, height: sizes.papa, name: 'Papa'},
        {imagePath: Papa04, height: sizes.papa, name: 'Papa'},
        {imagePath: Mama01, height: sizes.mama, name: 'Maman'},
        {imagePath: Mama02, height: sizes.mama, name: 'Maman'},
        {imagePath: Mama03, height: sizes.mama, name: 'Maman'},
        {imagePath: Mama04, height: sizes.mama, name: 'Maman'},
    ];

    const brothersSisters = [
        {imagePath: Brother01, height: sizes.brother, name: ''},
        {imagePath: Brother02, height: sizes.brother, name: ''},
        {imagePath: Brother03, height: sizes.brother, name: ''},
        {imagePath: Brother04, height: sizes.brother, name: ''},
        {imagePath: Sister01, height: sizes.sister, name: ''},
        {imagePath: Sister02, height: sizes.sister, name: ''},
        {imagePath: Sister03, height: sizes.sister, name: ''},
        {imagePath: Sister04, height: sizes.sister, name: ''},
    ];

    const brothersSistersSmall = [
        {imagePath: BrotherSmall01, height: sizes.brotherSmall, name: ''},
        {imagePath: BrotherSmall02, height: sizes.brotherSmall, name: ''},
        {imagePath: BrotherSmall03, height: sizes.brotherSmall, name: ''},
        {imagePath: SisterSmall01, height: sizes.sisterSmall, name: ''},
        {imagePath: SisterSmall02, height: sizes.sisterSmall, name: ''},
        {imagePath: SisterSmall03, height: sizes.sisterSmall, name: ''},
    ];

    const babies = [
        {imagePath: Baby01, height: sizes.baby, name: ''},
        {imagePath: BabyBoy01, height: sizes.baby, name: ''},
        {imagePath: BabyGirl01, height: sizes.baby, name: ''},
    ];

    const animals = [
        {imagePath: Dog01, height: sizes.animal, name: ''},
        {imagePath: Cat01, height: sizes.animal, name: ''},
        {imagePath: Cat02, height: sizes.animal, name: ''},
        {imagePath: Bird01, height: sizes.animal, name: ''},
        {imagePath: Fish01, height: sizes.animal, name: ''},
    ];

    const dogs = [
        {imagePath: DogAlaska, height: sizes.animal, name: ''},
        {imagePath: DogAmericanBully, height: sizes.animal, name: ''},
        {imagePath: DogBangkaeo, height: sizes.animal, name: ''},
        {imagePath: DogBeagle, height: sizes.animal, name: ''},
        {imagePath: DogBelgianMalinois, height: sizes.animal, name: ''},
        {imagePath: DogBulldog, height: sizes.animal, name: ''},
        {imagePath: DogChiba, height: sizes.animal, name: ''},
        {imagePath: DogChihuahua, height: sizes.animal, name: ''},
        {imagePath: DogChowchow, height: sizes.animal, name: ''},
        {imagePath: DogCorgi, height: sizes.animal, name: ''},
        {imagePath: DogDachshund, height: sizes.animal, name: ''},
        {imagePath: DogDalmatian, height: sizes.animal, name: ''},
        {imagePath: DogDoberman, height: sizes.animal, name: ''},
        {imagePath: DogFrenchBulldog, height: sizes.animal, name: ''},
        {imagePath: DogGermanShepherd, height: sizes.animal, name: ''},
        {imagePath: DogGoldenRetriever, height: sizes.animal, name: ''},
        {imagePath: DogGreyhound, height: sizes.animal, name: ''},
        {imagePath: DogKomodor, height: sizes.animal, name: ''},
        {imagePath: DogLabrador, height: sizes.animal, name: ''},
        {imagePath: DogMaltese, height: sizes.animal, name: ''},
        {imagePath: DogPitbull, height: sizes.animal, name: ''},
        {imagePath: DogPomeranian, height: sizes.animal, name: ''},
        {imagePath: DogPoodle, height: sizes.animal, name: ''},
        {imagePath: DogPugs, height: sizes.animal, name: ''},
        {imagePath: DogRottweiler, height: sizes.animal, name: ''},
        {imagePath: DogSamoyed, height: sizes.animal, name: ''},
        {imagePath: DogShihtzu, height: sizes.animal, name: ''},
        {imagePath: DogSiberianHusky, height: sizes.animal, name: ''},
        {imagePath: DogStBernard, height: sizes.animal, name: ''},
        {imagePath: DogYorkShireTerrier, height: sizes.animal, name: ''},
    ];

    return (
        <div>
            <div className="generation">
                <h3>Grand parents</h3>
                <Row xs="auto">
                    {grandparents.map((item, key) => (
                        <Col key={key}><ItemImage key={key} imagePath={item.imagePath} height={item.height} items={items} currentItem={currentItem} setCurrentItem={setCurrentItem} /></Col>
                    ))}
                </Row>

                <h3 className="mt-3">Parents</h3>
                <Row xs="auto">
                    {parents.map((item, key) => (
                        <Col key={key}><ItemImage key={key} imagePath={item.imagePath} height={item.height} items={items} currentItem={currentItem} setCurrentItem={setCurrentItem} /></Col>
                    ))}
                </Row>

                <h3 className="mt-3">Brothers & sisters</h3>
                <Row xs="auto">
                    {brothersSisters.map((item, key) => (
                        <Col key={key}><ItemImage key={key} imagePath={item.imagePath} height={item.height} items={items} currentItem={currentItem} setCurrentItem={setCurrentItem} /></Col>
                    ))}
                </Row>

                <h3 className="mt-3">Brothers & sisters small</h3>
                <Row xs="auto">
                    {brothersSistersSmall.map((item, key) => (
                      <Col key={key}><ItemImage key={key} imagePath={item.imagePath} height={item.height} items={items} currentItem={currentItem} setCurrentItem={setCurrentItem} /></Col>
                    ))}
                </Row>

                <h3 className="mt-3">Babies</h3>
                <Row xs="auto">
                    {babies.map((item, key) => (
                      <Col key={key}><ItemImage key={key} imagePath={item.imagePath} height={item.height} items={items} currentItem={currentItem} setCurrentItem={setCurrentItem} /></Col>
                    ))}
                </Row>

                <h3 className="mt-3">Animals</h3>
                <Row xs="auto">
                    {animals.map((item, key) => (
                      <Col key={key}><ItemImage key={key} imagePath={item.imagePath} height={item.height} items={items} currentItem={currentItem} setCurrentItem={setCurrentItem} /></Col>
                    ))}
                </Row>

                <h3 className="mt-3">Dogs</h3>
                <Row xs="auto">
                    {dogs.map((item, key) => (
                        <Col key={key} className="mt-3">
                            <ItemImage type="dog" key={key} imagePath={item.imagePath} height={item.height} items={items} currentItem={currentItem} setCurrentItem={setCurrentItem} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Images;
