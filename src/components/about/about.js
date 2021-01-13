import React, {Component} from 'react';
import './about.css'
class About extends Component {
    render() {
        return (
            <div id="about">
                <h1 className="text-center">О проекте</h1>
                <div className="d-flex">
                    <div className="col-md-5 offset-1 video mt-5">
                        <iframe width="550" height="315" src="https://www.youtube.com/embed/bWBlXSSgnVc" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                    </div>
                    <div className="col-md-5 mt-5 quote">
                        <blockquote>
                            <span>
                                <svg data-v-20a2ac06="" width="63" height="41" viewBox="0 0 63 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-20a2ac06="" d="M34.8283 26.8169C34.8283 23.8769 35.066 21.2151 35.5415 18.8314C36.0962 16.4477 36.8887 14.2229 37.9189 12.157C39.0283 10.0911 40.3755 8.06492 41.9604 6.07849C43.5453 4.09205 45.3679 2.06589 47.4283 0L56.2245 4.17151C55.5906 4.80717 54.9962 5.56202 54.4415 6.43605C53.966 7.15116 53.4509 8.06492 52.8962 9.17733C52.3415 10.2897 51.8264 11.5213 51.3509 12.8721C54.6792 13.5078 57.4528 15.1366 59.6717 17.7587C61.8906 20.3808 63 23.4002 63 26.8169C63 28.8033 62.6038 30.6705 61.8113 32.4186C61.0981 34.0872 60.1075 35.5572 58.8396 36.8285C57.5717 38.0998 56.066 39.1328 54.3226 39.9273C52.6585 40.6424 50.8358 41 48.8547 41C46.9528 41 45.1302 40.6424 43.3868 39.9273C41.7226 39.1328 40.2566 38.0998 38.9887 36.8285C37.7208 35.5572 36.6906 34.0872 35.8981 32.4186C35.1849 30.6705 34.8283 28.8033 34.8283 26.8169ZM0 25.625C0.0792453 22.9234 0.396226 20.4603 0.950943 18.2355C1.50566 15.9312 2.29811 13.7859 3.3283 11.7994C4.43774 9.73353 5.74528 7.78682 7.25094 5.9593C8.83585 4.05233 10.6189 2.06589 12.6 0L21.3962 4.17151C20.7623 4.80717 20.1679 5.56202 19.6132 6.43605C19.1377 7.15116 18.6226 8.06492 18.0679 9.17733C17.5132 10.2897 16.9981 11.5213 16.5226 12.8721C19.8509 13.5078 22.6245 15.1366 24.8434 17.7587C27.0623 20.3808 28.1717 23.4002 28.1717 26.8169C28.1717 28.8033 27.7755 30.6705 26.983 32.4186C26.2698 34.0872 25.2792 35.5572 24.0113 36.8285C22.7434 38.0998 21.2377 39.1328 19.4943 39.9273C17.8302 40.6424 16.0075 41 14.0264 41C12.1245 41 10.3019 40.6424 8.55849 39.9273C6.89434 39.1328 5.4283 38.0601 4.16038 36.7093C2.89245 35.3585 1.86226 33.7694 1.06981 31.9419C0.356604 30.0349 0 27.9293 0 25.625Z" fill="#EAEAEA"></path></svg>
                            </span>
                            <p>"В старших классах дети формируются как индивидуально, так и в группах.
                                В то же время их нельзя отделять от среды, в которой они учатся."</p>
                            <span className="float-right">
                                <svg data-v-20a2ac06="" width="63" height="41"  viewBox="0 0 63 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                data-v-20a2ac06=""
                                d="M28.1717 14.1831C28.1717 17.1231 27.934 19.7849 27.4585 22.1686C26.9038 24.5523 26.1113 26.7771 25.0811 28.843C23.9717 30.9089 22.6245 32.9351 21.0396 34.9215C19.4547 36.9079 17.6321 38.9341 15.5717 41L6.77547 36.8285C7.40944 36.1928 8.00377 35.438 8.55849 34.564C9.03396 33.8488 9.54906 32.9351 10.1038 31.8227C10.6585 30.7103 11.1736 29.4787 11.6491 28.1279C8.32076 27.4922 5.54717 25.8634 3.3283 23.2413C1.10944 20.6192 0 17.5998 0 14.1831C0 12.1967 0.396229 10.3295 1.18868 8.58139C1.90189 6.91279 2.89245 5.44283 4.16038 4.17151C5.4283 2.90019 6.93396 1.86725 8.67736 1.07267C10.3415 0.357559 12.1642 0 14.1453 0C16.0472 0 17.8698 0.357559 19.6132 1.07267C21.2774 1.86725 22.7434 2.90019 24.0113 4.17151C25.2792 5.44283 26.3094 6.91279 27.1019 8.58139C27.8151 10.3295 28.1717 12.1967 28.1717 14.1831ZM63 15.375C62.9208 18.0766 62.6038 20.5397 62.0491 22.7645C61.4943 25.0688 60.7019 27.2141 59.6717 29.2006C58.5623 31.2665 57.2547 33.2132 55.7491 35.0407C54.1642 36.9477 52.3811 38.9341 50.4 41L41.6038 36.8285C42.2377 36.1928 42.8321 35.438 43.3868 34.564C43.8623 33.8488 44.3774 32.9351 44.9321 31.8227C45.4868 30.7103 46.0019 29.4787 46.4774 28.1279C43.1491 27.4922 40.3755 25.8634 38.1566 23.2413C35.9377 20.6192 34.8283 17.5998 34.8283 14.1831C34.8283 12.1967 35.2245 10.3295 36.017 8.58139C36.7302 6.91279 37.7208 5.44283 38.9887 4.17151C40.2566 2.90019 41.7623 1.86725 43.5057 1.07267C45.1698 0.357559 46.9925 0 48.9736 0C50.8755 0 52.6981 0.357559 54.4415 1.07267C56.1057 1.86725 57.5717 2.93992 58.8396 4.2907C60.1075 5.64147 61.1377 7.23062 61.9302 9.05814C62.6434 10.9651 63 13.0707 63 15.375Z"
                                fill="#EAEAEA"></path></svg></span>
                        </blockquote>
                        <span>Шавкат Мирзиёев
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

About.propTypes = {};

export default About;