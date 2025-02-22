-- Create extension for UUID generation if not exists
create extension if not exists "uuid-ossp";

-- Enable Row Level Security
alter table if exists clients enable row level security;

-- Create clients table
create table if not exists clients (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    email varchar(255),
    role varchar(50),
    status varchar(20) default 'Ativo',
    last_access timestamp with time zone default now(),
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- Create function to automatically update updated_at
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Create trigger for updated_at
drop trigger if exists set_updated_at on clients;
create trigger set_updated_at
    before update on clients
    for each row
    execute function update_updated_at_column();

-- Create RLS policies
create policy "Enable read access for authenticated users"
    on clients for select
    to authenticated
    using (true);

create policy "Enable insert access for authenticated users"
    on clients for insert
    to authenticated
    with check (true);

create policy "Enable update access for authenticated users"
    on clients for update
    to authenticated
    using (true)
    with check (true);

create policy "Enable delete access for authenticated users"
    on clients for delete
    to authenticated
    using (true);

-- Create indexes
create index if not exists idx_clients_email on clients(email);
create index if not exists idx_clients_status on clients(status);
create index if not exists idx_clients_created_at on clients(created_at);

-- Insert some initial data
insert into clients (name, email, role, status)
values 
    ('Empresa ABC', 'contato@empresaabc.com', 'Cliente', 'Ativo'),
    ('Imobiliária XYZ', 'admin@xyz.com', 'Parceiro', 'Ativo'),
    ('Construtora 123', 'contato@const123.com', 'Cliente', 'Ativo')
on conflict do nothing;
