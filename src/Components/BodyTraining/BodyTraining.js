import './BodyTraining.css'
import { CardTrainer } from './CardTrainer/CardTrainer';
import { TrainHeader } from './TrainHeader/TrainHeader';
import { cardTrainer, trainHeader } from '../../assets/values';
import { SideImg } from './SideImg/SideImg';
import { sideImg } from '../../assets/values';

//import HomeHeader from '../HomeHeader/HomeHeader';





export const BodyTraining = () => {


    // const styles = {
    //     media: {
    //         //   height: 0,
    //         color: "red",
    //         paddingTop: '56.25%'
    //     },
    // };




    return (
        <div className="main-container-4 display-hori-center" style={{ marginTop: "85px" }}>
            <div className="inner-container-4 display-vertical-center">
                <div className="inner-leftside leftside-inner-cnt">
                    <TrainHeader
                        title={trainHeader[0].headtitle}
                    />
                    <div className="card-inner-pic-cnt cardinner-pic">

                        <CardTrainer

                            id={cardTrainer[0].id}
                            img={cardTrainer[0].image}
                            title={cardTrainer[0].title}
                            paragraph={cardTrainer[0].paragraph}
                        />

                        <CardTrainer
                            paddingTop='50px'
                            id={cardTrainer[1].id}
                            img={cardTrainer[1].image}
                            title={cardTrainer[1].title}
                            paragraph={cardTrainer[1].paragraph}
                        />

                        <CardTrainer
                            paddingTop='50px'
                            id={cardTrainer[2].id}
                            img={cardTrainer[2].image}
                            title={cardTrainer[2].title}
                            paragraph={cardTrainer[2].paragraph}
                        />


                    </div>
                </div>

                <SideImg
                paddingLeft="20px"
                    image={sideImg[0].image}
                />
            </div>
        </div>

    );
}