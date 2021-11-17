import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  getJsonRpcUrl

} from 'forta-agent'
import Web3 from 'web3';
import {EVENT,ROUTER_CONTRACT} from "./consts"

const web3 = new Web3(getJsonRpcUrl())
const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];

  const events = txEvent.filterLog(EVENT,ROUTER_CONTRACT)

  for (const event of events){
    findings.push(

      Finding.fromObject({
        name: "SWAP",
        description: `Router PancakeSwap SWAP EVENT`,
        alertId: "FORTA-9000",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
        metadata:{
          tx:txEvent.hash,
        }
        

      })
     )
  }

  return findings;
}

export default {
  handleTransaction
}