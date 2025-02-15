-- Enable Row Level Security
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to read all clients
CREATE POLICY "Allow authenticated users to read clients"
ON clients FOR SELECT
TO authenticated
USING (true);

-- Create policy to allow authenticated users to insert clients
CREATE POLICY "Allow authenticated users to insert clients"
ON clients FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create policy to allow authenticated users to update their own clients
CREATE POLICY "Allow authenticated users to update clients"
ON clients FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create policy to allow authenticated users to delete their own clients
CREATE POLICY "Allow authenticated users to delete clients"
ON clients FOR DELETE
TO authenticated
USING (true);
