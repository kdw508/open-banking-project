import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
import ModalCard from "./ModalCard";

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;


const ModalWithDraw = ({tofintechno}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const [acountList, setAcountList] = useState([]);

    useEffect(() => {
        getAccountList();
    }, []);

    const getAccountList = () =>{

    };

    return (
        <ModalWithdrawBlock>
            <Slider {...settings}>
                <ModalCard
                    bankName="test"
                    fintechUseNo="test"
                    tofintechno="test"
                ></ModalCard>
            </Slider>
        </ModalWithdrawBlock>
    )
}

export default ModalWithDraw
