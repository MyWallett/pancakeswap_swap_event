import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("pool created agent", () => {
    let handleTransaction: HandleTransaction
  
    const createTxEventWithLog= () => createTransactionEvent({
      transaction:{
        hash:"0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199",
        to:"0x2b20382808b0da100eba63d7fb7ce3619ca323b0",
        from:"123",
        nonce:1,
        gas:"",
        gasPrice:"",
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {
        status:true,
        root:"",
        gasUsed:"",
        cumulativeGasUsed:"",
        logsBloom:"",
        logs:[
            {address:"0x2b20382808b0da100eba63d7fb7ce3619ca323b0",
             topics:[
                 "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
                 "0x00000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e",
                 "0x00000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e",
                ],
             data:"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024992a5c0937f3671e00000000000000000000000000000000000000000000000000171bc06d69676d0000000000000000000000000000000000000000000000000000000000000000",
             blockHash:"",
             blockNumber:1,
             logIndex:1,
             transactionHash:"",
             transactionIndex:1,
             removed:false
            
            
            }
        ],
        contractAddress:"0x5d2BF248A2a31Da2bdC8FD0b0B6c3ceE71f7175A",
        blockHash:"",
        blockNumber:1,
        transactionHash:"",
        transactionIndex:1

      },
      block:{}as any,
      


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("token event", () => {
      it("findings length == 1", async () => {
        const txEvent = createTxEventWithLog()
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toBe(1)
      })
  
    })
  })