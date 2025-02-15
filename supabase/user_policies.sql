-- Enable RLS
alter table users enable row level security;

-- Create insert policy
create policy "Enable insert for anonymous users"
on users
for insert
to anon
with check (true);

-- Create read policy
create policy "Enable read access for anonymous users"
on users
for select
to anon
using (true);
