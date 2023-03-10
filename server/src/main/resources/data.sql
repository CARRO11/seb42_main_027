INSERT INTO tag (type)
SELECT * FROM (
  SELECT 'KOREAN' AS type
  UNION SELECT '국어'
  UNION SELECT '수학'
  UNION SELECT '과학'
  UNION SELECT '사회'
  UNION SELECT '고1'
  UNION SELECT '고2'
  UNION SELECT '고3'
  UNION SELECT '내신'
  UNION SELECT '수능'
  UNION SELECT '정시'
  UNION SELECT '수시'
  UNION SELECT '특강'
  UNION SELECT '메가스터디'
  UNION SELECT '대성마이맥'
  UNION SELECT '이투스'
  UNION SELECT 'EBS'
) t
WHERE NOT EXISTS (SELECT 1 FROM tag WHERE tag.type = t.type);
