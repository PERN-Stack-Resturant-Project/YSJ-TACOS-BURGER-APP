CREATE DATABASE YSJ_Burgers_Tacos;

CREATE TABLE Orders 
    (Order_ID                   NUMBER(10)          NOT NULL,
     Order_Customer_Name        VARCHAR(25)         NOT NULL,
     Order_Customer_Mobile      NUMBER(10),
     Order_Customer_Email       VARCHAR(50),
     Order_Date                 NUMBER(10),
     line1 VARCHAR(50),
     line2 VARCHAR(50),
     city VARCHAR(50),
     province VARCHAR(50),
     country VARCHAR(50),

      CONSTRAINT Order_ID_PK PRIMARY KEY (Order_ID));

CREATE TABLE Menu_Item_Orders
    (Menu_Item_Order_ID         NUMBER(10)     NOT NULL,
     Menu_Item_Name             VARCHAR(25),   
     Menu_Item_Order_Qauntity   NUMBER(2)     NOT NULL,    
     Order_Total                NUMBER(2)     NOT NULL,
     Order_ID                   NUMBER(10)   NOT NULL,
     
CONSTRAINT Menu_Item_Order_ID_PK PRIMARY KEY (Menu_Item_Order_ID),
CONSTRAINT Order_ID_FK FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID));