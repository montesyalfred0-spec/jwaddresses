jwaddresses=# \d addresses;
                                           Table "public.addresses"                                      
     Column      |            Type             | Collation | Nullable |                Default                
-----------------+-----------------------------+-----------+----------+---------------------------------------
 id              | integer                     |           | not null | nextval('addresses_id_seq'::regclass)
 neighborhood_id | integer                     |           |          | 
 name            | character varying(100)      |           | not null | 
 age             | integer                     |           |          |                                  
 family          | character varying(200)      |           |          |                                  
 address         | text                        |           | not null |                                  
 location_string | text                        |           |          |                                  
 created_at      | timestamp without time zone |           |          | CURRENT_TIMESTAMP                
Indexes:                                                                                                 
    "addresses_pkey" PRIMARY KEY, btree (id)                                                             
Foreign-key constraints:                                                                                 
    "addresses_neighborhood_id_fkey" FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id) ON DELETE CASCADE                                                                                                  
                                                                                                         
                                                                                                         
jwaddresses=# \d territories;
                                    Table "public.territories"                                           
 Column |          Type          | Collation | Nullable |                 Default                 
--------+------------------------+-----------+----------+-----------------------------------------
 id     | integer                |           | not null | nextval('territories_id_seq'::regclass)
 name   | character varying(100) |           | not null | 
Indexes:
    "territories_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "neighborhoods" CONSTRAINT "neighborhoods_territory_id_fkey" FOREIGN KEY (territory_id) REFERENCES territories(id) ON DELETE CASCADE                                                                     
                                                                                                         
                                                                                                         
jwaddresses=# 
jwaddresses=# 
jwaddresses=# 
jwaddresses=# \d users
                                        Table "public.users"                                             
   Column   |            Type             | Collation | Nullable |              Default              
------------+-----------------------------+-----------+----------+-----------------------------------
 id         | integer                     |           | not null | nextval('users_id_seq'::regclass)
 username   | character varying(50)       |           | not null | 
 password   | character varying(255)      |           | not null | 
 name       | character varying(100)      |           | not null | 
 created_at | timestamp without time zone |           |          | CURRENT_TIMESTAMP
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)                                                                 
    "users_username_key" UNIQUE CONSTRAINT, btree (username)                                             
                                                                                                         
                                                                                                         
jwaddresses=# 
jwaddresses=# \d neighborhoods;
                                       Table "public.neighborhoods"                                      
    Column    |          Type          | Collation | Nullable |                  Default                  --------------+------------------------+-----------+----------+------------------------------------------- id           | integer                |           | not null | nextval('neighborhoods_id_seq'::regclass)
 territory_id | integer                |           |          | 
 name         | character varying(100) |           | not null | 
Indexes:
    "neighborhoods_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "neighborhoods_territory_id_fkey" FOREIGN KEY (territory_id) REFERENCES territories(id) ON DELETE CASCADE                                                                                                      
Referenced by:                                                                                           
    TABLE "addresses" CONSTRAINT "addresses_neighborhood_id_fkey" FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id) ON DELETE CASCADE                                                                     
                                                                                                         
                                                                                                         
jwaddresses=# 
jwaddresses=# 