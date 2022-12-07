show databases;
use kdt;

CREATE TABLE todo (
    id INT NOT NULL PRIMARY KEY auto_increment,
    title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);

DESC todo;

INSERT INTO todo VALUES (null, 'my todo1', 0);
INSERT INTO todo VALUES (null, 'my todo2', 0);
INSERT INTO todo VALUES (null, 'my todo3', 0);
INSERT INTO todo VALUES (null, 'my todo4', 0);
INSERT INTO todo VALUES (null, 'my todo5', 0);
INSERT INTO todo VALUES (null, 'my todo6', 0);

SELECT * FROM todo;


--테이블 데이터 수정(update)
UPDATE visitor SET name='dfdf', comment='ffdfdf' WHERE id=1;