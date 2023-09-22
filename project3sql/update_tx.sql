set schema 'shopify';

begin transaction;

update pricing_plans set price = 5 where price < 5;
update pricing_plans set title = concat(title, ' (Minimum $5)') where price = 5;

commit;