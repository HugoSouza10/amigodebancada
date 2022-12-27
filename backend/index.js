const express = require('express')
const moment = require('moment')
const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()
const app = express();
app.use(express.json({ limit: '50mb' }));

//ROTA PARA CADASTRO DA ORDEM DE SERVICO
app.post("/cad_ordem_servico", async (req, res) => {
    const dados_ordem = req.body
    try {
        const response = await prisma.ordem_servico.create({
            data: {
                os: dados_ordem.os,
                marca: dados_ordem.marca,
                modelo: dados_ordem.modelo,
                preco: dados_ordem.preco,
                dt_entrega: dados_ordem.dt_entrega,
                hr_entrega: dados_ordem.hr_entrega,
                status: dados_ordem.status,
                cor: dados_ordem.cor,
                id_servico: dados_ordem.id_servico,
            },
            select: {
                id: true
            }
        })

        return res.status(200).json({ msg: "Cadastro Realizado Com Sucesso!", response })
    } catch (e) {
        console.log(e.message)
        if (e instanceof Prisma.PrismaClientInitializationError) {
            return res.status(500).json({ error: true, msg: "Erro de Conexão com o Banco de Dados!!" })
        }
        if (e instanceof Prisma.PrismaClientValidationError) {
            return res.status(400).json({ error: true, msg: "Erro de sintaxe ou campo Obrigatório Vazio!!" })
        } else {
            return res.status(500).json({ error: true, msg: "Houve um erro na requisição de Cadastro de OS!" })
        }
    }

})


//ROTA PARA LISTAR AS PEÇAS PARA COMPRAR NO DIA -e passar o total de valores das
//peças - excluindo todas as OS que estao status 0 
app.get("/listar_pecas", async (req, res) => {
    var { dataAtual } = req.query;
    var total = 0;

    const dt_formatada = moment(dataAtual).format("YYYY-MM-DD")

    const response = await prisma.ordem_servico.findMany({
        where: {
            dt_entrega: {
                gte: dt_formatada
            },
            status: {
                equals: 1
            }
        },
        select: {
            marca: true,
            modelo: true,
            cor: true,
            preco: true
        }
    })

    //FAZ A SOMA DOS VALORES DE TODAS AS PEÇAS PARA COMPRAR NA DATA PASSADA
    for (let i = 0; i < Object.keys(response).length; i++) {
        total += response[i].preco
    }
    return res.status(200).json({ response, total })

})



app.listen(4041, () => {
    console.log("Servidor On!")
})