CREATE DATABASE aulaDB;

USE auladb;

CREATE TABLE pessoas (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(100),
	cpfPessoa VARCHAR(12),
	endereco VARCHAR(100),
	telefone VARCHAR(12)
);

INSERT INTO pessoas (nome, cpfPessoa, endereco, telefone) VALUES 
('Ezequiel', '12345678912', 'Rua 1', '(99) 9999-9999'),
('Carlos', '78945612389', 'Rua 2', '(88) 8888-8888'),
('Eduardo', '45612378945', 'Rua 3', '(77) 7777-7777'),
('Cleber', '32165498721', 'Rua 4', '(66) 6666-6666');

CREATE TABLE veiculos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	placa VARCHAR(7),
	modelo VARCHAR(100),
	cpfPessoa VARCHAR(12)
);

INSERT INTO veiculos (placa, modelo, cpfPessoa) values
('qwer456', 'modelo 1', '12345678912'),
('asde123', 'modelo 2', '78945612389'),
('zxcv789', 'modelo 3', '45612378945'),
('rtyu741', 'modelo 4', '32165498721');

CREATE TABLE colaboradores (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	cpfPessoa VARCHAR(12),
	estado VARCHAR(3),
	salario DOUBLE(8,2)
);

INSERT INTO colaboradores (cpfPessoa, estado, salario) VALUES
('12345678912', 'RJ', 2000),
('78945612389', 'SP', 2500),
('45612378945', 'SC', 3000),
('32165498721', 'MS', 5000);

SELECT * FROM veiculos;
SELECT veiculos.modelo, pessoas.nome FROM veiculos JOIN pessoas USING (cpfPessoa);
SELECT colaboradores.cpfPessoa, colaboradores.salario, faixasalarial.cargo FROM colaboradores JOIN faixasalarial ON colaboradores.salario BETWEEN faixasalarial.inicio AND faixasalarial.fim;
