USE sakila;

-- -

SELECT
	*
FROM
	payment
WHERE
	customer_id IN(269, 239, 126, 399, 142)
;

-- -

SELECT
	*
FROM
	address
WHERE
	district IN('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas')
;

-- 01

SELECT
	*
FROM
	customer
WHERE
	last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY
	first_name
;

-- 02

SELECT
	email
FROM
	customer
WHERE
	address_id BETWEEN 172 AND 176
ORDER BY
	first_name, last_name
;

-- 03

SELECT
	COUNT(payment_id)
FROM
	payment
WHERE
	payment_date BETWEEN '2005-05-01' AND '2005-08-01'
;

-- 04

SELECT
	title, release_year, rental_duration
FROM
	film
WHERE
	rental_duration BETWEEN 3 AND 6
ORDER BY
	rental_duration DESC, title
;

-- 05

SELECT
	title, rating
FROM
	film
WHERE
	rating IN('G', 'PG', 'PG-13')
ORDER BY
	title
LIMIT 500
;