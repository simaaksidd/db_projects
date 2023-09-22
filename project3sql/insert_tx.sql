set schema 'shopify';

begin transaction;

insert into apps (id, url, title, developer, developer_link, icon, reviews_count) 
values ('683d06af-14c7-4733-9bde-ec5b699af885', 'https://apps.shopify.com/SimaakandEdward','S and E Weight Watcher', 'S&E Corporation', 'https://apps.shopify.com/partners/developer-S-and-E',         'https://apps.shopifycdn.com/listing_images/9905a4c8f22cb4a3b0c32af55a58ec21/icon/e6d46a7e5e1df375d542d033aae80458.png?height=72&width=72',
0);

insert into apps_categories (app_id, category_id) values ('683d06af-14c7-4733-9bde-ec5b699af885', 'c769c2bd15500dd906102d9be97fdceb');

commit;
