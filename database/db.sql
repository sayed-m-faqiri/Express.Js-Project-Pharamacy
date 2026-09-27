CREATE TABLE doctor (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(200) NOT NULL ,
    lastname VARCHAR(200) ,
    bio VARCHAR(200) 
);
CREATE TABLE patient (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(200) NOT NULL ,
    sickness VARCHAR(200)
);
CREATE TABLE medicine (
    id SERIAL PRIMARY KEY ,
    brand_name VARCHAR(500) NOT NULL ,
    generic VARCHAR(1000) ,
    price NUMERIC(10,2) DEFAULT 0 ,
    stock NUMERIC(10,1) DEFAULT 0 ,
    usage TEXT
);
CREATE TABLE prescriptionHeader (
    id SERIAL PRIMARY KEY ,
    patient_id INT,
    doctor_id INT ,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    total_amount NUMERIC(10,2) DEFAULT 0 ,
    note VARCHAR(200) ,
    FOREIGN KEY (patient_id) REFERENCES patient(id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);
CREATE TABLE prescriptionItems (
    id SERIAL PRIMARY KEY ,
    medicine_id INT ,
    prescription_id INT , 
    price NUMERIC(10,2) ,
    quantity NUMERIC(10,2) ,
    note VARCHAR(200) ,
    FOREIGN KEY (medicine_id) REFERENCES medicine(id,
    FOREIGN KEY (prescription_id) REFERENCES prescriptionHeader(id)
);
