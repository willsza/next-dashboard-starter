-- Seed para ambiente de desenvolvimento

-- Limpa os dados existentes
TRUNCATE clients CASCADE;
TRUNCATE properties CASCADE;

-- Insere clientes de exemplo
INSERT INTO clients (id, name, email, role, status, last_access)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Imobiliária ABC', 'contato@abc.com', 'Imobiliária', 'Ativo', NOW()),
    ('22222222-2222-2222-2222-222222222222', 'Construtora XYZ', 'vendas@xyz.com', 'Construtora', 'Ativo', NOW()),
    ('33333333-3333-3333-3333-333333333333', 'Corretor João Silva', 'joao@email.com', 'Corretor', 'Ativo', NOW()),
    ('44444444-4444-4444-4444-444444444444', 'Incorporadora 123', 'contato@123inc.com', 'Incorporadora', 'Ativo', NOW());

-- Insere propriedades de exemplo
INSERT INTO properties (
    client_id,
    title,
    description,
    type,
    status,
    price,
    area,
    bedrooms,
    bathrooms,
    garage_spots,
    address_street,
    address_number,
    address_neighborhood,
    address_city,
    address_state,
    address_zip_code,
    features,
    images
)
VALUES 
    (
        '11111111-1111-1111-1111-111111111111',
        'Apartamento Luxuoso Jardins',
        'Apartamento de alto padrão com acabamento premium e vista panorâmica',
        'Apartamento',
        'Disponível',
        1500000.00,
        180.00,
        4,
        3,
        2,
        'Rua Oscar Freire',
        '123',
        'Jardins',
        'São Paulo',
        'SP',
        '01426-001',
        '[
            "Piscina",
            "Academia",
            "Área Gourmet",
            "Varanda Gourmet",
            "Segurança 24h"
        ]'::jsonb,
        '[
            {
                "url": "https://example.com/img1.jpg",
                "description": "Vista frontal"
            },
            {
                "url": "https://example.com/img2.jpg",
                "description": "Sala de estar"
            }
        ]'::jsonb
    ),
    (
        '22222222-2222-2222-2222-222222222222',
        'Casa de Campo',
        'Linda casa em condomínio fechado com área verde',
        'Casa',
        'Disponível',
        2200000.00,
        350.00,
        5,
        4,
        4,
        'Estrada do Campo',
        '500',
        'Condomínio Green Valley',
        'Cotia',
        'SP',
        '06700-000',
        '[
            "Piscina",
            "Churrasqueira",
            "Quadra de Tênis",
            "Jardim",
            "Casa de Caseiro"
        ]'::jsonb,
        '[
            {
                "url": "https://example.com/img3.jpg",
                "description": "Vista aérea"
            },
            {
                "url": "https://example.com/img4.jpg",
                "description": "Área externa"
            }
        ]'::jsonb
    ),
    (
        '33333333-3333-3333-3333-333333333333',
        'Sala Comercial Centro',
        'Sala comercial em prédio novo com infraestrutura completa',
        'Comercial',
        'Disponível',
        850000.00,
        75.00,
        0,
        1,
        2,
        'Avenida Paulista',
        '1000',
        'Bela Vista',
        'São Paulo',
        'SP',
        '01310-100',
        '[
            "Ar Condicionado",
            "Piso Elevado",
            "Forro Modular",
            "Controle de Acesso"
        ]'::jsonb,
        '[
            {
                "url": "https://example.com/img5.jpg",
                "description": "Recepção"
            },
            {
                "url": "https://example.com/img6.jpg",
                "description": "Vista da sala"
            }
        ]'::jsonb
    );

-- Insere mais alguns imóveis com variações de status e tipos
INSERT INTO properties (
    client_id,
    title,
    type,
    status,
    price,
    area,
    address_city,
    address_state
)
VALUES 
    ('44444444-4444-4444-4444-444444444444', 'Terreno Industrial', 'Terreno', 'Reservado', 3000000.00, 5000.00, 'Guarulhos', 'SP'),
    ('11111111-1111-1111-1111-111111111111', 'Kitnet Centro', 'Apartamento', 'Vendido', 200000.00, 30.00, 'São Paulo', 'SP'),
    ('22222222-2222-2222-2222-222222222222', 'Galpão Logístico', 'Galpão', 'Disponível', 5000000.00, 2000.00, 'Barueri', 'SP'),
    ('33333333-3333-3333-3333-333333333333', 'Loja Shopping', 'Comercial', 'Em Obras', 1200000.00, 45.00, 'Campinas', 'SP');
