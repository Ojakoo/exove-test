SELECT ordered.name, ordered.numbers FROM 
	(SELECT first_name || ' ' || last_name AS name, numbers, last_name 
		FROM people LEFT JOIN 
		(SELECT user_id, ARRAY_AGG(number) 
			AS numbers 
			FROM phones 
			GROUP BY user_id
		) AS grouped
		ON people.id = grouped.user_id
		ORDER BY last_name
	) AS ordered