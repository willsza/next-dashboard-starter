-- Create properties table
create table if not exists properties (
    id uuid default uuid_generate_v4() primary key,
    client_id uuid references clients(id) on delete cascade,
    title varchar(255) not null,
    description text,
    type varchar(50) not null, -- Apartamento, Casa, Terreno, etc.
    status varchar(20) default 'Disponível',
    price decimal(12,2) not null,
    area decimal(10,2),
    bedrooms smallint,
    bathrooms smallint,
    garage_spots smallint,
    address_street varchar(255),
    address_number varchar(20),
    address_complement varchar(100),
    address_neighborhood varchar(100),
    address_city varchar(100),
    address_state char(2),
    address_zip_code varchar(10),
    latitude decimal(10,8),
    longitude decimal(11,8),
    features jsonb default '[]',
    images jsonb default '[]',
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table if exists properties enable row level security;

-- Create trigger for updated_at
drop trigger if exists set_updated_at on properties;
create trigger set_updated_at
    before update on properties
    for each row
    execute function update_updated_at_column();

-- Create RLS policies
create policy "Enable read access for authenticated users"
    on properties for select
    to authenticated
    using (true);

create policy "Enable insert access for authenticated users"
    on properties for insert
    to authenticated
    with check (true);

create policy "Enable update access for authenticated users"
    on properties for update
    to authenticated
    using (true)
    with check (true);

create policy "Enable delete access for authenticated users"
    on properties for delete
    to authenticated
    using (true);

-- Create indexes
create index if not exists idx_properties_client_id on properties(client_id);
create index if not exists idx_properties_type on properties(type);
create index if not exists idx_properties_status on properties(status);
create index if not exists idx_properties_price on properties(price);
create index if not exists idx_properties_city on properties(address_city);
create index if not exists idx_properties_created_at on properties(created_at);

-- Insert some initial data
insert into properties (
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
    features
)
select
    c.id,
    'Apartamento Moderno no Centro',
    'Lindo apartamento com acabamento de alto padrão',
    'Apartamento',
    'Disponível',
    450000.00,
    120.00,
    3,
    2,
    2,
    'Rua Principal',
    '123',
    'Centro',
    'São Paulo',
    'SP',
    '01001-000',
    '[
        "Piscina",
        "Academia",
        "Churrasqueira",
        "Playground"
    ]'::jsonb
from clients c
where c.email = 'contato@empresaabc.com'
limit 1
on conflict do nothing;
