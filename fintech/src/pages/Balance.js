import React, {useEffect, useState} from 'react'
import BalanceCard from '../component/balance/BalanceCard'
import Header from '../component/Header'
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Balance = () => {
    const {search} = useLocation();
    const {fintechUseNo} = queryString.parse(search);
    const [balance, setBalance] = useState();

    const genTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1;
        let transId = "M202113062U" + countnum; //이용기관번호 (본인번호) 입력
        return transId;
      };

    useEffect(() =>{
      getBalanceData();  
    },[]);

    const getBalanceData = () =>{

    };

    return (
        <div>
            <Header title="잔액조회"></Header>
            <BalanceCard></BalanceCard>
        </div>
    )
}

export default Balance