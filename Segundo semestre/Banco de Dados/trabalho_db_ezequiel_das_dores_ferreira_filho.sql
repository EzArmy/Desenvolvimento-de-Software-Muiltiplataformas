CREATE DATABASE Estacionamento;

USE Estacionamento;

-- Tabela de Clientes
CREATE TABLE Clientes (
    CPF VARCHAR(14) PRIMARY KEY,
    Nome VARCHAR(100),
    DataNascimento DATE
);

-- Tabela de Modelos de Veículos
CREATE TABLE ModelosVeiculos (
    CodigoModelo INT PRIMARY KEY,
    DescricaoModelo VARCHAR(50)
);

-- Tabela de Pátios
CREATE TABLE Patios (
    NumeroPatio INT PRIMARY KEY,
    Endereco VARCHAR(200),
    NumeroVagas INT
);

-- Tabela de Veículos
CREATE TABLE Veiculos (
    Placa VARCHAR(8) PRIMARY KEY,
    Modelo INT,
    Cliente VARCHAR(14),
    Cor VARCHAR(20),
    Ano INT
);

-- Tabela de Serviços de Estacionamento
CREATE TABLE ServicosEstacionamento (
    CodigoServico INT PRIMARY KEY,
    NumeroPatio INT,
    PlacaVeiculo VARCHAR(8),
    DataEntrada DATE,
    DataSaida DATE,
    HoraEntrada TIME,
    HoraSaida TIME
);

-- Adicionando dados para a tabela clientes
INSERT INTO Clientes (CPF, Nome, DataNascimento) VALUES
("123.456.789-01", "Wagner Toth", "1981-05-23"),
("234.567.890-12", "Lucas Guedes", "1996-08-18"),
("345.678.901-23", "Antonio Henrique Marcondes", "1994-03-27"),
("456.789.012-34", "Andre Oliveira", "1990-02-15");

-- Adicionando dados para a tabela modelos
INSERT INTO ModelosVeiculos (CodigoModelo, DescricaoModelo) VALUES
(1, "Sedan"),
(2, "Hatch"),
(3, "SUV"),
(4, "Utilitário"),
(5, "Moto");

-- Adicionando dados para a tabela patios
INSERT INTO Patios (NumeroPatio, Endereco, NumeroVagas) VALUES
(1, "Rua A", 20),
(2, "Rua B", 25),
(3, "Rua C", 40),
(4, "Rua D", 30);

-- Adicionando dados para a tabela veiculos
INSERT INTO Veiculos (Placa, Modelo, Cliente, Cor, Ano) VALUES
("ABC-1A23", 1, "123.456.789-01", "Preto", 2000),
("BAC-2834", 2, "234.567.890-12", "Azul", 2020),
("CBA-3C45", 3, "345.678.901-23", "Branco", 2021),
("BCA-4D56", 4, "456.789.012-34", "Preto", 2019),
("ACB-5E67", 5, "123.456.789-01", "Branco", 2020),
("CAB-6F78", 1, "345.678.901-23", "Vermelho", 2019),
("AAA-7689", 3, "456.789.012-34", "Cinza", 2005);

-- Adicionando dados para a tabela ServicosEstacionamento
INSERT INTO ServicosEstacionamento (CodigoServico, NumeroPatio, PlacaVeiculo, DataEntrada, DataSaida, HoraEntrada, HoraSaida) VALUES
(1, 1, "ABC-1A23", "2021-01-03", "2021-01-03", "08:00:30", "08:05:59"),
(2, 2, "BAC-2834", "2020-12-24", "2020-12-27", "18:50:00", "12:35:30"),
(3, 3, "CBA-3C45", "2020-12-31", "2021-01-02", "15:05:25", "17:00:34"),
(4, 4, "BCA-4D56", "2021-01-02", "2021-01-02", "08:40:12", "18:34:21"),
(5, 1, "ACB-5E67", "2021-02-01", "2021-02-01", "09:30:13", "09:35:20"),
(6, 1, "CAB-6F78", "2021-02-05", "2021-02-05", "10:05:35", "12:45:36"),
(7, 1, "AAA-7689", "2021-02-10", "2021-02-10", "11:12:45", "12:00:00"),
(8, 2, "BAC-2834", "2021-01-08", "2021-01-08", "10:45:36", "11:05:55"),
(9, 2, "ACB-5E67", "2021-01-15", "2021-01-15", "09:23:45", "10:30:56"),
(10, 3, "CBA-3C45", "2021-01-03", "2021-01-03", "08:02:34", "11:34:35"),
(11, 4, "AAA-7689", "2021-01-04", "2021-01-04", "07:59:59", "17:59:59"),
(12, 4, "CAB-6F78", "2021-02-15", null, "06:30:28", null),
(13, 2, "BAC-2834", "2021-02-18", null, "09:59:30", null),
(14, 3, "ABC-1A23", "2021-02-14", null, "11:59:20", null),
(15, 1, "BCA-4D56", "2021-01-30", "2021-01-30", "16:34:58", "19:45:38");


-- Listando todas a vagas utilizadas
SELECT 
    NumeroPatio,
    COUNT(*) AS VagasUsadas
FROM 
    ServicosEstacionamento
GROUP BY 
    NumeroPatio;
    
-- retornando nomes dos clientes e veículos com e hora e data de saída de cadas pátio
SELECT 
    c.Nome AS NomeCliente,
    v.Placa AS PlacaVeiculo,
    se.DataEntrada,
    se.DataSaida,
    se.NumeroPatio
FROM 
    Clientes c
JOIN 
    Veiculos v ON c.CPF = v.Cliente
JOIN 
    ServicosEstacionamento se ON v.Placa = se.PlacaVeiculo
ORDER BY 
    se.NumeroPatio;
    
    
-- 03.Retorne o nome dos clientes com modelo do veículo e as respectivas placas dos veículos ordenados por cliente 
SELECT 
    c.Nome AS NomeCliente,
    mv.DescricaoModelo AS ModeloVeiculo,
    v.Placa AS PlacaVeiculo
FROM 
    Clientes c
JOIN 
    Veiculos v ON c.CPF = v.Cliente
JOIN 
    ModelosVeiculos mv ON v.Modelo = mv.CodigoModelo
ORDER BY 
    c.Nome;
    

-- 04.Retorne o número total de vagas somando todos os pátios
SELECT SUM(NumeroVagas) AS TotalVagas
FROM patios;

-- 05.Retorne os pátios utilizados pelo cliente cujo cpf seja 123.456.789-10, a data de entrada, data de saída, placa do veículo. 
SELECT 
    se.NumeroPatio,
    se.DataEntrada,
    se.DataSaida,
    v.Placa AS PlacaVeiculo
FROM 
    ServicosEstacionamento se
JOIN 
    Veiculos v ON se.PlacaVeiculo = v.Placa
JOIN 
    Clientes c ON v.Cliente = c.CPF
WHERE 
    c.CPF = '123.456.789-01';
    

-- 06.Retorne  Proprietário,  Placa,  Pátio,  Data  Entrada  e  Data  Saída  dos  veículos estacionados no período de 01/01/2020 a 31/12/2020 
SELECT 
    c.Nome AS Proprietario,
    v.Placa,
    se.NumeroPatio AS Patio,
    se.DataEntrada,
    se.DataSaida
FROM 
    ServicosEstacionamento se
JOIN 
    Veiculos v ON se.PlacaVeiculo = v.Placa
JOIN 
    Clientes c ON v.Cliente = c.CPF
JOIN 
    Patios p ON se.NumeroPatio = p.NumeroPatio
WHERE 
    se.DataEntrada BETWEEN '2020-01-01' AND '2020-12-31'
    OR se.DataSaida BETWEEN '2020-01-01' AND '2020-12-31';
    
-- 08.Selecione os proprietários de motos e retorne Nome do proprietário, modelo, placa, cor, data e hora de entrada, data e hora de saída, pátio, endereço do pátio 
SELECT 
    c.Nome AS NomeProprietario,
    mv.DescricaoModelo AS Modelo,
    v.Placa,
    v.Cor,
    se.DataEntrada,
    se.HoraEntrada,
    se.DataSaida,
    se.HoraSaida,
    se.NumeroPatio AS Patio,
    p.Endereco AS EnderecoPatio
FROM 
    Clientes c
JOIN 
    Veiculos v ON c.CPF = v.Cliente
JOIN 
    ModelosVeiculos mv ON v.Modelo = mv.CodigoModelo
JOIN 
    ServicosEstacionamento se ON v.Placa = se.PlacaVeiculo
JOIN 
    Patios p ON se.NumeroPatio = p.NumeroPatio
WHERE 
    mv.DescricaoModelo = 'Moto';
    
    
-- 09.Selecione a propriedade de veículos sedan retornando o modelo, cor, placa
SELECT 
    mv.DescricaoModelo AS Modelo,
    v.Cor,
    v.Placa
FROM 
    Veiculos v
JOIN 
    ModelosVeiculos mv ON v.Modelo = mv.CodigoModelo
WHERE 
    mv.DescricaoModelo = 'Sedan';
    
-- 10.Retorne Placa, Modelo, Cor, Proprietário, Data de Entrada, Hora de Entrada, Data de Saída, Hora de Saída, Pátio, Endereço Pátio, dos veículos que estão estacionados sem registro de saída - OBS: Usa o parâmetro IS na condição NULA. 

SELECT 
    v.Placa,
    mv.DescricaoModelo AS Modelo,
    v.Cor,
    c.Nome AS Proprietario,
    se.DataEntrada,
    se.HoraEntrada,
    se.DataSaida,
    se.HoraSaida,
    se.NumeroPatio AS Patio,
    p.Endereco AS EnderecoPatio
FROM 
    Veiculos v
JOIN 
    ModelosVeiculos mv ON v.Modelo = mv.CodigoModelo
JOIN 
    ServicosEstacionamento se ON v.Placa = se.PlacaVeiculo
JOIN 
    Clientes c ON v.Cliente = c.CPF
JOIN 
    Patios p ON se.NumeroPatio = p.NumeroPatio
WHERE 
    se.DataSaida IS NULL;